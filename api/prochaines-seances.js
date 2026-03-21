/**
 * Vercel Serverless Function — /api/prochaines-seances
 * Retourne les prochaines séances de groupe + places restantes
 */

const TOKEN         = process.env.CALENDLY_TOKEN
const EVENT_UUID    = process.env.CALENDLY_EVENT_TYPE_UUID
const USER_URI      = process.env.CALENDLY_USER_URI
const MAX_PLACES    = parseInt(process.env.CALENDLY_MAX_PLACES || '10')
const HEADERS       = {
  Authorization: `Bearer ${TOKEN}`,
  'Content-Type': 'application/json',
}

async function fetchJSON(url) {
  const res = await fetch(url, { headers: HEADERS })
  if (!res.ok) throw new Error(`Calendly API error: ${res.status}`)
  return res.json()
}

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=60') // cache 5min

  try {
    const now = new Date().toISOString()

    // 1. Récupère les prochains événements planifiés (actifs, dans le futur)
    const eventsData = await fetchJSON(
      `https://api.calendly.com/scheduled_events` +
      `?user=${encodeURIComponent(USER_URI)}` +
      `&event_type=https://api.calendly.com/event_types/${EVENT_UUID}` +
      `&status=active` +
      `&min_start_time=${now}` +
      `&sort=start_time:asc` +
      `&count=5`
    )

    const events = eventsData.collection || []

    // 2. Pour chaque événement, compte les inscrits
    const seances = await Promise.all(
      events.map(async (event) => {
        const eventUUID = event.uri.split('/').pop()

        let inviteesCount = 0
        try {
          const invData = await fetchJSON(
            `https://api.calendly.com/scheduled_events/${eventUUID}/invitees?status=active&count=100`
          )
          inviteesCount = invData.pagination?.count ?? invData.collection?.length ?? 0
        } catch {
          // Si erreur invitees, on continue avec 0
        }

        const placesRestantes = Math.max(0, MAX_PLACES - inviteesCount)

        return {
          uuid:            eventUUID,
          nom:             event.name,
          dateDebut:       event.start_time,
          dateFin:         event.end_time,
          placesRestantes,
          placesTotal:     MAX_PLACES,
          complet:         placesRestantes === 0,
          lieu:            'Avenue Floréal 20, Waterloo',
          prix:            50,
          urlReservation:  `https://calendly.com/belgiumbreathwork/belgium-breathwork`,
        }
      })
    )

    return res.status(200).json({ seances })

  } catch (err) {
    console.error('Calendly API error:', err.message)
    return res.status(500).json({ error: 'Impossible de récupérer les séances', seances: [] })
  }
}
