import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

function formatDate(isoString) {
  const date = new Date(isoString)
  return {
    jour:   date.toLocaleDateString('fr-BE', { weekday: 'long' }),
    date:   date.toLocaleDateString('fr-BE', { day: 'numeric', month: 'long' }),
    heure:  date.toLocaleTimeString('fr-BE', { hour: '2-digit', minute: '2-digit' }),
  }
}

function PlacesBar({ restantes, total = 6 }) {
  const pct = Math.round((restantes / total) * 100)
  const couleur = restantes <= 2 ? 'bg-red-400' : restantes <= 4 ? 'bg-amber-400' : 'bg-sage-400'

  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className={restantes <= 2 ? 'text-red-400 font-semibold' : 'text-white/60'}>
          {restantes === 0 ? 'Complet' : `${restantes} place${restantes > 1 ? 's' : ''} restante${restantes > 1 ? 's' : ''}`}
        </span>
        <span className="text-white/40">{total} places max</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`h-full rounded-full ${couleur}`}
        />
      </div>
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className="glass-card rounded-2xl p-6 animate-pulse">
      <div className="h-3 bg-white/10 rounded w-1/3 mb-4" />
      <div className="h-5 bg-white/10 rounded w-2/3 mb-2" />
      <div className="h-3 bg-white/10 rounded w-1/2 mb-6" />
      <div className="h-1.5 bg-white/10 rounded mb-4" />
      <div className="h-12 bg-white/10 rounded-xl" />
    </div>
  )
}

export default function ProchainSeances({ calendlyUrl }) {
  const [ref, inView]     = useInView(0.1)
  const [seances, setSeances] = useState([])
  const [loading, setLoading] = useState(true)
  const [erreur, setErreur]   = useState(false)

  useEffect(() => {
    fetch('/api/prochaines-seances')
      .then(r => r.json())
      .then(data => {
        setSeances(data.seances || [])
        setLoading(false)
      })
      .catch(() => {
        setErreur(true)
        setLoading(false)
      })
  }, [])

  const handleCalendly = (e) => {
    e.preventDefault()
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl })
    } else {
      window.open(calendlyUrl, '_blank')
    }
  }

  // Si erreur API, on affiche rien (section invisible)
  if (!loading && (erreur || seances.length === 0)) return null

  return (
    <section id="prochaines-seances" ref={ref} aria-labelledby="seances-title"
             className="bg-navy-700 section-pad">
      <div className="container-max">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-tag text-sage-300 border-sage-700/50 bg-sage-900/30 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-400 animate-pulse" aria-hidden="true" />
            Disponibilités en temps réel
          </span>
          <h2 id="seances-title" className="heading-lg text-white mb-4">
            Prochaines{' '}
            <span className="text-gradient">séances de groupe</span>
          </h2>
          <p className="text-white/55 body-md max-w-md mx-auto">
            Réserve ta place maintenant — 0€ aujourd'hui, 50€ sur place à Waterloo.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {loading ? (
            [1, 2, 3].map(i => <SkeletonCard key={i} />)
          ) : (
            seances.map((s, i) => {
              const { jour, date, heure } = formatDate(s.dateDebut)
              return (
                <motion.div
                  key={s.uuid}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`glass-card rounded-2xl p-6 flex flex-col gap-4
                    ${s.complet ? 'opacity-60' : 'hover:border-sage-700/50 hover:shadow-glow-sage'}
                    transition-all duration-300`}
                >
                  {/* Urgence */}
                  {!s.complet && s.placesRestantes <= 3 && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold
                                     text-red-400 bg-red-400/10 border border-red-400/20
                                     px-3 py-1 rounded-full w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" aria-hidden="true" />
                      Plus que {s.placesRestantes} place{s.placesRestantes > 1 ? 's' : ''} !
                    </span>
                  )}
                  {s.complet && (
                    <span className="text-xs font-semibold text-white/40 bg-white/5
                                     border border-white/10 px-3 py-1 rounded-full w-fit">
                      Complet
                    </span>
                  )}

                  {/* Date */}
                  <div>
                    <p className="text-sage-400 text-xs font-semibold tracking-widest uppercase mb-1 capitalize">
                      {jour}
                    </p>
                    <p className="text-white font-montserrat font-bold text-xl capitalize">{date}</p>
                    <p className="text-white/60 text-sm mt-0.5">
                      {heure} · 2h · Avenue Floréal 20, Waterloo
                    </p>
                  </div>

                  {/* Prix */}
                  <div className="flex items-baseline gap-1">
                    <span className="font-montserrat font-black text-3xl text-white">50</span>
                    <span className="text-white/60 text-lg">€</span>
                    <span className="text-white/40 text-xs ml-1">· sur place</span>
                  </div>

                  {/* Jauge places */}
                  <PlacesBar restantes={s.placesRestantes} />

                  {/* CTA */}
                  {s.complet ? (
                    <button disabled
                            className="w-full py-3 rounded-xl bg-white/5 text-white/30
                                       font-semibold text-sm cursor-not-allowed">
                      Séance complète
                    </button>
                  ) : (
                    <div>
                      <a
                        href={s.urlReservation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full justify-center text-sm"
                        aria-label={`Réserver la séance du ${date} à ${heure}`}
                      >
                        Bloquer ma place — 0€ aujourd'hui
                      </a>
                      <p className="text-white/30 text-xs text-center mt-2 italic">
                        Aucune CB requise · Payconiq ou espèces sur place
                      </p>
                    </div>

                  )}
                </motion.div>
              )
            })
          )}
        </div>
      </div>
    </section>
  )
}
