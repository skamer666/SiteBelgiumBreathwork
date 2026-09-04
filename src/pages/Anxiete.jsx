import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import SEOMeta from '../utils/SEOMeta'
import { CALENDLY_URL } from '../constants'

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }
const stagger = { show: { transition: { staggerChildren: 0.12 } } }

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Breathwork pour l\'Anxiété à Bruxelles | Belgium Breathwork',
  description: 'Le breathwork régule l\'anxiété en agissant directement sur le système nerveux autonome. Alternative naturelle aux médicaments. Séances à Waterloo, 20 min de Bruxelles.',
  url: 'https://belgiumbreathwork.be/anxiete',
}

export default function Anxiete() {
  const handleCalendly = (e) => {
    e.preventDefault()
    if (window.Calendly) window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    else window.open(CALENDLY_URL, '_blank')
  }

  return (
    <Layout>
      <SEOMeta
        title="Breathwork pour l'Anxiété à Bruxelles — Alternative Naturelle | Belgium Breathwork"
        description="Anxiété chronique, attaques de panique, stress professionnel : le breathwork régule le système nerveux et réduit l'anxiété sans médicaments. Séances à Waterloo, Bruxelles."
        canonical="https://belgiumbreathwork.be/anxiete"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[65vh] flex flex-col items-center justify-center bg-hero-bg pt-28 pb-16 px-4 md:px-8 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="breathe-orb absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-sage-200/50 to-sage-100/30 blur-3xl" />
          <div className="breathe-orb-2 absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tl from-sand-100/60 to-sage-100/40 blur-3xl" />
        </div>
        <motion.div variants={stagger} initial="hidden" animate="show"
                    className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div variants={fadeUp} className="mb-6">
            <span className="section-tag text-sage-700 border-sage-200 bg-sage-50">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse" aria-hidden="true" />
              Anxiété & Stress chronique
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="heading-xl text-navy-700 mb-6">
            Libérez l'anxiété{' '}
            <span className="block text-gradient">par la respiration</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="body-lg text-navy-500/80 max-w-2xl mx-auto mb-8">
            L'anxiété n'est pas une faiblesse mentale. C'est un système nerveux qui s'est mis en
            sécurité et ne sait plus comment en sortir. Le breathwork lui apprend à se réguler —
            sans médicaments.
          </motion.p>
          <motion.button variants={fadeUp} onClick={handleCalendly} className="btn-primary text-lg">
            Réserver une séance — 60 €
          </motion.button>
        </motion.div>
      </section>

      {/* Section 1 : l'anxiété dans le corps */}
      <section className="bg-white section-pad">
        <div className="container-max max-w-4xl">
          <h2 className="heading-lg text-navy-700 mb-6">
            L'anxiété : un problème de corps, pas seulement de tête
          </h2>
          <div className="space-y-5 text-navy-500/80 text-lg leading-relaxed">
            <p>
              L'anxiété chronique touche environ <strong className="text-navy-700">15 à 20 % des adultes</strong>{' '}
              en Belgique à un moment de leur vie. Elle se manifeste souvent par des palpitations,
              une tension musculaire, des difficultés de concentration et une inquiétude diffuse
              difficile à nommer.
            </p>
            <p>
              La plupart des approches classiques ciblent les pensées anxieuses. C'est utile —
              mais incomplet. L'anxiété est d'abord une réponse du système nerveux autonome : le
              corps déclenche une alarme, et le cerveau rationnel court derrière pour trouver
              une raison.
            </p>
            <div className="bg-sage-50 border border-sage-100 rounded-2xl p-6 my-8">
              <p className="font-montserrat font-semibold text-navy-700 mb-2">
                Pourquoi "penser positif" ne suffit pas
              </p>
              <p className="text-navy-500/80 leading-relaxed">
                Tant que le système nerveux reste en mode "danger", les pensées anxieuses se regenerent
                automatiquement. Pour sortir de l'anxiété durablement, il faut d'abord calmer le corps —
                et c'est exactement ce que fait la respiration consciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : comment ça fonctionne */}
      <section className="bg-sage-50/50 section-pad">
        <div className="container-max max-w-4xl">
          <h2 className="heading-lg text-navy-700 mb-6">
            Comment le breathwork régule l'anxiété
          </h2>
          <div className="space-y-5 text-navy-500/80 text-lg leading-relaxed">
            <p>
              La respiration est le seul système autonome du corps que vous pouvez contrôler
              volontairement. En modifiant consciemment votre respiration, vous envoyez un signal
              direct au cerveau limbique : "il n'y a pas de danger".
            </p>
            <p>
              L'<strong className="text-navy-700">Hypnotic Breathwork</strong> amplifie cet effet en
              combinant la respiration consciente à une induction hypnotique légère. Cette combinaison
              permet d'accéder et de traiter les racines émotionnelles de l'anxiété — souvent des
              expériences passées stockées dans le corps, pas dans la mémoire consciente.
            </p>
            <p>
              Une étude de l'<strong className="text-navy-700">Université de Brighton</strong> a démontré
              que les pratiques régulières de breathwork réduisent significativement les scores
              d'anxiété autodéclarés après 4 à 8 semaines. L'effet est comparable à certaines
              thérapies cognitivo-comportementales.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {[
              { title: 'Effet immédiat', desc: 'En quelques minutes de respiration consciente, le rythme cardiaque ralentit et la tension diminue' },
              { title: 'Rééducation du système nerveux', desc: 'Avec la pratique, le système nerveux apprend à revenir au calme plus facilement' },
              { title: 'Traitement des traumatismes', desc: 'L\'Hypnotic Breathwork permet d\'atteindre et libérer des émotions enfouies à l\'origine de l\'anxiété chronique' },
              { title: 'Sans effets secondaires', desc: 'Contrairement aux médicaments, le breathwork n\'engendre pas de dépendance ni d\'effets indésirables' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-sage-100 shadow-card">
                <h3 className="font-montserrat font-semibold text-navy-700 mb-2">{item.title}</h3>
                <p className="text-navy-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 : comparaison avec autres approches */}
      <section className="bg-white section-pad">
        <div className="container-max max-w-4xl">
          <h2 className="heading-lg text-navy-700 mb-8">
            Breathwork vs psychologue vs médicaments : quelle différence ?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-sage-100">
                  <th className="py-3 pr-6 font-montserrat font-semibold text-navy-700">Approche</th>
                  <th className="py-3 pr-6 font-montserrat font-semibold text-navy-700">Agit sur</th>
                  <th className="py-3 font-montserrat font-semibold text-navy-700">Délai</th>
                </tr>
              </thead>
              <tbody className="text-navy-500/80">
                {[
                  { name: 'Médicaments (ISRS)', target: 'Neurochimie — symptômes', delay: 'Rapide, mais symptomatique' },
                  { name: 'Psychologie (TCC)', target: 'Pensées et comportements', delay: '2–6 mois' },
                  { name: 'Breathwork', target: 'Système nerveux et corps', delay: 'Dès la 1re séance + effet cumulatif' },
                  { name: 'Breathwork + Psychologie', target: 'Corps ET pensées', delay: 'Résultats les plus durables' },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-sage-50 last:border-0">
                    <td className="py-4 pr-6 font-medium text-navy-700">{row.name}</td>
                    <td className="py-4 pr-6">{row.target}</td>
                    <td className="py-4">{row.delay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-navy-400 text-sm italic">
            Le breathwork ne remplace pas un suivi médical ou psychologique — il le complète.
            En cas de trouble anxieux sévère, consultez toujours un professionnel de santé.
          </p>
        </div>
      </section>

      {/* CTA dark */}
      <section className="bg-navy-900 text-white section-pad">
        <div className="container-max max-w-3xl text-center">
          <h2 className="heading-lg text-white mb-4">
            Prête à respirer autrement à{' '}
            <span className="text-gradient-gold">Bruxelles</span>{' '}?
          </h2>
          <p className="body-lg text-white/70 max-w-2xl mx-auto mb-8">
            Séance de groupe à 60 € à Waterloo, 20 min de Bruxelles.
            Réservation gratuite, paiement sur place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleCalendly} className="btn-primary text-lg">
              Réserver ma place — 60 €
            </button>
            <Link to="/blog/breathwork-ou-psychologue-bruxelles" className="btn-outline text-lg">
              Breathwork vs psychologue →
            </Link>
          </div>
          <Link to="/blog/lacher-prise" className="inline-block mt-6 text-white/60 hover:text-white text-sm transition-colors">
            À lire aussi : Lâcher prise, pourquoi la respiration en est la clé →
          </Link>
        </div>
      </section>
    </Layout>
  )
}
