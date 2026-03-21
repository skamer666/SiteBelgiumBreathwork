import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0  },
}
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
}

export default function Hero({ calendlyUrl }) {
  const handleCalendly = (e) => {
    e.preventDefault()
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl })
    } else {
      window.open(calendlyUrl, '_blank')
    }
  }

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col justify-center items-center text-center
                 overflow-hidden bg-hero-bg px-4 md:px-8 pt-24 pb-16"
      aria-label="Section principale"
    >
      {/* Aurora animated orbs */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="breathe-orb absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full
                        bg-gradient-to-br from-sage-800/40 to-sage-600/20 blur-3xl" />
        <div className="breathe-orb-2 absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full
                        bg-gradient-to-tl from-navy-400/30 to-navy-600/20 blur-3xl" />
        <div className="breathe-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[300px] h-[300px] rounded-full
                        bg-gradient-to-br from-sand-200/10 to-sage-400/10 blur-2xl"
             style={{ animationDelay: '3s' }} />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div key={i}
               className="absolute w-1 h-1 rounded-full bg-sage-400/40"
               style={{
                 top:  `${15 + i * 14}%`,
                 left: `${8 + i * 15}%`,
                 animationDelay: `${i * 1.2}s`,
               }}
               aria-hidden="true"
          />
        ))}
      </div>

      {/* Subtle grid texture */}
      <div aria-hidden="true"
           className="absolute inset-0 opacity-[0.03]"
           style={{
             backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
             backgroundSize: '48px 48px',
           }} />

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-6 flex justify-center">
          <span className="section-tag text-sage-300 border-sage-700/50 bg-sage-900/40">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-400 animate-pulse" aria-hidden="true" />
            Certifiée IPHM · Formée à Bali
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={fadeUp} className="heading-xl text-white mb-4">
          Libère tes émotions.{' '}
          <span className="block text-gradient">Retrouve ton souffle.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p variants={fadeUp}
                  className="body-lg text-white/70 mb-4 max-w-xl mx-auto">
          Une séance d'<strong className="text-sage-300 font-semibold">Hypnotic Breathwork</strong> combine
          respiration consciente, hypnose et visualisation pour libérer ce que tu portes depuis trop longtemps.
        </motion.p>

        {/* Price signal */}
        <motion.p variants={fadeUp}
                  className="text-sand-200/90 font-montserrat font-semibold text-lg mb-8">
          Séance individuelle à partir de{' '}
          <span className="text-white bg-sage-600/40 px-3 py-1 rounded-full">50 €</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={fadeUp}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <button onClick={handleCalendly}
                  className="btn-primary text-lg w-full sm:w-auto"
                  aria-label="Réserver ma séance d'Hypnotic Breathwork à 50 euros">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Réserver ma séance (50€)
          </button>
          <a href="#about"
             className="btn-outline text-base w-full sm:w-auto"
             aria-label="En savoir plus sur Belgium Breathwork">
            En savoir plus
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div variants={fadeUp}
                    className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/50 text-sm">
          {[
            { icon: '✓', text: 'Sans engagement' },
            { icon: '✓', text: 'Paiement en ligne sécurisé' },
            { icon: '✓', text: 'Belgique – accès facile' },
          ].map(({ icon, text }) => (
            <span key={text} className="flex items-center gap-1.5">
              <span className="text-sage-400 font-bold" aria-hidden="true">{icon}</span>
              {text}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase font-medium">Découvrir</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-sage-400"
          />
        </div>
      </motion.div>
    </section>
  )
}
