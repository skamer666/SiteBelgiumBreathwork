import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const testimonials = [
  {
    text: 'Ce matin, Daphné m\'a proposé une séance de breathwork… et c\'était incroyable. Je suis une personne très angoissée, et cette angoisse est pour moi un véritable handicap. Je suis aussi très cartésienne, avec beaucoup de mal à lâcher prise. Au départ, je pensais donc ne pas être la personne idéale pour pratiquer le breathwork.',
    author: 'Marine Paquet',
    source: 'Story Instagram',
    initials: 'MP',
    color: 'from-sage-700 to-sage-900',
  },
  {
    text: 'Daphné est une grande voyageuse, bienveillante, à l\'écoute et très inspirante. Je ne suis pas du genre à me laisser aller facilement, mais là… j\'ai voyagé. Littéralement. J\'ai eu l\'impression de traverser le temps. C\'était comme un rêve lucide. Grâce à l\'accompagnement bienveillant de la facilitatrice, tout a été simple.',
    author: 'Cliente',
    source: 'Commentaire Instagram',
    initials: 'CL',
    color: 'from-navy-600 to-navy-800',
  },
  {
    text: 'Merci Daphné pour cette séance de breathwork intense mais tellement libératrice. En rentrant, encore toute bouleversée, j\'ai raconté ce que j\'avais vécu… comme si j\'avais traversé une autre vie. J\'ai rencontré la petite moi, j\'ai ressenti des choses incroyables, à la limite du rationnel, mais tellement réelles sur le moment. Je ne me souvenais pas d\'avoir été intérieurement aussi sereine depuis très longtemps.',
    author: 'Cliente',
    source: 'Belgium Breathwork',
    initials: 'CL',
    color: 'from-sage-800 to-navy-700',
  },
]

const StarRating = () => (
  <div className="flex gap-0.5 mb-4" role="img" aria-label="5 étoiles sur 5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-sand-300 fill-sand-300" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

export default function Testimonials() {
  const [ref, inView] = useInView(0.1)
  const [active, setActive]     = useState(0)
  const [direction, setDirection] = useState(1)

  const go = useCallback((idx) => {
    setDirection(idx > active ? 1 : -1)
    setActive(idx)
  }, [active])

  const next = useCallback(() => go((active + 1) % testimonials.length), [go, active])
  const prev = useCallback(() => go((active - 1 + testimonials.length) % testimonials.length), [go, active])

  // Auto-advance
  useEffect(() => {
    if (!inView) return
    const t = setTimeout(next, 6000)
    return () => clearTimeout(t)
  }, [active, inView, next])

  const variants = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  }

  return (
    <section id="temoignages" ref={ref} aria-labelledby="testi-title"
             className="bg-cream section-pad">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="section-tag text-navy-400 border-navy-100 bg-navy-50 mb-6">
            Témoignages
          </span>
          <h2 id="testi-title" className="heading-lg text-navy-500 mb-4">
            Elles et ils ont{' '}
            <span className="text-gradient">osé le voyage</span>
          </h2>
          <p className="body-lg text-navy-400 max-w-lg mx-auto">
            Des expériences réelles, des transformations concrètes.
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl bg-navy-500 p-8 md:p-10 min-h-[280px] flex flex-col">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="flex-1"
              >
                <StarRating />

                {/* Quote */}
                <svg className="w-8 h-8 text-sage-600/40 mb-3" fill="currentColor"
                     viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                </svg>

                <blockquote>
                  <p className="text-white/80 text-base leading-relaxed mb-6 italic">
                    "{testimonials[active].text}"
                  </p>
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonials[active].color}
                                   flex items-center justify-center text-white font-montserrat font-bold text-sm`}
                       aria-hidden="true">
                    {testimonials[active].initials}
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-white text-sm">
                      {testimonials[active].author}
                    </p>
                    <p className="text-white/40 text-xs">{testimonials[active].source}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <button onClick={prev}
                    className="w-11 h-11 rounded-full border border-navy-200 flex items-center justify-center
                               text-navy-400 hover:bg-navy-500 hover:text-white hover:border-navy-500
                               transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-navy-400"
                    aria-label="Témoignage précédent">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Navigation témoignages">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => go(i)}
                        role="tab"
                        aria-selected={i === active}
                        aria-label={`Témoignage ${i + 1}`}
                        className={`h-2 rounded-full transition-all duration-300
                          ${i === active ? 'w-8 bg-sage-500' : 'w-2 bg-navy-200 hover:bg-navy-300'}`}
                />
              ))}
            </div>

            <button onClick={next}
                    className="w-11 h-11 rounded-full border border-navy-200 flex items-center justify-center
                               text-navy-400 hover:bg-navy-500 hover:text-white hover:border-navy-500
                               transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-navy-400"
                    aria-label="Témoignage suivant">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-center mt-10"
        >
          <a href="https://instagram.com/belgium.breathwork" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-navy-400 hover:text-navy-500
                        text-sm font-medium transition-colors duration-200"
             aria-label="Voir plus de témoignages sur Instagram">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Voir plus de témoignages sur @belgium.breathwork
          </a>
        </motion.div>
      </div>
    </section>
  )
}
