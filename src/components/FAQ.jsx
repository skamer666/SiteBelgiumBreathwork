import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const faqs = [
  {
    q: 'Est-ce que je peux faire du breathwork si je suis très cartésien(ne) ?',
    a: 'Absolument. En fait, les personnes les plus cartésiennes sont souvent celles qui vivent les expériences les plus puissantes — précisément parce qu\'elles ont longtemps "bridé" leur ressenti. Marine Paquet, qui se décrivait comme très cartésienne et ayant du mal à lâcher prise, a eu l\'une des expériences les plus transformatrices. Le breathwork fonctionne via la physiologie, pas via la croyance.',
  },
  {
    q: 'Est-ce que c\'est dangereux ? Y a-t-il des contre-indications ?',
    a: 'Le breathwork est une pratique sûre pour la grande majorité des personnes. Il existe certaines contre-indications médicales (épilepsie, problèmes cardiaques sévères, grossesse, certains troubles psychiatriques). Lors de la prise de contact, Daphnée s\'assure que la pratique est adaptée à ta situation. La séance se déroule dans un cadre sécurisé et bienveillant.',
  },
  {
    q: 'Comment se passe une séance concrètement ?',
    a: 'Une séance dure généralement 60 à 90 minutes. On commence par un échange pour définir l\'intention du jour. Ensuite vient la pratique : respiration guidée en cycles, induction hypnotique et visualisation. Tu restes allongé(e), les yeux fermés, avec de la musique. Après la séance, on prend le temps d\'intégrer l\'expérience ensemble.',
  },
  {
    q: 'Combien de séances faut-il pour ressentir des effets ?',
    a: 'De nombreuses personnes ressentent un effet dès la première séance — un état de calme, de légèreté, parfois une libération émotionnelle intense. Pour des changements durables en profondeur, un suivi régulier est recommandé. Mais une seule séance peut déjà changer quelque chose.',
  },
  {
    q: 'Où se trouvent les séances ? Y a-t-il du parking ou une gare proche ?',
    a: 'Les séances se déroulent à Waterloo, dans un espace calme et intimiste, facilement accessible. Parking disponible à proximité et accès en transport en commun. L\'adresse exacte est communiquée lors de la confirmation de réservation.',
  },
  {
    q: 'Comment réserver et payer ?',
    a: 'La réservation se fait directement en ligne — rapide et simple. Le paiement est sécurisé et s\'effectue au moment de la réservation, ce qui te garantit ta place immédiatement. Pour les séances entreprise, contacte Daphnée par email ou téléphone.',
  },
  {
    q: 'Le breathwork est-il scientifiquement prouvé ?',
    a: 'Oui. Une étude de Stanford (2023) a démontré que 5 minutes de « soupir cyclique » surpassent la méditation traditionnelle pour réduire l\'anxiété et améliorer l\'humeur. Une étude portant sur 404 participants (Université du Queensland) confirme des améliorations significatives de l\'énergie et de la clarté mentale. La respiration abdominale pratiquée sur 8 semaines réduit les scores d\'anxiété de façon statistiquement significative (p<0,001). Ces effets s\'expliquent par la stimulation du nerf vague, qui abaisse le cortisol et les cytokines inflammatoires.',
  },
  {
    q: 'Le breathwork peut-il aider à prévenir le burn-out en entreprise ?',
    a: 'C\'est précisément pourquoi de plus en plus d\'entreprises s\'y intéressent. Selon Deloitte et l\'INAMI, 20 à 28,5 % des actifs belges risquent le burn-out, et chaque cas coûte en moyenne 23 677 € à l\'entreprise. Les programmes de bien-être adaptés montrent jusqu\'à 81 % de réduction de l\'absentéisme, avec un retour sur investissement de 6 € pour chaque euro investi (Deloitte). En Wallonie, les Chèques-Entreprises peuvent couvrir jusqu\'à 90 % du coût d\'un programme. Contacte Daphnée pour un devis entreprise personnalisé.',
  },
]

function FaqItem({ faq, isOpen, onToggle, index }) {
  return (
    <div className="border-b border-navy-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left
                   hover:text-sage-600 transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2
                   rounded-lg"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="font-montserrat font-semibold text-navy-500 text-base leading-snug pr-2">
          {faq.q}
        </span>
        <span className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center
                          transition-all duration-300
                          ${isOpen
                            ? 'border-sage-500 bg-sage-500 text-white rotate-45'
                            : 'border-navy-200 text-navy-300'}`}
              aria-hidden="true">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-navy-400 text-sm leading-relaxed pb-5 pr-10">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [ref, inView] = useInView(0.1)
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="faq" ref={ref} aria-labelledby="faq-title"
             className="bg-sand-50 section-pad">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:w-5/12"
          >
            <span className="section-tag text-navy-400 border-navy-100 bg-navy-50 mb-6">
              Questions fréquentes
            </span>
            <h2 id="faq-title" className="heading-lg text-navy-500 mb-4">
              Tu as des{' '}
              <span className="text-gradient">questions ?</span>
            </h2>
            <p className="body-md text-navy-400 mb-8">
              Tout ce que tu veux savoir avant de te lancer — sans pression,
              sans engagement, juste des réponses honnêtes.
            </p>

            {/* Local info */}
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <h3 className="font-montserrat font-semibold text-navy-500 mb-4 text-base">
                📍 Accès facile en Belgique
              </h3>
              <ul className="space-y-3 text-navy-400 text-sm" role="list">
                {[
                  { icon: '🚗', text: 'Parking disponible à proximité' },
                  { icon: '🚂', text: 'Accès facile en transport en commun' },
                  { icon: '📞', text: '+32 494 20 40 93' },
                ].map(({ icon, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <span className="text-lg" aria-hidden="true">{icon}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right column – FAQ list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:w-7/12"
          >
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-soft" role="list">
              {faqs.map((faq, i) => (
                <FaqItem
                  key={i}
                  faq={faq}
                  index={i}
                  isOpen={openIdx === i}
                  onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
