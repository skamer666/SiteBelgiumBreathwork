import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import SEOMeta from '../utils/SEOMeta'
import { CALENDLY_URL } from '../constants'

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }
const stagger = { show: { transition: { staggerChildren: 0.12 } } }

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WellnessCenter',
  name: 'Belgium Breathwork – Waterloo',
  description:
    "Studio de breathwork à Waterloo. Séances de groupe et individuelles d'Hypnotic Breathwork avec Daphnée, certifiée IPHM.",
  url: 'https://belgiumbreathwork.be/breathwork-waterloo',
  telephone: '+32494204093',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Avenue Floréal 20',
    addressLocality: 'Waterloo',
    postalCode: '1410',
    addressRegion: 'Brabant wallon',
    addressCountry: 'BE',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 50.7175, longitude: 4.3979 },
  areaServed: [
    { '@type': 'City', name: 'Waterloo' },
    { '@type': 'City', name: "Braine-l'Alleud" },
    { '@type': 'City', name: 'Bruxelles' },
  ],
}

const practical = [
  { label: 'Adresse', value: 'Avenue Floréal 20, 1410 Waterloo (adresse confirmée à la réservation)' },
  { label: 'Accès voiture', value: 'Ring R0 sortie Waterloo, ou chaussée de Waterloo (N5). Stationnement gratuit à proximité.' },
  { label: 'Train', value: 'Gare de Waterloo (lignes S), à quelques minutes du studio.' },
  { label: 'Tarif', value: '60 € en groupe · 150 € en individuel · paiement sur place, réservation gratuite en ligne.' },
]

export default function BreathworkWaterloo() {
  const handleCalendly = (e) => {
    e.preventDefault()
    if (window.Calendly) window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    else window.open(CALENDLY_URL, '_blank')
  }

  return (
    <Layout>
      <SEOMeta
        title="Breathwork à Waterloo – Hypnotic Breathwork avec Daphnée | Belgium Breathwork"
        description="Séances de breathwork à Waterloo, avenue Floréal. Hypnotic Breathwork avec Daphnée, certifiée IPHM : respiration consciente, hypnose et visualisation. Réservation gratuite, 60 € sur place."
        canonical="https://belgiumbreathwork.be/breathwork-waterloo"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center bg-hero-bg pt-28 pb-16 px-4 md:px-8 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="breathe-orb absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-sage-200/50 to-sage-100/30 blur-3xl" />
          <div className="breathe-orb-2 absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-gradient-to-tl from-sand-100/60 to-sage-100/40 blur-3xl" />
        </div>
        <motion.div variants={stagger} initial="hidden" animate="show" className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div variants={fadeUp} className="mb-6">
            <span className="section-tag text-sage-700 border-sage-200 bg-sage-50">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse" aria-hidden="true" />
              Waterloo · Brabant wallon
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="heading-xl text-navy-700 mb-6">
            Breathwork à Waterloo{' '}
            <span className="block text-gradient">avec Daphnée</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="body-lg text-navy-500/80 max-w-2xl mx-auto mb-8">
            Un studio calme avenue Floréal pour pratiquer l'Hypnotic Breathwork : respiration
            consciente, hypnose et visualisation guidée. Séances de groupe et individuelles,
            accessibles depuis tout le Brabant wallon et le sud de Bruxelles.
          </motion.p>
          <motion.button variants={fadeUp} onClick={handleCalendly} className="btn-primary text-lg">
            Réserver une séance — 60 €
          </motion.button>
        </motion.div>
      </section>

      {/* Le studio */}
      <section className="bg-white section-pad">
        <div className="container-max max-w-4xl">
          <h2 className="heading-lg text-navy-700 mb-6">Le studio de Waterloo</h2>
          <div className="space-y-5 text-navy-500/80 text-lg leading-relaxed">
            <p>
              Les séances se déroulent dans un espace privé et chaleureux à Waterloo, pensé pour
              qu'on puisse s'allonger, fermer les yeux et lâcher prise en toute sécurité. Petits
              groupes, tapis, couvertures et musique : rien d'intimidant, aucune performance attendue.
            </p>
            <p>
              <strong className="text-navy-700">Daphnée</strong> est praticienne certifiée{' '}
              <strong className="text-navy-700">IPHM</strong> en Hypnotic Breathwork. Chaque séance
              commence par un échange pour définir l'intention du jour, suivie de la pratique guidée
              (respiration en cycles, induction hypnotique, visualisation) puis d'un temps
              d'intégration.
            </p>
            <p>
              Waterloo et Braine-l'Alleud sont à moins de 10 minutes ; Rhode-Saint-Genèse, Uccle et
              le sud de Bruxelles à environ 20 minutes. C'est aussi une bonne raison de{' '}
              <Link to="/breathwork-bruxelles" className="text-sage-700 underline hover:text-sage-800">
                venir depuis Bruxelles
              </Link>{' '}
              pour une vraie coupure.
            </p>
          </div>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="bg-sage-50/50 section-pad">
        <div className="container-max max-w-4xl">
          <h2 className="heading-lg text-navy-700 mb-8">Infos pratiques</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {practical.map((row) => (
              <div key={row.label} className="bg-white rounded-2xl p-6 border border-sage-100 shadow-card">
                <p className="font-montserrat font-semibold text-navy-700 mb-2">{row.label}</p>
                <p className="text-navy-500/80 text-sm leading-relaxed">{row.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motifs */}
      <section className="bg-white section-pad">
        <div className="container-max max-w-4xl">
          <h2 className="heading-lg text-navy-700 mb-6">Pour quoi venir</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Anxiété & stress', to: '/anxiete', desc: 'Réguler un système nerveux en alerte permanente.' },
              { title: 'Burnout', to: '/burnout', desc: 'Sortir de l\'épuisement professionnel par le corps.' },
              { title: 'Sommeil', to: '/sommeil', desc: 'Retrouver un endormissement naturel.' },
            ].map((c) => (
              <Link key={c.to} to={c.to} className="block bg-sage-50 rounded-2xl p-6 border border-sage-100 hover:border-sage-300 transition-colors">
                <h3 className="font-montserrat font-semibold text-navy-700 mb-2">{c.title}</h3>
                <p className="text-navy-400 text-sm leading-relaxed">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 text-white section-pad">
        <div className="container-max max-w-3xl text-center">
          <h2 className="heading-lg text-white mb-4">
            Réserver à{' '}
            <span className="text-gradient-gold">Waterloo</span>
          </h2>
          <p className="body-lg text-white/70 max-w-2xl mx-auto mb-8">
            Séance de groupe à 60 €, réservation gratuite en ligne, paiement sur place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleCalendly} className="btn-primary text-lg">Réserver ma place — 60 €</button>
            <Link to="/" className="btn-outline text-lg">Découvrir Belgium Breathwork →</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
