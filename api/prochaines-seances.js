/**
 * Vercel Serverless Function — /api/prochaines-seances
 * Utilise event_type_available_times (max 7j par requête)
 * Enchaîne 4 semaines pour couvrir 28 jours de disponibilités
 */

const TOKEN      = (process.env.CALENDLY_TOKEN || '').replace(/\s/g, '')
const EVENT_URI  = `https://api.calendly.com/event_types/${process.env.CALENDLY_EVENT_TYPE_UUID}`
const HEADERS    = { Authorization: `Bearer ${TOKEN}` }
const MAX_SLOTS  = 5   // nombre de créneaux à afficher sur le site

async function fetchWeek(start, end) {
  const url =
    `https://api.calendly.com/event_type_available_times` +
    `?event_type=${encodeURIComponent(EVENT_URI)}` +
    `&start_time=${start}` +
    `&end_time=${end}`

  const res = await fetch(url, { headers: HEADERS })
  if (!res.ok) return []
  const data = await res.json()
  return data.collection || []
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Cache-Control', 's-maxage=180, stale-while-revalidate=60')

  // Debug : vérifie que les variables sont bien chargées
  if (!TOKEN || !process.env.CALENDLY_EVENT_TYPE_UUID) {
    return res.status(500).json({
      error: 'Variables manquantes',
      debug: {
        hasToken: !!TOKEN,
        hasEventUUID: !!process.env.CALENDLY_EVENT_TYPE_UUID,
      },
      seances: []
    })
  }

  try {
    const now    = new Date()
    now.setMinutes(now.getMinutes() + 2)

    // Enchaîne 4 fenêtres de 7 jours = 28 jours de dispo
    const allSlots = []
    for (let week = 0; week < 4; week++) {
      const start = new Date(now.getTime() + week * 7 * 24 * 60 * 60 * 1000)
      const end   = new Date(start.getTime() + 7 * 24 * 60 * 60 * 1000)

      const slots = await fetchWeek(
        start.toISOString().replace('.000', ''),
        end.toISOString().replace('.000', '')
      )
      allSlots.push(...slots)
      if (allSlots.length >= MAX_SLOTS) break
    }

    // Prend les N premiers créneaux disponibles
    const seances = allSlots.slice(0, MAX_SLOTS).map(slot => ({
      dateDebut:       slot.start_time,
      placesRestantes: slot.invitees_remaining,
      complet:         slot.invitees_remaining === 0,
      urlReservation:  slot.scheduling_url,
      lieu:            'Avenue Floréal 20, Waterloo',
      prix:            50,
    }))

    return res.status(200).json({ seances })

  } catch (err) {
    console.error('Calendly error:', err.message)
    return res.status(500).json({ error: err.message, seances: [] })
  }
}
