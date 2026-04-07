import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const etudes = [
  {
    badge: 'Santé mentale & Société',
    title: 'Burn-out & Bio-hacking en Belgique',
    subtitle: 'Données INAMI · UCM · SPF Emploi · 2024-2026',
    stat: '+136%',
    statLabel: 'de burn-out chez les moins de 30 ans en 6 ans',
    color: 'sage',
    points: [
      '20 à 28,5 % des actifs belges risquent le burn-out (1 sur 5)',
      '13,4 % des travailleurs en "zone rouge" de détresse extrême',
      'Coût national : >2 milliards €/an pour l'assurance indemnités',
      '600+ centres de breathwork répertoriés en Europe en 2026',
    ],
    file: '/Burn-out%2C%20Stress%20et%20Bio-hacking%20en%20Belgique.pdf',
    fileName: 'Burn-out-Stress-Bio-hacking-Belgique.pdf',
  },
  {
    badge: 'ROI & Entreprises',
    title: 'Bien-être au Travail : Tendances & ROI',
    subtitle: 'Deloitte · SD Worx · INAMI · Securex · 2026',
    stat: '6:1',
    statLabel: 'retour sur investissement de chaque euro investi en santé mentale',
    color: 'navy',
    points: [
      '1 jour d'absence coûte 1 190 € à l'employeur (coûts directs + indirects)',
      '1 cas de burn-out = 23 677 € de perte pour l'entreprise',
      'Absentéisme réduit jusqu'à 81 % avec un programme adapté',
      'Chèques-Entreprises en Wallonie : jusqu'à 90 % de subvention possible',
    ],
    file: '/Bien-%C3%AAtre%20au%20travail%20_%20Tendances%20et%20ROI.pdf',
    fileName: 'Bien-etre-travail-ROI.pdf',
  },
  {
    badge: 'Neurophysiologie',
    title: 'Breathwork, Système Nerveux & Sommeil',
    subtitle: 'Stanford · Université du Queensland · Brighton Medical School · 2023-2026',
    stat: '5 min',
    statLabel: 'de soupir cyclique par jour surpassent la méditation traditionnelle (Stanford)',
    color: 'sand',
    points: [
      'Étude 404 participants (Univ. Queensland) : énergie, clarté mentale +++ vs méditation',
      'Respiration abdominale 8 semaines : réduction scores d'anxiété (p<0,001)',
      'Stimulation du nerf vague → baisse du cortisol et des cytokines inflammatoires',
      'Breathwork holotropique : activation des mêmes réseaux neuronaux que la psilocybine',
    ],
    file: '/Breathwork%2C%20Syst%C3%A8me%20Nerveux%2C%20Anxi%C3%A9t%C3%A9%2C%20Sommeil.pdf',
    fileName: 'Breathwork-Systeme-Nerveux-Sommeil.pdf',
  },
]

const colorMap = {
  sage:  { bg: 'bg-sage-50',  border: 'border-sage-200',  stat: 'text-sage-700',  badge: 'bg-sage-100 text-sage-700',  btn: 'border-sage-300 text-sage-700 hover:bg-sage-100' },
  navy:  { bg: 'bg-navy-50',  border: 'border-navy-100',  stat: 'text-navy-700',  badge: 'bg-navy-100 text-navy-600',  btn: 'border-navy-200 text-navy-600 hover:bg-navy-100' },
  sand:  { bg: 'bg-sand-50',  border: 'border-sand-100',  stat: 'text-navy-700',  badge: 'bg-sand-100 text-navy-600',  btn: 'border-sand-200 text-navy-600 hover:bg-sand-100' },
}

export default function Etudes() {
  const [ref, inView] = useInView(0.05)

  return (
    <section id="etudes" ref={ref} aria-labelledby="etudes-title"
             className="bg-white section-pad">
      <div className="container-max">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="section-tag text-sage-700 border-sage-200 bg-sage-50 mb-6">
            Études & Recherches
          </span>
          <h2 id="etudes-title" className="heading-lg text-navy-700 mb-4">
            La science{' '}
            <span className="text-gradient">valide le breathwork</span>
          </h2>
          <p className="body-lg text-navy-400 max-w-2xl mx-auto">
            Trois rapports approfondis basés sur les dernières données belges et internationales —
            INAMI, Deloitte, Stanford, Université du Queensland — pour comprendre pourquoi
            la respiration consciente est devenue une priorité de santé en 2026.
          </p>
        </motion.div>

        {/* Study cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {etudes.map((e, i) => {
            const c = colorMap[e.color]
            return (
              <motion.article
                key={e.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.55, ease: 'easeOut' }}
                className={`rounded-3xl border ${c.border} ${c.bg} p-7 flex flex-col shadow-soft`}
              >
                {/* Badge */}
                <span className={`inline-block self-start text-xs font-semibold tracking-widest
                                  uppercase px-3 py-1 rounded-full mb-4 ${c.badge}`}>
                  {e.badge}
                </span>

                {/* Title */}
                <h3 className="font-montserrat font-bold text-navy-700 text-lg leading-snug mb-1">
                  {e.title}
                </h3>
                <p className="text-navy-400 text-xs mb-6 leading-relaxed">{e.subtitle}</p>

                {/* Key stat */}
                <div className="mb-6 py-4 border-y border-current/10">
                  <p className={`font-montserrat font-black text-5xl mb-1 ${c.stat}`}>
                    {e.stat}
                  </p>
                  <p className="text-navy-500 text-sm leading-snug">{e.statLabel}</p>
                </div>

                {/* Bullet points */}
                <ul className="space-y-2.5 flex-1 mb-7">
                  {e.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-navy-500 leading-snug">
                      <svg className="w-4 h-4 mt-0.5 shrink-0 text-sage-500"
                           fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>

                {/* Download button */}
                <a
                  href={e.file}
                  download={e.fileName}
                  className={`flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl
                              border text-sm font-semibold transition-colors duration-200 ${c.btn}`}
                  aria-label={`Télécharger l'étude : ${e.title}`}
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Télécharger l'étude PDF
                </a>
              </motion.article>
            )
          })}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-center"
        >
          <p className="text-navy-400/60 text-sm">
            Sources officielles : INAMI · SPF Emploi · Deloitte · Stanford · Université du Queensland ·
            Brighton & Sussex Medical School · UCM · Securex
          </p>
        </motion.div>

      </div>
    </section>
  )
}
