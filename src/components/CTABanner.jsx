import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function CTABanner({ calendlyUrl }) {
  const [ref, inView] = useInView(0.2)

  const handleCalendly = (e) => {
    e.preventDefault()
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl })
    } else {
      window.open(calendlyUrl, '_blank')
    }
  }

  return (
    <section ref={ref} aria-labelledby="cta-title"
             className="relative overflow-hidden bg-aurora-mid section-pad">
      {/* Background orbs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="breathe-orb absolute -top-20 -right-20 w-80 h-80 rounded-full
                        bg-sage-600/20 blur-3xl" />
        <div className="breathe-orb-2 absolute -bottom-16 -left-16 w-64 h-64 rounded-full
                        bg-navy-400/20 blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center
                          mx-auto mb-6 shadow-glass" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                 className="w-8 h-8 text-sage-300">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 3C12 3 6 7 6 12.5C6 15.5 8.7 18 12 18C15.3 18 18 15.5 18 12.5C18 7 12 3 12 3Z"
                    fill="currentColor" opacity="0.3"/>
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 3v15M9 12c1-2 3-2 3-2s2 0 3 2"/>
            </svg>
          </div>

          <h2 id="cta-title" className="heading-lg text-white mb-4">
            Prêt(e) à reprendre{' '}
            <span className="text-gradient-gold">ton souffle ?</span>
          </h2>

          <p className="body-lg text-white/65 mb-3">
            "Chaque respiration est une porte vers plus de sérénité, de clarté et de liberté intérieure."
          </p>
          <p className="text-sage-400 text-sm font-medium mb-8">— Daphnée, Belgium Breathwork</p>

          {/* Price highlight */}
          <div className="inline-flex items-center gap-3 glass rounded-2xl px-6 py-3 mb-8">
            <span className="text-white/60 text-sm">Séance individuelle</span>
            <span className="w-px h-4 bg-white/20" aria-hidden="true" />
            <span className="font-montserrat font-black text-white text-2xl">50 €</span>
            <span className="w-px h-4 bg-white/20" aria-hidden="true" />
            <span className="text-sage-400 text-sm">Réservation en ligne</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleCalendly}
                    className="btn-primary text-lg"
                    aria-label="Réserver ma séance d'Hypnotic Breathwork à 50 euros">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Réserver ma séance (50€)
            </button>
            <a href="tel:+32494204093"
               className="btn-outline text-base"
               aria-label="Appeler Daphnée au +32 494 20 40 93">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +32 494 20 40 93
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/40 text-xs">
            {['✦ Certifiée IPHM', '✦ Formée à Bali', '✦ Sans engagement', '✦ Belgique'].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
