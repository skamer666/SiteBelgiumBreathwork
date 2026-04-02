import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const credentials = [
  { label: 'Certifiée IPHM', sub: 'International Practitioners of Holistic Medicine' },
  { label: 'Formation certifiée', sub: 'Hypnotic Breathwork – reconnue par IPHM' },
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
             className="bg-sage-50 section-pad">
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
              {/* Soft glow ring */}
              <div aria-hidden="true"
                   className="absolute inset-0 rounded-full bg-sage-200/60 blur-2xl scale-110 breathe-orb" />
              {/* Portrait */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden
                              border-4 border-white shadow-lift">
                <img src="/images/daphnee.png" alt="Daphnée, fondatrice de Belgium Breathwork"
                   className="absolute inset-0 w-full h-full object-cover object-top" />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-full
                              px-5 py-2.5 whitespace-nowrap shadow-card">
                <span className="text-sage-700 text-xs font-montserrat font-semibold tracking-wide">
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
            <span className="section-tag text-sage-700 border-sage-200 bg-white mb-6">
              Qui suis-je ?
            </span>

            <h2 id="about-title" className="heading-lg text-navy-700 mb-6">
              Daphnée,{' '}
              <span className="text-gradient">fondatrice de Belgium Breathwork</span>
            </h2>

            <div className="space-y-4 text-navy-500/80 leading-relaxed text-base mb-8">
              <p>
                J'ai découvert le breathwork lors d'une période où j'avais besoin de me
                reconnecter à moi-même. Cette pratique m'a <em className="text-navy-700 not-italic font-medium">profondément transformée</em> —
                libérant des blocages que j'avais portés pendant des années.
              </p>
              <p>
                Ce chemin m'a conduite à me former en <strong className="text-sage-700 font-medium">Hypnotic Breathwork</strong>{' '}
                dans une formation certifiée et reconnue par <strong className="text-navy-700 font-medium">IPHM</strong>.
              </p>
              <p>
                Aujourd'hui, j'accompagne celles et ceux qui cherchent du sens, de la guérison
                et un nouveau souffle. Je ne t'amène pas juste à respirer —
                <em className="text-sage-700 not-italic font-medium"> je t'accompagne plus loin.</em>
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
                  className="bg-white rounded-xl p-4 border border-sage-100 shadow-soft"
                >
                  <p className="text-sage-700 font-montserrat font-semibold text-sm mb-1">{c.label}</p>
                  <p className="text-navy-400 text-xs leading-snug">{c.sub}</p>
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
              Réserver ma place — 50 €
            </button>
            <p className="text-navy-400/60 text-xs italic mt-3">
              Séance de groupe · 50€ · Paiement sécurisé en ligne
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
