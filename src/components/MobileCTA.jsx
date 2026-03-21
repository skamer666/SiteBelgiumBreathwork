import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Sticky bottom CTA bar – visible only on mobile after 400px scroll.
 * Hidden on desktop (md+) since the navbar already shows the CTA.
 */
export default function MobileCTA({ calendlyUrl }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleCalendly = (e) => {
    e.preventDefault()
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl })
    } else {
      window.open(calendlyUrl, '_blank')
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden
                     bg-navy-800/95 backdrop-blur-xl border-t border-white/10
                     px-4 py-3 pb-safe"
          style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
          aria-label="Barre de réservation mobile"
        >
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <p className="text-white font-montserrat font-semibold text-sm leading-tight">
                Séance Hypnotic Breathwork
              </p>
              <p className="text-sage-400 text-xs font-medium">À partir de 50 € · Disponible en ligne</p>
            </div>
            <button
              onClick={handleCalendly}
              className="btn-primary text-sm px-5 py-3 shrink-0"
              aria-label="Réserver ma séance à 50 euros"
            >
              Réserver (50€)
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
