import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const services = [
  {
    tag:     'Offre phare',
    title:   'Séance de groupe',
    sub:     'Hypnotic Breathwork',
    price:   '60',
    unit:    '€',
    desc:    'Une expérience collective portée par l\'énergie du groupe. Favorise le lâcher-prise, la libération et la connexion humaine profonde.',
    payment: 'Réservation gratuite en ligne — paiement de 60 € sur place le jour J. Aucune surprise, aucun prépaiement.',
    features: [
      'Formats réguliers ou événements',
      'Énergie collective amplifiante',
      'Idéal pour découvrir la pratique',
      'Réservation gratuite · Paiement sur place',
    ],
    cta:     'Réserver ma place — gratuit',
    ctaCalendly: true,
    highlight: true,
    badge:   '✦ Le plus accessible',
  },
  {
    tag:     'Individuel',
    title:   'Séance individuelle',
    sub:     'Accompagnement personnalisé',
    price:   '150',
    unit:    '€',
    desc:    'Un accompagnement personnalisé, adapté à ton rythme et à tes besoins. Idéal pour travailler en profondeur sur des blocages ou un objectif précis.',
    payment: "Paiement sécurisé en ligne de 150€ lors de la réservation. Ta place est garantie, tu arrives l'esprit libre.",
    features: [
      '60 à 90 minutes de session',
      'Respiration + hypnose + visualisation',
      'Suivi personnalisé post-séance',
      'Espace sécurisé et bienveillant',
    ],
    cta:     'Me contacter',
    ctaCalendly: false,
    ctaHref: 'mailto:Belgiumbreathwork@gmail.com',
    highlight: false,
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
             className="bg-white section-pad">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="section-tag text-sage-700 border-sage-200 bg-sage-50 mb-6">
            Nos séances
          </span>
          <h2 id="services-title" className="heading-lg text-navy-700 mb-4">
            Chaque respiration est{' '}
            <span className="text-gradient">une porte vers toi</span>
          </h2>
          <p className="body-lg text-navy-400 max-w-xl mx-auto">
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
                  ? 'ring-2 ring-sage-500/40 shadow-glow-sage'
                  : 'ring-1 ring-sage-100 shadow-card hover:shadow-soft'} transition-all duration-300`}
            >
              {/* Card background */}
              {s.highlight ? (
                <div className="absolute inset-0 bg-gradient-to-br from-sage-700 to-sage-900"
                     aria-hidden="true" />
              ) : (
                <div className="absolute inset-0 bg-white" aria-hidden="true" />
              )}

              {/* Badge */}
              {s.badge && (
                <div className="relative z-10 bg-sage-500 text-white text-xs font-montserrat
                                font-bold px-4 py-2 text-center tracking-wide">
                  {s.badge}
                </div>
              )}

              <div className="relative z-10 flex flex-col flex-1 p-7">
                {/* Tag + title */}
                <span className={`text-xs font-semibold tracking-widest uppercase mb-2
                  ${s.highlight ? 'text-sage-300' : 'text-sage-600'}`}>
                  {s.tag}
                </span>
                <h3 className={`font-montserrat font-bold text-xl mb-0.5
                  ${s.highlight ? 'text-white' : 'text-navy-700'}`}>{s.title}</h3>
                <p className={`text-sm mb-6 ${s.highlight ? 'text-white/55' : 'text-navy-400'}`}>
                  {s.sub}
                </p>

                {/* Price */}
                <div className="mb-4">
                  {s.price ? (
                    <div className="flex items-baseline gap-1">
                      <span className={`font-montserrat font-black text-5xl
                        ${s.highlight ? 'text-white' : 'text-navy-700'}`}>{s.price}</span>
                      <span className={`text-xl font-medium
                        ${s.highlight ? 'text-white/70' : 'text-navy-400'}`}>{s.unit}</span>
                      <span className={`text-xs ml-1 ${s.highlight ? 'text-white/45' : 'text-navy-300'}`}>
                        · sur place
                      </span>
                    </div>
                  ) : (
                    <span className={`font-montserrat font-bold text-2xl
                      ${s.highlight ? 'text-white/80' : 'text-navy-500'}`}>
                      Sur demande
                    </span>
                  )}
                </div>

                {/* Loyalty badge – groupe only */}
                {s.highlight && (
                  <div className="mb-6 rounded-xl bg-white/10 border border-white/20 px-4 py-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-yellow-300 text-sm" aria-hidden="true">★</span>
                      <span className="text-white font-montserrat font-semibold text-xs tracking-wide uppercase">
                        Règle de fidélité
                      </span>
                    </div>
                    <p className="text-white/80 text-xs leading-relaxed italic mb-2">
                      "La transformation est un voyage. Pour te soutenir dans ta démarche,
                      ta 4ème séance est offerte."
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/55 text-xs">4 séances = 3 × 60€</span>
                      <span className="bg-white/15 text-white font-montserrat font-bold
                                       text-xs px-2.5 py-1 rounded-full">
                        → 45€ / séance
                      </span>
                    </div>
                  </div>
                )}

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-6
                  ${s.highlight ? 'text-white/60' : 'text-navy-400'}`}>{s.desc}</p>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-1" role="list">
                  {s.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm
                      ${s.highlight ? 'text-white/75' : 'text-navy-500'}`}>
                      <svg className={`w-4 h-4 mt-0.5 shrink-0
                        ${s.highlight ? 'text-sage-300' : 'text-sage-500'}`}
                           fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
                    className={s.highlight ? 'btn-primary w-full justify-center' : 'btn-outline-light w-full justify-center'}
                    aria-label={`${s.cta} – ${s.title}`}
                  >
                    {s.cta}
                  </button>
                ) : (
                  <a href={s.ctaHref}
                     className="btn-outline-light w-full justify-center"
                     aria-label={`${s.cta} – ${s.title}`}>
                    {s.cta}
                  </a>
                )}

                {/* Payment reassurance micro-copy */}
                {s.payment && (
                  <p className={`text-xs leading-relaxed mt-3 italic text-center
                    ${s.highlight ? 'text-white/35' : 'text-navy-400/50'}`}>
                    {s.payment}
                  </p>
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
          className="text-center text-navy-400/60 text-sm mt-10"
        >
          Réservation sécurisée via Calendly · Paiement sur place ·
          Questions ?{' '}
          <a href="tel:+32494204093"
             className="text-sage-600 hover:text-sage-700 underline underline-offset-2 transition-colors">
            +32 494 20 40 93
          </a>
        </motion.p>
      </div>
    </section>
  )
}
