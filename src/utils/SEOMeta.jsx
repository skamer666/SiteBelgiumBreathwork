import { useEffect } from 'react'

const defaults = {
  title: 'Belgium Breathwork – Hypnotic Breathwork à Bruxelles & Waterloo',
  description: `Séances d'Hypnotic Breathwork avec Daphnée, certifiée IPHM. Libère tes émotions par la respiration consciente. Séance de groupe 60 € — paiement sur place, réservation gratuite. À Waterloo, à 20 min de Bruxelles.`,
  canonical: 'https://belgiumbreathwork.be/',
}

function setContent(selector, value) {
  document.querySelector(selector)?.setAttribute('content', value)
}

export default function SEOMeta({ title, description, canonical, schema }) {
  useEffect(() => {
    document.title = title
    setContent('meta[name="description"]', description)
    setContent('meta[property="og:title"]', title)
    setContent('meta[property="og:description"]', description)
    setContent('meta[property="og:url"]', canonical)
    setContent('meta[name="twitter:title"]', title)
    setContent('meta[name="twitter:description"]', description)

    const canonicalEl = document.querySelector('link[rel="canonical"]')
    if (canonicalEl) canonicalEl.href = canonical

    let schemaEl = document.getElementById('page-schema')
    if (schema) {
      if (!schemaEl) {
        schemaEl = document.createElement('script')
        schemaEl.id = 'page-schema'
        schemaEl.type = 'application/ld+json'
        document.head.appendChild(schemaEl)
      }
      schemaEl.textContent = JSON.stringify(schema)
    }

    return () => {
      document.title = defaults.title
      setContent('meta[name="description"]', defaults.description)
      setContent('meta[property="og:title"]', defaults.title)
      setContent('meta[property="og:description"]', defaults.description)
      setContent('meta[property="og:url"]', defaults.canonical)
      setContent('meta[name="twitter:title"]', defaults.title)
      setContent('meta[name="twitter:description"]', defaults.description)
      const el = document.querySelector('link[rel="canonical"]')
      if (el) el.href = defaults.canonical
      document.getElementById('page-schema')?.remove()
    }
  }, [title, description, canonical, schema])

  return null
}
