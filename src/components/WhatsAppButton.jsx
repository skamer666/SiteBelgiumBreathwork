import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WA_URL = 'https://wa.me/32494204093?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20les%20s%C3%A9ances%20de%20Breathwork%20%E2%80%94%20pouvez-vous%20m%E2%80%99aider%20%3F'

/**
 * Floating WhatsApp button – appears after 3s.
 * Tooltip auto-appears to grab attention, then can be dismissed.
 */
export default function WhatsAppButton() {
  const [visible,  setVisible]  = useState(false)
  const [showTip,  setShowTip]  = useState(false)

  // Appear after 3s, tooltip after 5s
  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true),  3000)
    const t2 = setTimeout(() => setShowTip(true),  5000)
    const t3 = setTimeout(() => setShowTip(false), 11000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-24 right-5 md:bottom-8 md:right-6 z-50 flex flex-col items-end gap-2"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTip && (
              <motion.div
                initial={{ opacity: 0, x: 12, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 12, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-2 bg-white rounded-2xl shadow-lift
                           border border-sage-100 px-4 py-3 max-w-[220px]"
              >
                <div className="flex-1">
                  <p className="text-navy-700 font-montserrat font-semibold text-xs leading-tight">
                    Une question ?
                  </p>
                  <p className="text-navy-400 text-xs mt-0.5 leading-snug">
                    Répond en quelques secondes
                  </p>
                </div>
                <button
                  onClick={() => setShowTip(false)}
                  className="text-navy-300 hover:text-navy-500 transition-colors shrink-0 ml-1"
                  aria-label="Fermer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                {/* Tail */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2
                                border-8 border-transparent border-l-white" aria-hidden="true" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp button */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter Belgium Breathwork sur WhatsApp"
            onClick={() => setShowTip(false)}
            className="w-14 h-14 rounded-full flex items-center justify-center
                       shadow-lift transition-transform duration-200
                       hover:scale-110 active:scale-95 focus:outline-none
                       focus:ring-4 focus:ring-green-400/40"
            style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
          >
            {/* Pulse ring */}
            <span className="absolute w-14 h-14 rounded-full bg-green-400/30 animate-ping"
                  aria-hidden="true" />
            <svg className="w-7 h-7 text-white relative z-10" viewBox="0 0 24 24"
                 fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
