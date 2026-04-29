import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'À propos',     href: '#about'    },
  { label: 'Séances',      href: '#services' },
  { label: 'Témoignages',  href: '#temoignages' },
  { label: 'FAQ',          href: '#faq'      },
]

export default function Navbar({ calendlyUrl }) {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
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
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-soft border-b border-sage-100 py-3'
          : 'bg-white/80 backdrop-blur-md py-5'}`}
    >
      <div className="container-max flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center" aria-label="Belgium Breathwork – Accueil">
          <img src="/images/logo.png" alt="Belgium Breathwork" className="h-10 w-auto object-contain" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
          {links.map((l) => (
            <a key={l.href} href={l.href}
               className="text-navy-500/80 hover:text-sage-700 font-medium text-sm transition-colors duration-200">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button onClick={handleCalendly}
                className="hidden md:flex btn-primary text-sm px-5 py-3"
                aria-label="Réserver une séance">
          Réserver — gratuit
        </button>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)}
                className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-sage-50 transition-colors"
                aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={open}>
          <span className={`block h-0.5 w-5 bg-navy-600 transition-all duration-300
            ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-5 bg-navy-600 transition-all duration-300
            ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-navy-600 transition-all duration-300
            ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/98 backdrop-blur-xl border-t border-sage-100"
          >
            <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Menu mobile">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                   className="text-navy-600 hover:text-sage-700 hover:bg-sage-50
                              py-3 px-4 rounded-lg font-medium transition-all duration-200">
                  {l.label}
                </a>
              ))}
              <button onClick={handleCalendly}
                      className="btn-primary mt-3 w-full text-base">
                Réserver ma place — gratuit
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
