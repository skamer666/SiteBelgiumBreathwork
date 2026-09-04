import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import SEOMeta from '../utils/SEOMeta'
import { CALENDLY_URL } from '../constants'

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }
const stagger = { show: { transition: { staggerChildren: 0.12 } } }

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Breathwork contre le Burnout à Bruxelles | Belgium Breathwork',
  description: 'Épuisement professionnel à Bruxelles : comment le breathwork agit sur le système nerveux pour sortir du burnout. Séances à Waterloo, 20 min de Bruxelles.',
  url: 'https://belgiumbreathwork.be/burnout',
  isPartOf: { '@type': 'WebSite', url: 'https://belgiumbreathwork.be' },
}

export default function Burnout() {
  const handleCalendly = (e) => {
    e.preventDefault()
    if (window.Calendly) window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    else window.open(CALENDLY_URL, '_blank')
  }

  return (
    <Layout>
      <SEOMeta
        title="Breathwork contre le Burnout à Bruxelles | Belgium Breathwork"
        description="Épuisement professionnel, fatigue chronique, perte de sens : le breathwork agit directement sur le système nerveux pour sortir du burnout. Séances à Waterloo, 20 min de Bruxelles."
        canonical="https://belgiumbreathwork.be/burnout"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[65vh] flex flex-col items-center justify-center bg-hero-bg pt-28 pb-16 px-4 md:px-8 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="breathe-orb absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-sage-200/50 to-sage-100/30 blur-3xl" />
          <div className="breathe-orb-2 absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-gradient-to-tl from-sand-100/60 to-sage-100/40 blur-3xl" />
        </div>
        <motion.div variants={stagger} initial="hidden" animate="show"
                    className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div variants={fadeUp} className="mb-6">
            <span className="section-tag text-sage-700 border-sage-200 bg-sage-50">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse" aria-hidden="true" />
              Burnout & Épuisement professionnel
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="heading-xl text-navy-700 mb-6">
            Sortir du burnout à Bruxelles{' '}
            <span className="block text-gradient">par la respiration</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="body-lg text-navy-500/80 max-w-2xl mx-auto mb-8">
            Le burnout n'est pas qu'une question de pensées. C'est un dérèglement du système nerveux
            que la psychologie seule ne peut pas toujours atteindre.
            L'Hypnotic Breathwork agit à la racine — directement sur le corps.
          </motion.p>
          <motion.button variants={fadeUp} onClick={handleCalendly} className="btn-primary text-lg">
            Réserver une séance — 60 €
          </motion.button>
        </motion.div>
      </section>

      {/* Section 1 : le burnout en Belgique */}
      <section className="bg-white section-pad">
        <div className="container-max max-w-4xl">
          <h2 className="heading-lg text-navy-700 mb-6">Le burnout en Belgique : une épidémie silencieuse</h2>
          <div className="space-y-5 text-navy-500/80 text-lg leading-relaxed">
            <p>
              Selon l'<strong className="text-navy-700">INAMI</strong>, les incapacités de travail liées
              au burnout ont augmenté de plus de <strong className="text-navy-700">136 % chez les moins de 30 ans</strong>{' '}
              en dix ans en Belgique. Ce n'est plus une exception — c'est une réalité que des milliers
              de Bruxellois vivent chaque année.
            </p>
            <p>
              Le burnout se manifeste souvent par un épuisement inexpliqué, une irritabilité chronique,
              une perte de motivation, des troubles du sommeil et une incapacité à "se déconnecter"
              même pendant les congés. Si ces symptômes vous parlent, vous n'êtes pas seul(e).
            </p>
            <div className="bg-sage-50 border border-sage-100 rounded-2xl p-6 my-8">
              <p className="font-montserrat font-semibold text-navy-700 mb-2">
                Ce que le burnout fait réellement à votre corps
              </p>
              <p className="text-navy-500/80 leading-relaxed">
                Votre système nerveux reste bloqué en mode "combat ou fuite" : le cortisol reste élevé,
                le sommeil se fragmente, la motivation s'effondre. Ce n'est pas de la faiblesse —
                c'est une réponse physiologique à un stress chronique non traité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : pourquoi le breathwork */}
      <section className="bg-sage-50/50 section-pad">
        <div className="container-max max-w-4xl">
          <h2 className="heading-lg text-navy-700 mb-6">
            Pourquoi le breathwork là où la psychologie classique ne suffit pas
          </h2>
          <div className="space-y-5 text-navy-500/80 text-lg leading-relaxed">
            <p>
              La psychologie classique est précieuse — mais elle agit principalement sur les pensées.
              Le burnout, lui, est inscrit dans le corps. Le système nerveux autonome ne répond pas
              aux arguments rationnels ni aux bonnes résolutions.
            </p>
            <p>
              L'<strong className="text-navy-700">Hypnotic Breathwork</strong> combine des cycles de
              respiration consciente avec une légère induction hypnotique. Cette combinaison active
              directement le <strong className="text-navy-700">nerf vague</strong> — le frein naturel
              de votre corps contre le stress chronique — et permet au système nerveux de sortir de
              l'état d'alerte permanent.
            </p>
            <p>
              Une recherche de l'<strong className="text-navy-700">Université de Queensland</strong>{' '}
              confirme que les pratiques de breathwork réduisent significativement les marqueurs
              biologiques du stress (cortisol salivaire, fréquence cardiaque au repos) en quelques
              semaines de pratique régulière.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Agit sur le corps', desc: 'Active le nerf vague et réduit le cortisol dès la première séance' },
              { title: 'Libère les émotions', desc: 'Permet d\'accéder à des émotions bloquées et les traiter en douceur' },
              { title: 'Effet durable', desc: 'Le système nerveux apprend un nouveau baseline — moins de réactivité au stress' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-sage-100 shadow-card">
                <h3 className="font-montserrat font-semibold text-navy-700 mb-2">{item.title}</h3>
                <p className="text-navy-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 : pour qui */}
      <section className="bg-white section-pad">
        <div className="container-max max-w-4xl">
          <h2 className="heading-lg text-navy-700 mb-8">Pour qui est cette approche ?</h2>
          <ul className="space-y-4">
            {[
              'Vous êtes en arrêt maladie pour épuisement professionnel et cherchez une approche complémentaire à la psychothérapie',
              'Vous ressentez les premiers signaux du burnout (fatigue chronique, irritabilité, manque de motivation) et voulez agir avant d\'être à bout',
              'Vous avez suivi une thérapie mais sentez que quelque chose reste coinçé dans votre corps',
              'Vous cherchez une alternative naturelle aux anxiolytiques ou somnifères',
              'Vous êtes à Bruxelles, Waterloo, Uccle, Ixelles ou en Brabant Wallon',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-navy-500/80 text-lg">
                <span className="text-sage-600 font-bold mt-1 shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 4 : CTA dark */}
      <section className="bg-navy-900 text-white section-pad">
        <div className="container-max max-w-3xl text-center">
          <span className="section-tag text-sage-300 border-sage-700/50 bg-sage-900/40 mb-6">
            Séance de groupe · Waterloo
          </span>
          <h2 className="heading-lg text-white mb-4">
            Une séance concrète à{' '}
            <span className="text-gradient-gold">20 min de Bruxelles</span>
          </h2>
          <p className="body-lg text-white/70 max-w-2xl mx-auto mb-8">
            Séances d'Hypnotic Breathwork guidées par Daphnée, certifiée IPHM, à l'Avenue Floréal 20
            à Waterloo. Séance de groupe à <strong className="text-white">60 €</strong> — paiement sur place,
            réservation gratuite en ligne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleCalendly} className="btn-primary text-lg">
              Réserver ma place — 60 €
            </button>
            <Link to="/" className="btn-outline text-lg">
              Voir toutes les séances
            </Link>
          </div>
        </div>
      </section>

      {/* Article lié */}
      <section className="bg-white section-pad">
        <div className="container-max max-w-4xl">
          <h2 className="heading-md text-navy-700 mb-6">Pour aller plus loin</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link to="/blog/comment-le-breathwork-aide-contre-le-burnout"
                  className="block bg-sage-50 border border-sage-100 rounded-2xl p-6 hover:border-sage-300 hover:shadow-soft transition-all duration-300 group">
              <span className="section-tag text-sage-700 border-sage-200 bg-white mb-3 text-xs">Article · 7 min</span>
              <h3 className="font-montserrat font-semibold text-navy-700 text-lg mb-2 group-hover:text-sage-700 transition-colors">
                Comment le Breathwork aide contre le Burnout — Guide complet
              </h3>
              <p className="text-navy-400 text-sm leading-relaxed">Mécanismes physiologiques, science et conseils pratiques.</p>
              <span className="inline-block mt-4 text-sage-600 font-semibold text-sm">Lire l'article →</span>
            </Link>
            <Link to="/blog/burnout-symptomes"
                  className="block bg-navy-50 border border-navy-100 rounded-2xl p-6 hover:border-navy-200 hover:shadow-soft transition-all duration-300 group">
              <span className="section-tag text-navy-500 border-navy-200 bg-white mb-3 text-xs">Article · 8 min</span>
              <h3 className="font-montserrat font-semibold text-navy-700 text-lg mb-2 group-hover:text-sage-700 transition-colors">
                Burn-out : les symptômes à reconnaître
              </h3>
              <p className="text-navy-400 text-sm leading-relaxed">Les 12 signes à ne pas ignorer, et les premières étapes pour en sortir.</p>
              <span className="inline-block mt-4 text-sage-600 font-semibold text-sm">Lire l'article →</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
