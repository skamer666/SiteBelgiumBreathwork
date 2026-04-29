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
  const couleur = restantes <= 2 ? 'bg-red-400' : restantes <= 4 ? 'bg-amber-400' : 'bg-sage-500'

  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className={restantes <= 2 ? 'text-red-500 font-semibold' : 'text-navy-400'}>
          {restantes === 0 ? 'Complet' : `${restantes} place${restantes > 1 ? 's' : ''} restante${restantes > 1 ? 's' : ''}`}
        </span>
        <span className="text-navy-300">{total} places max</span>
      </div>
      <div className="h-1.5 rounded-full bg-sage-100 overflow-hidden">
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
    <div className="bg-white rounded-2xl p-6 animate-pulse border border-sage-100 shadow-card">
      <div className="h-3 bg-sage-100 rounded w-1/3 mb-4" />
      <div className="h-5 bg-sage-100 rounded w-2/3 mb-2" />
      <div className="h-3 bg-sage-100 rounded w-1/2 mb-6" />
      <div className="h-1.5 bg-sage-100 rounded mb-4" />
      <div className="h-12 bg-sage-50 rounded-xl" />
    </div>
  )
}

export default function ProchainSeances({ calendlyUrl }) {
  const [ref, inView]     = useInView(0.1)
  const [seances,  setSeances]  = useState([])
  const [loading,  setLoading]  = useState(true)
  const [erreur,   setErreur]   = useState(null)

  useEffect(() => {
    fetch('/api/prochaines-seances')
      .then(r => r.json())
      .then(data => {
        if (data.error) setErreur(data.error + ' — ' + JSON.stringify(data.debug || {}))
        setSeances(data.seances || [])
        setLoading(false)
      })
      .catch(e => {
        setErreur('Fetch échoué : ' + e.message)
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

  // Affiche l'erreur pour debug
  if (!loading && erreur) return (
    <section className="bg-sage-50 py-10 text-center px-4">
      <p className="text-red-500 text-sm font-mono break-all">⚠ {erreur}</p>
    </section>
  )

  if (!loading && seances.length === 0) return (
    <section className="bg-sage-50 py-10 text-center">
      <p className="text-navy-400 text-sm">
        Aucune séance disponible dans les 28 prochains jours
      </p>
    </section>
  )

  return (
    <section id="prochaines-seances" ref={ref} aria-labelledby="seances-title"
             className="bg-sage-50 section-pad">
      <div className="container-max">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-tag text-sage-700 border-sage-200 bg-white mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse" aria-hidden="true" />
            Disponibilités en temps réel
          </span>
          <h2 id="seances-title" className="heading-lg text-navy-700 mb-4">
            Prochaines{' '}
            <span className="text-gradient">séances de groupe</span>
          </h2>
          <p className="text-navy-400 body-md max-w-md mx-auto">
            Réserve ta place gratuitement — paiement de 60 € sur place le jour J.
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
                  className={`bg-white rounded-2xl p-6 flex flex-col gap-4 border shadow-card
                    ${s.complet
                      ? 'opacity-60 border-sage-100'
                      : 'border-sage-100 hover:border-sage-300 hover:shadow-soft'
                    } transition-all duration-300`}
                >
                  {/* Urgence */}
                  {!s.complet && s.placesRestantes <= 3 && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold
                                     text-red-600 bg-red-50 border border-red-200
                                     px-3 py-1 rounded-full w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" aria-hidden="true" />
                      Plus que {s.placesRestantes} place{s.placesRestantes > 1 ? 's' : ''} !
                    </span>
                  )}
                  {s.complet && (
                    <span className="text-xs font-semibold text-navy-400 bg-navy-50
                                     border border-navy-100 px-3 py-1 rounded-full w-fit">
                      Complet
                    </span>
                  )}

                  {/* Date */}
                  <div>
                    <p className="text-sage-600 text-xs font-semibold tracking-widest uppercase mb-1 capitalize">
                      {jour}
                    </p>
                    <p className="text-navy-700 font-montserrat font-bold text-xl capitalize">{date}</p>
                    <p className="text-navy-400 text-sm mt-0.5">
                      {heure} · 2h · Waterloo <span className="text-navy-300">(20 min de Bruxelles)</span>
                    </p>
                  </div>

                  {/* Prix */}
                  <div className="flex items-baseline gap-1">
                    <span className="font-montserrat font-black text-3xl text-navy-700">60</span>
                    <span className="text-navy-400 text-lg">€</span>
                    <span className="text-navy-300 text-xs ml-1">· sur place</span>
                  </div>

                  {/* Jauge places */}
                  <PlacesBar restantes={s.placesRestantes} />

                  {/* CTA */}
                  {s.complet ? (
                    <button disabled
                            className="w-full py-3 rounded-xl bg-sage-50 text-navy-300
                                       font-semibold text-sm cursor-not-allowed border border-sage-100">
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
                        Réserver ma place — gratuit
                      </a>
                      <p className="text-navy-400/50 text-xs text-center mt-2 italic">
                        Réservation gratuite · Paiement sur place 60 €
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
