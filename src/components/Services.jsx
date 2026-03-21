import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const services = [
  {
    tag:     'Offre phare',
    title:   'Séance individuelle',
    sub:     'Hypnotic Breathwork',
    price:   '50',
    unit:    '€',
    desc:    'Un accompagnement personnalisé, adapté à ton rythme et à tes besoins. Idéal pour travailler en profondeur sur des blocages ou un objectif précis.',
    features: [
      '60 à 90 minutes de session',
      'Respiration + hypnose + visualisation',
      'Suivi personnalisé post-séance',
      'Espace sécurisé et bienveillant',
    ],
    cta:     'Réserver (50€)',
    ctaCalendly: true,
    highlight: true,
    color:   'from-sage-900 to-navy-700',
    badge:   '🌿 Le plus populaire',
  },
  {
    tag:     'En groupe',
    title:   'Séance collective',
    sub:     'Expérience partagée',
    price:   '50',
    unit:    '€',
    desc:    'Une expérience collective portée par l\'énergie du groupe. Favorise le lâcher-prise, la libération et la connexion humaine profonde.',
    features: [
      'Formats réguliers ou événements',
      'Énergie collective amplifiante',
      'Idéal pour découvrir la pratique',
      'Réservation en ligne disponible',
    ],
    cta:     'Réserver en ligne',
    ctaCalendly: true,
    highlight: false,
    color:   'from-navy-600 to-navy-800',
    badge:   null,
  },
  {
    tag:     'Entreprises',
    title:   'Séance corporate',
    sub:     'Pour vos équipes',
    price:   null,
    unit:    null,
    desc:    'Un moment de respiration consciente qui réduit le stress, renforce la cohésion et favorise un meilleur équilibre émotionnel au travail.',
    features: [
      'Sur mesure selon vos besoins',
      'Ateliers, conférences, formations',
      'Gestion du stress en entreprise',
      'Interventions et démonstrations',
    ],
    cta:     'Me contacter',
    ctaCalendly: false,
    ctaHref: 'mailto:Belgiumbreathwork@gmail.com',
    highlight: false,
    color:   'from-sand-300/10 to-sand-200/5',
    badge:   null,
  },
]

export default function Services({ calendlyUrl }) {
  const [ref, inView] = useInView(0.1)

  const handleCalendly = (e) => {
    e.preventDefault()
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl })
    } else {
      window.open(calendlyUrl, '_blank')
    }
  }

  return (
    <section id="services" ref={ref} aria-labelledby="services-title"
             className="bg-navy-800 section-pad">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="section-tag text-sage-300 border-sage-700/50 bg-sage-900/30 mb-6">
            Nos séances
          </span>
          <h2 id="services-title" className="heading-lg text-white mb-4">
            Chaque respiration est{' '}
            <span className="text-gradient">une porte vers toi</span>
          </h2>
          <p className="body-lg text-white/55 max-w-xl mx-auto">
            Chaque séance combine respiration consciente, induction hypnotique et
            visualisation guidée — dans un espace sécurisé.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              role="listitem"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.14, duration: 0.5, ease: 'easeOut' }}
              className={`relative rounded-3xl overflow-hidden flex flex-col
                ${s.highlight
                  ? 'ring-2 ring-sage-500/60 shadow-glow-sage'
                  : 'ring-1 ring-white/10'}`}
            >
              {/* Card background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-90`}
                   aria-hidden="true" />

              {/* Badge */}
              {s.badge && (
                <div className="relative z-10 bg-sage-600 text-white text-xs font-montserrat
                                font-bold px-4 py-2 text-center tracking-wide">
                  {s.badge}
                </div>
              )}

              <div className="relative z-10 flex flex-col flex-1 p-7">
                {/* Tag + title */}
                <span className="text-xs font-semibold tracking-widest uppercase text-sage-400 mb-2">
                  {s.tag}
                </span>
                <h3 className="font-montserrat font-bold text-white text-xl mb-0.5">{s.title}</h3>
                <p className="text-white/50 text-sm mb-6">{s.sub}</p>

                {/* Price */}
                <div className="mb-6">
                  {s.price ? (
                    <div className="flex items-baseline gap-1">
                      <span className="font-montserrat font-black text-5xl text-white">{s.price}</span>
                      <span className="text-white/70 text-xl font-medium">{s.unit}</span>
                    </div>
                  ) : (
                    <span className="font-montserrat font-bold text-2xl text-white/80">
                      Sur demande
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-6">{s.desc}</p>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-1" role="list">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-white/75 text-sm">
                      <svg className="w-4 h-4 text-sage-400 mt-0.5 shrink-0" fill="none"
                           viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {s.ctaCalendly ? (
                  <button
                    onClick={handleCalendly}
                    className={s.highlight ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'}
                    aria-label={`${s.cta} – ${s.title}`}
                  >
                    {s.cta}
                  </button>
                ) : (
                  <a href={s.ctaHref}
                     className="btn-outline w-full justify-center"
                     aria-label={`${s.cta} – ${s.title}`}>
                    {s.cta}
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Reassurance line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="text-center text-white/35 text-sm mt-10"
        >
          Réservation sécurisée via Calendly · Paiement en ligne ou sur place ·
          Questions ?{' '}
          <a href="tel:+32494204093"
             className="text-sage-400 hover:text-sage-300 underline underline-offset-2 transition-colors">
            +32 494 20 40 93
          </a>
        </motion.p>
      </div>
    </section>
  )
}
