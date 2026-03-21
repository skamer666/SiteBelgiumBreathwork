import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const pains = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
           className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'Tu te sens épuisé(e), mais tu ne sais pas pourquoi',
    body: 'Tu as tout "sous contrôle" en apparence, mais intérieurement tu tournes en rond. L\'énergie s\'échappe. Le soir tu t\'effondres.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
           className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Le stress et la charge mentale t\'étouffent',
    body: 'Les pensées ne s\'arrêtent jamais. Même au lit, ton cerveau tourne. Tu voudrais juste… souffler.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
           className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Tu te sens bloqué(e) dans certains schémas',
    body: 'Les mêmes réactions, les mêmes peurs, les mêmes situations. Tu sais ce qu\'il faudrait changer, mais comment ?',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
           className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Tu t\'es perdu(e) de vue',
    body: 'Entre les responsabilités, les autres, le quotidien… tu ne sais plus trop qui tu es, ce que tu veux vraiment, ce qui te rend vivant(e).',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function PainPoints() {
  const [ref, inView] = useInView(0.15)

  return (
    <section id="pourquoi" ref={ref} aria-labelledby="pain-title"
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
            Tu te reconnais ?
          </span>
          <h2 id="pain-title" className="heading-lg text-navy-700 mb-4">
            Et si c'était exactement{' '}
            <span className="text-gradient">ce que tu vis</span> ?
          </h2>
          <p className="body-lg text-navy-400 max-w-xl mx-auto">
            Tu n'es pas seul(e). Ces sensations sont le signal que quelque chose cherche
            à s'exprimer — et le breathwork peut t'aider à l'entendre.
          </p>
        </motion.div>

        {/* Pain cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" role="list">
          {pains.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              role="listitem"
              className="bg-white rounded-2xl p-6 border border-sage-100 shadow-card
                         hover:border-sage-300 hover:shadow-soft transition-all duration-300 group"
            >
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-sage-50 flex items-center justify-center
                                text-sage-600 group-hover:bg-sage-100 transition-colors duration-300 border border-sage-100">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-navy-700 mb-2 text-base leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-navy-400 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition hook */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center text-navy-400/70 text-base mt-12 italic max-w-lg mx-auto"
        >
          "J'étais très cartésienne, avec beaucoup de mal à lâcher prise. Je ne pensais pas être
          la personne idéale… et pourtant."
          <span className="block mt-2 text-sage-600 not-italic text-sm font-medium">
            — Marine Paquet, cliente
          </span>
        </motion.p>
      </div>
    </section>
  )
}
