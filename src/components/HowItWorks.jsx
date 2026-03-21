import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const benefits = [
  { number: '1', label: 'Régule le système nerveux et réduit le stress' },
  { number: '2', label: 'Améliore la concentration et la clarté mentale' },
  { number: '3', label: 'Diminue le cortisol (hormone du stress)' },
  { number: '4', label: 'Oxygène les cellules et libère de l\'énergie' },
]

const pillars = [
  {
    title: 'Respiration consciente',
    desc: 'Des cycles guidés qui activent des états modifiés de conscience — sans substances, en toute sécurité.',
    bg: 'bg-sage-50',
    border: 'border-sage-200',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
           className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636" />
      </svg>
    ),
  },
  {
    title: 'Induction hypnotique',
    desc: 'Un guidage vocal doux qui permet à l\'inconscient d\'accéder à ses propres ressources et vérités.',
    bg: 'bg-navy-50',
    border: 'border-navy-100',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
           className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: 'Visualisation guidée',
    desc: 'Voyage intérieur : rencontrer la petite toi, traverser des paysages, libérer ce qui ne t\'appartient plus.',
    bg: 'bg-sand-50',
    border: 'border-sand-100',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
           className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const [ref, inView] = useInView(0.12)

  return (
    <section id="methode" ref={ref} aria-labelledby="method-title"
             className="bg-cream section-pad">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="section-tag text-navy-400 border-navy-100 bg-white mb-6">
            La méthode
          </span>
          <h2 id="method-title" className="heading-lg text-navy-700 mb-4">
            La science{' '}
            <span className="text-gradient">au service de l'humain</span>
          </h2>
          <p className="body-lg text-navy-400 max-w-2xl mx-auto">
            L'Hypnotic Breathwork n'est pas de la magie — c'est une alliance précise entre
            des techniques validées par la science et une expérience profondément humaine.
          </p>
        </motion.div>

        {/* 3 pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" role="list">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              role="listitem"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.13, duration: 0.5, ease: 'easeOut' }}
              className={`rounded-2xl p-7 ${p.bg} border ${p.border}
                          hover:shadow-soft transition-all duration-300 group`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center
                              text-sage-600 mb-5 shadow-soft group-hover:shadow-glow-sage
                              transition-shadow duration-300 border border-sage-100">
                {p.icon}
              </div>
              <h3 className="font-montserrat font-bold text-navy-700 text-lg mb-3">{p.title}</h3>
              <p className="text-navy-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Science benefits – dark sage accent box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-aurora-mid rounded-3xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="md:w-1/2">
              <span className="section-tag text-sage-200 border-sage-500/50 bg-sage-800/40 mb-5 text-xs">
                Bienfaits scientifiques
              </span>
              <h3 className="heading-md text-white mb-4">
                Ce que la recherche dit{' '}
                <span className="text-gradient-gold">de la respiration consciente</span>
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Des études en neurosciences confirment l'impact profond de la respiration
                contrôlée sur le cerveau, le système nerveux et l'équilibre hormonal.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.number}
                  role="listitem"
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                  className="flex gap-3 items-start"
                >
                  <span className="shrink-0 w-8 h-8 rounded-full bg-sage-600/30 border border-sage-500/40
                                   flex items-center justify-center text-sage-200 font-montserrat
                                   font-bold text-sm" aria-hidden="true">
                    {b.number}
                  </span>
                  <p className="text-white/80 text-sm leading-relaxed pt-1">{b.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
