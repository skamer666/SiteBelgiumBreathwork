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
      className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-hero-bg px-4 md:px-8"
      aria-label="Section principale"
    >
      {/* Background orbs */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="breathe-orb absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full
                        bg-gradient-to-br from-sage-200/50 to-sage-100/30 blur-3xl" />
        <div className="breathe-orb-2 absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full
                        bg-gradient-to-tl from-sand-100/60 to-sage-100/40 blur-3xl" />
        <div className="breathe-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[300px] h-[300px] rounded-full
                        bg-gradient-to-br from-sage-100/40 to-sand-50/30 blur-2xl"
             style={{ animationDelay: '3s' }} />
      </div>

      {/* Subtle dot grid */}
      <div aria-hidden="true"
           className="absolute inset-0 opacity-[0.025]"
           style={{
             backgroundImage: 'radial-gradient(circle, #4A7C59 1px, transparent 1px)',
             backgroundSize: '32px 32px',
           }} />

      {/* Main content – 2 columns on desktop */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center gap-10 lg:gap-16
                      max-w-6xl mx-auto w-full pt-28 pb-8">

        {/* Left: text */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="section-tag text-sage-700 border-sage-200 bg-sage-50">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse" aria-hidden="true" />
              Certifiée IPHM · Hypnotic Breathwork
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="heading-xl text-navy-700 mb-4">
            Libère tes émotions.{' '}
            <span className="block text-gradient">Retrouve ton souffle.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="body-lg text-navy-500/80 mb-4 max-w-xl">
            Une séance d'<strong className="text-sage-700 font-semibold">Hypnotic Breathwork</strong> combine
            respiration consciente, hypnose et visualisation pour libérer ce que tu portes depuis trop longtemps.
          </motion.p>

          <motion.p variants={fadeUp}
                    className="text-navy-500/70 font-montserrat font-semibold text-lg mb-8">
            Séance de groupe —{' '}
            <span className="text-navy-700 bg-sage-100 px-3 py-1 rounded-full">60 €</span>
            <span className="text-navy-400 font-normal text-base ml-2">· Paiement sur place</span>
          </motion.p>

          <motion.div variants={fadeUp}
                      className="flex flex-col items-center lg:items-start gap-3 mb-8 w-full">
            <button onClick={handleCalendly}
                    className="btn-primary text-lg w-full sm:w-auto"
                    aria-label="Réserver ma place — réservation gratuite">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Réserver ma place — gratuit
            </button>
            <p className="text-navy-400/70 text-sm italic">
              Réservation gratuite · Paiement sur place de 60 €
            </p>
            <a href="#about"
               className="btn-outline-light text-base w-full sm:w-auto mt-1"
               aria-label="En savoir plus sur Belgium Breathwork">
              En savoir plus
            </a>
          </motion.div>

          <motion.div variants={fadeUp}
                      className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-navy-400/70 text-sm">
            {[
              { icon: '✓', text: 'Réservation 100% gratuite' },
              { icon: '✓', text: 'Paiement sur place · 60 €' },
              { icon: '✓', text: 'Belgique – Waterloo' },
            ].map(({ icon, text }) => (
              <span key={text} className="flex items-center gap-1.5">
                <span className="text-sage-600 font-bold" aria-hidden="true">{icon}</span>
                {text}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: photo */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
          className="lg:w-1/2 flex justify-center lg:justify-end w-full"
        >
          <div className="relative w-full max-w-sm lg:max-w-md">
            <div aria-hidden="true"
                 className="absolute -inset-4 rounded-3xl bg-sage-200/30 blur-xl" />
            <img
              src="/images/seance-01.jpg"
              alt="Séance d'Hypnotic Breathwork avec Daphnée à Waterloo"
              className="relative w-full h-64 md:h-80 lg:h-[480px] object-cover rounded-3xl shadow-lift"
              loading="eager"
            />
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-card">
              <p className="text-sage-700 font-montserrat font-bold text-sm">✦ Certifiée IPHM</p>
              <p className="text-navy-400 text-xs">Hypnotic Breathwork · Waterloo</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="relative z-10 flex flex-col items-center gap-2 pb-8"
        aria-hidden="true"
      >
        <span className="text-navy-400/50 text-xs tracking-widest uppercase font-medium">Découvrir</span>
        <div className="w-5 h-8 rounded-full border border-navy-200 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-sage-500"
          />
        </div>
      </motion.div>
    </section>
  )
}
