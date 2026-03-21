import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const credentials = [
  { label: 'Certifiée IPHM', sub: 'International Practitioners of Holistic Medicine' },
  { label: 'Siamlee Transformation', sub: 'Formation Hypnotic Breathwork certifiée IPHM' },
  { label: 'Accompagnement holistique', sub: 'Corps · Mental · Inconscient' },
]

export default function About({ calendlyUrl }) {
  const [ref, inView] = useInView(0.12)

  const handleCalendly = (e) => {
    e.preventDefault()
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl })
    } else {
      window.open(calendlyUrl, '_blank')
    }
  }

  return (
    <section id="about" ref={ref} aria-labelledby="about-title"
             className="bg-aurora section-pad">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:w-2/5 flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div aria-hidden="true"
                   className="absolute inset-0 rounded-full bg-sage-600/20 blur-2xl scale-110 breathe-orb" />
              {/* Avatar placeholder */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden
                              border-4 border-sage-600/40 shadow-glow-sage">
                {/* Gradient placeholder for photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-sage-700 via-navy-500 to-sage-900
                                flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 mx-auto mb-3 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
                           className="w-12 h-12 text-white/50" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <p className="text-white/60 text-sm font-medium">Daphnée</p>
                    <p className="text-sage-400 text-xs">Belgium Breathwork</p>
                  </div>
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-full
                              px-5 py-2.5 whitespace-nowrap shadow-glass">
                <span className="text-white/90 text-xs font-montserrat font-semibold tracking-wide">
                  ✦ Certifiée IPHM
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:w-3/5"
          >
            <span className="section-tag text-sage-300 border-sage-700/50 bg-sage-900/30 mb-6">
              Qui suis-je ?
            </span>

            <h2 id="about-title" className="heading-lg text-white mb-6">
              Daphnée,{' '}
              <span className="text-gradient">fondatrice de Belgium Breathwork</span>
            </h2>

            <div className="space-y-4 text-white/70 leading-relaxed text-base mb-8">
              <p>
                J'ai découvert le breathwork lors d'une période où j'avais besoin de me
                reconnecter à moi-même. Cette pratique m'a <em className="text-white/90 not-italic">profondément transformée</em> —
                libérant des blocages que j'avais portés pendant des années.
              </p>
              <p>
                Ce chemin m'a conduite à me former en <strong className="text-sage-300 font-medium">Hypnotic Breathwork</strong>{' '}
                auprès de <strong className="text-white/90 font-medium">Siamlee Transformation</strong>,
                une formation certifiée et reconnue par <strong className="text-white/90 font-medium">IPHM</strong>.
              </p>
              <p>
                Aujourd'hui, j'accompagne celles et ceux qui cherchent du sens, de la guérison
                et un nouveau souffle. Je ne t'amène pas juste à respirer —
                <em className="text-sage-300 not-italic font-medium"> je t'accompagne plus loin.</em>
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8" role="list">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.label}
                  role="listitem"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.4 }}
                  className="glass rounded-xl p-4"
                >
                  <p className="text-sage-400 font-montserrat font-semibold text-sm mb-1">{c.label}</p>
                  <p className="text-white/50 text-xs leading-snug">{c.sub}</p>
                </motion.div>
              ))}
            </div>

            <button onClick={handleCalendly}
                    className="btn-primary"
                    aria-label="Réserver une séance avec Daphnée">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Réserver avec Daphnée (50€)
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
