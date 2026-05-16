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
  name: 'Breathwork pour Mieux Dormir — Exercices contre l\'Insomnie | Belgium Breathwork',
  description: 'Techniques de respiration pour améliorer le sommeil naturellement. Le breathwork active le nerf vague et régule le système nerveux pour en finir avec l\'insomnie.',
  url: 'https://belgiumbreathwork.be/sommeil',
}

const techniques = [
  {
    number: '01',
    name: 'Respiration 4-7-8',
    desc: 'Inspirez 4 secondes par le nez, retenez 7 secondes, expirez lentement 8 secondes par la bouche. Répétez 4 à 6 cycles. Cette technique active rapidement le système parasympathique.',
  },
  {
    number: '02',
    name: 'Cohérence cardiaque',
    desc: 'Inspirez 5 secondes, expirez 5 secondes, pendant 5 minutes. Simple et redoutablement efficace : cette pratique synchronise le rythme cardiaque et le système nerveux.',
  },
  {
    number: '03',
    name: 'Soupir physiologique',
    desc: 'Double inspiration par le nez (deux courtes inspirations successives), suivie d\'une longue expiration par la bouche. Stanford a montré que c\'est la technique la plus rapide pour réduire le stress acutement.',
  },
]

export default function Sommeil() {
  const handleCalendly = (e) => {
    e.preventDefault()
    if (window.Calendly) window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    else window.open(CALENDLY_URL, '_blank')
  }

  return (
    <Layout>
      <SEOMeta
        title="Breathwork pour Mieux Dormir — Exercices contre l'Insomnie | Belgium Breathwork"
        description="Insomnie, sommeil agité, difficultés à s'endormir : le breathwork et ses techniques de respiration régulent le système nerveux pour retrouver un sommeil naturel. Séances à Waterloo."
        canonical="https://belgiumbreathwork.be/sommeil"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[65vh] flex flex-col items-center justify-center bg-hero-bg pt-28 pb-16 px-4 md:px-8 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="breathe-orb absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-sage-200/50 to-sage-100/30 blur-3xl" />
          <div className="breathe-orb-2 absolute -bottom-20 -right-20 w-[350px] h-[350px] rounded-full bg-gradient-to-tl from-sand-100/60 to-sage-100/40 blur-3xl" />
        </div>
        <motion.div variants={stagger} initial="hidden" animate="show"
                    className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div variants={fadeUp} className="mb-6">
            <span className="section-tag text-sage-700 border-sage-200 bg-sage-50">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse" aria-hidden="true" />
              Sommeil & Insomnie
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="heading-xl text-navy-700 mb-6">
            Retrouver un sommeil profond{' '}
            <span className="block text-gradient">par la respiration</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="body-lg text-navy-500/80 max-w-2xl mx-auto mb-8">
            Vous vous couchez épuisé(e) mais votre tête n'arrête pas. L'insomnie est souvent
            un problème de système nerveux — pas de volonté. Le breathwork s'attaque à la racine.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleCalendly} className="btn-primary text-lg">
              Réserver une séance — 60 €
            </button>
            <a href="#techniques" className="btn-outline-light text-lg">
              Voir les techniques
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 1 : pourquoi vous dormez mal */}
      <section className="bg-white section-pad">
        <div className="container-max max-w-4xl">
          <h2 className="heading-lg text-navy-700 mb-6">Pourquoi le stress vous empêche de dormir</h2>
          <div className="space-y-5 text-navy-500/80 text-lg leading-relaxed">
            <p>
              Près d'un tiers des adultes belges souffrent de troubles du sommeil chroniques.
              La cause la plus fréquente n'est pas médicale — c'est le <strong className="text-navy-700">système nerveux
              sympathique</strong> (mode "combat ou fuite") qui reste activé le soir, quand le corps
              devrait basculer en mode repos.
            </p>
            <p>
              Le soir, quand vous essayez de dormir, votre corps est encore en mode alerte :
              fréquence cardiaque légèrement élevée, cortisol résiduel, pensées qui s'emballent.
              Ce n'est pas dans votre tête — c'est dans votre physiologie.
            </p>
            <div className="bg-sage-50 border border-sage-100 rounded-2xl p-6 my-8">
              <p className="font-montserrat font-semibold text-navy-700 mb-2">Le lien direct entre respiration et sommeil</p>
              <p className="text-navy-500/80 leading-relaxed">
                La respiration est le seul système autonome du corps que vous pouvez contrôler consciemment.
                En ralentissant et approfondissant la respiration, vous activez directement le{' '}
                <strong className="text-navy-700">nerf vague</strong> et faites basculer votre système nerveux
                en mode parasympathique — votre mode "repos et récupération".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : techniques */}
      <section id="techniques" className="bg-sage-50/50 section-pad">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-12">
            <span className="section-tag text-sage-700 border-sage-200 bg-white mb-4">
              Techniques validées par la recherche
            </span>
            <h2 className="heading-lg text-navy-700">
              3 exercices de respiration pour s'endormir
            </h2>
          </div>
          <div className="space-y-6">
            {techniques.map((t) => (
              <div key={t.number} className="bg-white rounded-2xl p-6 border border-sage-100 shadow-card flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-sage-600 text-white font-montserrat font-bold
                                flex items-center justify-center text-sm">
                  {t.number}
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-navy-700 text-lg mb-2">{t.name}</h3>
                  <p className="text-navy-500/80 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 : aller plus loin */}
      <section className="bg-white section-pad">
        <div className="container-max max-w-4xl">
          <h2 className="heading-lg text-navy-700 mb-6">
            Quand les techniques seules ne suffisent pas
          </h2>
          <div className="space-y-5 text-navy-500/80 text-lg leading-relaxed">
            <p>
              Ces exercices sont efficaces pour les troubles du sommeil liés au stress quotidien.
              Mais si votre insomnie est profonde — liée à un traumatisme, un deuil, un burnout ou
              une anxiété chronique — les techniques de surface atteignent rapidement leurs limites.
            </p>
            <p>
              L'<strong className="text-navy-700">Hypnotic Breathwork</strong> va plus loin : en combinant
              la respiration consciente à une induction hypnotique légère, il permet d'atteindre et de
              traiter les couches profondes du système nerveux. Les participantes rapportent souvent
              un sommeil qualitativement différent dès la première séance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA dark */}
      <section className="bg-navy-900 text-white section-pad">
        <div className="container-max max-w-3xl text-center">
          <h2 className="heading-lg text-white mb-4">
            Retrouvez le sommeil à{' '}
            <span className="text-gradient-gold">Waterloo</span>
          </h2>
          <p className="body-lg text-white/70 max-w-2xl mx-auto mb-8">
            Séances de groupe à 60 € — paiement sur place, réservation gratuite.
            Avenue Floréal 20, Waterloo, à 20 min de Bruxelles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleCalendly} className="btn-primary text-lg">
              Réserver ma place — 60 €
            </button>
            <Link to="/blog/exercices-de-respiration-pour-mieux-dormir" className="btn-outline text-lg">
              Lire l'article complet
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
