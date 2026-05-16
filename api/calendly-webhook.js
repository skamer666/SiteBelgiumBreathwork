import crypto from 'crypto';

const META_PIXEL_ID          = process.env.META_PIXEL_ID || '1604055144196145';
const META_ACCESS_TOKEN      = process.env.META_ACCESS_TOKEN || '';
const CALENDLY_SIGNING_KEY   = process.env.CALENDLY_WEBHOOK_SIGNING_KEY || '';
const META_API_URL           = `https://graph.facebook.com/v20.0/${META_PIXEL_ID}/events`;

export const config = { api: { bodyParser: false } };

function sha256(str) {
  return crypto.createHash('sha256').update(str.trim().toLowerCase()).digest('hex');
}

function validateSignature(rawBody, header) {
  if (!CALENDLY_SIGNING_KEY || !header) return !CALENDLY_SIGNING_KEY;
  const parts = Object.fromEntries(header.split(',').map(p => p.split('=')));
  const { t, v1 } = parts;
  if (!t || !v1) return false;
  const expected = crypto.createHmac('sha256', CALENDLY_SIGNING_KEY)
    .update(`${t}.${rawBody}`)
    .digest('hex');
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(v1));
}

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const rawBody = await getRawBody(req);

  const sigHeader = req.headers['calendly-webhook-signature'] || '';
  if (!validateSignature(rawBody, sigHeader)) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  let body;
  try { body = JSON.parse(rawBody); }
  catch { return res.status(400).json({ error: 'Invalid JSON' }); }

  // Seul invitee.created nous intéresse
  if (body.event !== 'invitee.created') {
    return res.status(200).json({ received: true });
  }

  const payload    = body.payload || {};
  const email      = payload.email || '';
  const name       = payload.name  || '';
  const inviteeUri = payload.uri   || `calendly-${Date.now()}`;

  const [firstName, ...rest] = name.split(' ');
  const lastName = rest.join(' ');

  const userData = {
    client_ip_address: (req.headers['x-forwarded-for'] || '').split(',')[0].trim(),
    client_user_agent: req.headers['user-agent'] || '',
  };
  if (email)     userData.em = [sha256(email)];
  if (firstName) userData.fn = [sha256(firstName)];
  if (lastName)  userData.ln = [sha256(lastName)];

  if (!META_ACCESS_TOKEN) {
    console.error('[CAPI] META_ACCESS_TOKEN manquant');
    return res.status(500).json({ error: 'META_ACCESS_TOKEN non configuré' });
  }

  const capiBody = {
    data: [{
      event_name:       'Lead',
      event_time:       Math.floor(Date.now() / 1000),
      action_source:    'website',
      event_id:         inviteeUri,
      event_source_url: 'https://belgiumbreathwork.be',
      user_data:        userData,
    }],
  };

  const metaRes = await fetch(`${META_API_URL}?access_token=${META_ACCESS_TOKEN}`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(capiBody),
  });

  const metaData = await metaRes.json();

  if (!metaRes.ok) {
    console.error('[CAPI] Erreur Meta:', JSON.stringify(metaData));
    return res.status(502).json({ error: 'Meta CAPI error', details: metaData });
  }

  console.log(`[CAPI] Lead envoyé — invitee: ${inviteeUri} — events_received: ${metaData.events_received}`);
  return res.status(200).json({ success: true, events_received: metaData.events_received });
}
