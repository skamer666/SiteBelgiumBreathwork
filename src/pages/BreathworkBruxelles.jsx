import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import SEOMeta from '../utils/SEOMeta'
import { CALENDLY_URL } from '../constants'

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }
const stagger = { show: { transition: { staggerChildren: 0.12 } } }

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Séance de breathwork',
  name: 'Breathwork à Bruxelles',
  description:
    "Séances d'Hypnotic Breathwork pour les habitants de Bruxelles, organisées à Waterloo (Brabant wallon), à 20 minutes du centre-ville.",
  provider: {
    '@type': 'WellnessCenter',
    name: 'Belgium Breathwork',
    url: 'https://belgiumbreathwork.be',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avenue Floréal 20',
      addressLocality: 'Waterloo',
      postalCode: '1410',
      addressRegion: 'Brabant wallon',
      addressCountry: 'BE',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Bruxelles' },
    { '@type': 'City', name: 'Uccle' },
    { '@type': 'City', name: 'Ixelles' },
    { '@type': 'City', name: 'Rhode-Saint-Genèse' },
  ],
  url: 'https://belgiumbreathwork.be/breathwork-bruxelles',
}

const communes = [
  { name: 'Uccle', time: '15 min en voiture' },
  { name: 'Ixelles', time: '20–25 min' },
  { name: 'Rhode-Saint-Genèse', time: '10 min' },
  { name: 'Forest', time: '20 min' },
  { name: 'Saint-Gilles', time: '20–25 min' },
  { name: 'Watermael-Boitsfort', time: '20 min' },
]

export default function BreathworkBruxelles() {
  const handleCalendly = (e) => {
    e.preventDefault()
    if (window.Calendly) window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    else window.open(CALENDLY_URL, '_blank')
  }

  return (
    <Layout>
      <SEOMeta
        title="Breathwork à Bruxelles – Séances près de la capitale | Belgium Breathwork"
        description="Vous cherchez du breathwork à Bruxelles ? Les séances ont lieu à Waterloo, à 20 min du centre et accessibles depuis Uccle, Ixelles et Rhode-Saint-Genèse. Réservation gratuite, 60 € sur place."
        canonical="https://belgiumbreathwork.be/breathwork-bruxelles"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center bg-hero-bg pt-28 pb-16 px-4 md:px-8 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="breathe-orb absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-sage-200/50 to-sage-100/30 blur-3xl" />
          <div className="breathe-orb-2 absolute -bottom-20 -right-20 w-[350px] h-[350px] rounded-full bg-gradient-to-tl from-sand-100/60 to-sage-100/40 blur-3xl" />
        </div>
        <motion.div variants={stagger} initial="hidden" animate="show" className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div variants={fadeUp} className="mb-6">
            <span className="section-tag text-sage-700 border-sage-200 bg-sage-50">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse" aria-hidden="true" />
              Bruxelles & Brabant wallon
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="heading-xl text-navy-700 mb-6">
            Breathwork à Bruxelles{' '}
            <span className="block text-gradient">à 20 minutes du centre</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="body-lg text-navy-500/80 max-w-2xl mx-auto mb-8">
            Les séances de Belgium Breathwork ont lieu à Waterloo, juste au sud de Bruxelles.
            Un cadre calme, hors du bruit de la ville, facile d'accès en voiture depuis Uccle,
            Ixelles ou Rhode-Saint-Genèse.
          </motion.p>
          <motion.button variants={fadeUp} onClick={handleCalendly} className="btn-primary text-lg">
            Réserver une séance — 60 €
          </motion.button>
        </motion.div>
      </section>

      {/* Pourquoi */}
      <section className="bg-white section-pad">
        <div className="container-max max-w-4xl">
          <h2 className="heading-lg text-navy-700 mb-6">Pourquoi faire du breathwork quand on vit à Bruxelles</h2>
          <div className="space-y-5 text-navy-500/80 text-lg leading-relaxed">
            <p>
              Bruxelles concentre les facteurs qui dérèglent le système nerveux : trajets denses,
              charge mentale professionnelle, sur-stimulation permanente. Le{' '}
              <strong className="text-navy-700">breathwork</strong> agit précisément là où le stress
              s'installe — dans la respiration et le nerf vague — pour ramener le corps en mode calme.
            </p>
            <p>
              La pratique proposée est l'<strong className="text-navy-700">Hypnotic Breathwork</strong> :
              une respiration consciente guidée, associée à une induction hypnotique légère et à de la
              visualisation. Une séance dure 60 à 90 minutes, allongé·e, les yeux fermés. Beaucoup de
              personnes ressentent un relâchement dès la première fois.
            </p>
            <p>
              Choisir une séance <em>hors</em> de Bruxelles a un avantage concret : la coupure. Vingt
              minutes de route suffisent pour changer d'environnement, et l'effet d'une séance tient
              mieux quand on ne replonge pas immédiatement dans l'agitation.
            </p>
          </div>

          <div className="bg-sage-50 border border-sage-100 rounded-2xl p-6 my-8">
            <p className="font-montserrat font-semibold text-navy-700 mb-2">Pour quoi les Bruxellois·es viennent</p>
            <ul className="text-navy-500/80 leading-relaxed space-y-1.5 list-disc pl-5">
              <li><Link to="/anxiete" className="text-sage-700 underline hover:text-sage-800">Anxiété et stress chronique</Link></li>
              <li><Link to="/burnout" className="text-sage-700 underline hover:text-sage-800">Burnout et épuisement professionnel</Link></li>
              <li><Link to="/sommeil" className="text-sage-700 underline hover:text-sage-800">Troubles du sommeil et insomnie</Link></li>
              <li>Libération émotionnelle et besoin de « faire une pause »</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Accès */}
      <section className="bg-sage-50/50 section-pad">
        <div className="container-max max-w-4xl">
          <h2 className="heading-lg text-navy-700 mb-6">Comment venir depuis Bruxelles</h2>
          <div className="space-y-5 text-navy-500/80 text-lg leading-relaxed mb-8">
            <p>
              Le studio se trouve <strong className="text-navy-700">Avenue Floréal 20, 1410 Waterloo</strong>.
              Comptez environ 20 minutes en voiture depuis le sud de Bruxelles par la chaussée de
              Waterloo (N5) ou le ring (R0, sortie Waterloo). Stationnement gratuit à proximité.
              En transports en commun, la gare de Waterloo est desservie par les trains S depuis
              Bruxelles-Midi et Bruxelles-Central.
            </p>
            <p>L'adresse exacte et les instructions d'accès sont confirmées à la réservation.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {communes.map((c) => (
              <div key={c.name} className="bg-white rounded-xl p-5 border border-sage-100 shadow-card">
                <p className="font-montserrat font-semibold text-navy-700">{c.name}</p>
                <p className="text-navy-400 text-sm mt-1">{c.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white section-pad">
        <div className="container-max max-w-3xl">
          <h2 className="heading-lg text-navy-700 mb-8">Questions fréquentes</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Y a-t-il des séances de breathwork dans Bruxelles même ?',
                a: "Les séances régulières ont lieu à Waterloo, à 20 min du centre. Des séances entreprise et sur mesure peuvent être organisées à Bruxelles sur demande — contactez Daphnée par email ou WhatsApp.",
              },
              {
                q: 'Combien coûte une séance ?',
                a: "60 € pour une séance de groupe, payable sur place (espèces ou virement). La réservation en ligne est gratuite et sans prépaiement. Séance individuelle : 150 €.",
              },
              {
                q: 'Faut-il une expérience préalable ?',
                a: "Non. La respiration est entièrement guidée et convient aux débutant·es comme aux personnes très cartésiennes. Daphnée vérifie les contre-indications avant chaque séance.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-sage-100 pb-5 last:border-0">
                <h3 className="font-montserrat font-semibold text-navy-700 mb-2">{item.q}</h3>
                <p className="text-navy-500/80 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 text-white section-pad">
        <div className="container-max max-w-3xl text-center">
          <h2 className="heading-lg text-white mb-4">
            Respirer autrement, tout près de{' '}
            <span className="text-gradient-gold">Bruxelles</span>
          </h2>
          <p className="body-lg text-white/70 max-w-2xl mx-auto mb-8">
            Séance de groupe à 60 € à Waterloo. Réservation gratuite, paiement sur place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleCalendly} className="btn-primary text-lg">Réserver ma place — 60 €</button>
            <Link to="/breathwork-waterloo" className="btn-outline text-lg">Le studio de Waterloo →</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
