import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEOMeta from '../../utils/SEOMeta'
import { CALENDLY_URL } from '../../constants'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '5 Exercices de Respiration pour Mieux Dormir ce Soir',
  description: 'L\'insomnie touche un tiers des adultes en Belgique. Ces 5 techniques de respiration, issues du breathwork et de la neuroscience, vous aident à vous endormir naturellement.',
  datePublished: '2026-05-08',
  dateModified: '2026-05-08',
  author: { '@type': 'Person', name: 'Daphnée', url: 'https://belgiumbreathwork.be/#about' },
  publisher: { '@type': 'Organization', name: 'Belgium Breathwork', url: 'https://belgiumbreathwork.be' },
  image: 'https://belgiumbreathwork.be/images/seance-02.jpg',
  url: 'https://belgiumbreathwork.be/blog/exercices-de-respiration-pour-mieux-dormir',
}

const techniques = [
  {
    num: '01',
    name: 'La respiration 4-7-8',
    steps: ['Videz complètement vos poumons par la bouche', 'Inspirez silencieusement par le nez pendant 4 secondes', 'Retenez votre souffle pendant 7 secondes', 'Expirez complètement par la bouche pendant 8 secondes', 'Répétez 4 cycles'],
    science: 'Popularisée par le Dr Andrew Weil, cette technique force la régulation du système nerveux parasympathique et réduit l\'activation des glandes surrénales.',
  },
  {
    num: '02',
    name: 'La cohérence cardiaque',
    steps: ['Inspirez régulièrement pendant 5 secondes', 'Expirez régulièrement pendant 5 secondes', 'Maintenez ce rythme 5 minutes', 'Idéalement 3 fois par jour, dont une fois le soir'],
    science: 'Cette technique synchronise le système nerveux autonome et a été validée par l\'Institut HeartMath : elle réduit le cortisol de 23 % en moyenne en pratique régulière.',
  },
  {
    num: '03',
    name: 'Le soupir physiologique',
    steps: ['Faites une première inspiration par le nez (70 % de votre capacité)', 'Immédiatement après, faites une deuxième inspiration rapide par le nez (les 30 % restants)', 'Expirez lentement et complètement par la bouche', 'Répétez 2 à 3 fois'],
    science: 'Une étude de Stanford (2023) a identifié cette technique comme la plus efficace pour réduire le stress de façon immédiate. Elle rouvre les alvéoles pulmonaires affaissées et chasse le CO₂ accumulé.',
  },
  {
    num: '04',
    name: 'La respiration abdominale',
    steps: ['Posez une main sur le ventre, une sur la poitrine', 'Inspirez par le nez en gonflant uniquement le ventre (la main sur la poitrine ne doit pas bouger)', 'Expirez lentement par le nez ou la bouche', 'Continuez 10 minutes'],
    science: 'La respiration abdominale stimule directement le nerf vague via le diaphragme. Elle est utilisée dans toutes les thérapies cognitivo-comportementales pour l\'anxiété et l\'insomnie.',
  },
  {
    num: '05',
    name: 'La respiration alternée (Nadi Shodhana)',
    steps: ['Fermez la narine droite avec le pouce droit', 'Inspirez par la narine gauche pendant 4 secondes', 'Fermez la narine gauche avec l\'annulaire, ouvrez la droite', 'Expirez par la narine droite pendant 4 secondes', 'Inspirez par la narine droite, puis expirez par la gauche', 'Répétez 5 à 10 cycles'],
    science: 'Issue du pranayama yogique, cette technique équilibre les deux hémisphères cérébraux et régule le système nerveux sympathique/parasympathique. Particulièrement efficace chez les personnes avec un mental hyperactif.',
  },
]

export default function RespirationSommeil() {
  const handleCalendly = (e) => {
    e.preventDefault()
    if (window.Calendly) window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    else window.open(CALENDLY_URL, '_blank')
  }

  return (
    <Layout>
      <SEOMeta
        title="5 Exercices de Respiration pour Mieux Dormir ce Soir | Belgium Breathwork"
        description="Insomnie ? Ces 5 techniques de respiration activent le nerf vague et calment le système nerveux pour s'endormir naturellement. Validées par la science, pratiques dès ce soir."
        canonical="https://belgiumbreathwork.be/blog/exercices-de-respiration-pour-mieux-dormir"
        schema={schema}
      />

      <article className="bg-white pt-28">

        {/* Header */}
        <header className="bg-hero-bg py-16 px-4 md:px-8">
          <div className="container-max max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Link to="/blog" className="text-sage-600 hover:text-sage-700 text-sm font-medium transition-colors">
                ← Blog
              </Link>
              <span className="text-navy-300">·</span>
              <span className="section-tag text-sage-700 border-sage-200 bg-white text-xs">Sommeil</span>
              <span className="text-navy-300">·</span>
              <span className="text-navy-400/60 text-sm">5 min de lecture</span>
            </div>
            <h1 className="heading-xl text-navy-700 mb-6">
              5 Exercices de Respiration pour Mieux Dormir ce Soir
            </h1>
            <p className="body-lg text-navy-500/80 max-w-2xl">
              Des techniques simples, validées par la recherche, que vous pouvez commencer
              ce soir. Sans médicaments, sans applications, en quelques minutes.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img src="/images/daphnee.png" alt="Daphnée" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-navy-700 text-sm">Daphnée</p>
                <p className="text-navy-400 text-xs">Praticienne Hypnotic Breathwork · Certifiée IPHM · 8 mai 2026</p>
              </div>
            </div>
          </div>
        </header>

        <div className="container-max max-w-3xl px-4 md:px-8 -mt-8">
          <img src="/images/seance-02.jpg" alt="Exercices de respiration pour mieux dormir"
               className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lift" />
        </div>

        {/* Content */}
        <div className="container-max max-w-3xl px-4 md:px-8 py-12">
          <div className="space-y-6 text-navy-500/85 text-lg leading-relaxed">

            <p>
              Selon Sciensano, près de <strong className="text-navy-700">30 % des adultes belges</strong>{' '}
              souffrent de troubles du sommeil. La plupart se tournent vers les somnifères —
              efficaces à court terme, mais qui ne traitent pas la cause.
            </p>
            <p>
              La cause, dans la grande majorité des cas, c'est un système nerveux qui reste en
              état d'activation le soir. Votre corps est fatigué mais votre cerveau tourne encore.
              C'est là qu'intervient la respiration.
            </p>
            <p>
              Ces techniques activent le <strong className="text-navy-700">système parasympathique</strong>{' '}
              — votre mode "repos et digestion" — en stimulant le nerf vague via la respiration.
              Ce n'est pas de la sophrologie vague : c'est de la physiologie.
            </p>
          </div>

          {/* Techniques */}
          <div className="mt-12 space-y-8">
            {techniques.map((t) => (
              <div key={t.num} className="bg-sage-50 border border-sage-100 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-sage-600 text-white font-montserrat font-bold
                                  flex items-center justify-center text-sm">
                    {t.num}
                  </div>
                  <h2 className="heading-md text-navy-700 pt-1">{t.name}</h2>
                </div>

                <div className="mb-4">
                  <p className="font-montserrat font-semibold text-navy-600 text-sm mb-2 uppercase tracking-wide">Comment faire</p>
                  <ol className="space-y-2">
                    {t.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 text-navy-500/80">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-sage-100 text-sage-700 text-xs font-semibold
                                         flex items-center justify-center mt-0.5">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-white rounded-xl p-4 border border-sage-100">
                  <p className="text-sm text-navy-500/70 leading-relaxed">
                    <strong className="text-navy-600">Science :</strong> {t.science}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-6 text-navy-500/85 text-lg leading-relaxed">
            <h2 className="heading-md text-navy-700">Quand ces techniques atteignent leurs limites</h2>
            <p>
              Ces exercices sont très efficaces pour les troubles du sommeil liés au stress
              quotidien. Mais si votre insomnie est profonde — associée à un burnout, une anxiété
              chronique ou un traumatisme non résolu — les techniques en solitaire ne suffiront pas.
            </p>
            <p>
              L'Hypnotic Breathwork va plus loin : en combinant la respiration consciente à une
              induction hypnotique, il permet d'accéder aux racines émotionnelles et physiologiques
              qui maintiennent le système nerveux en état d'alerte. Beaucoup de participantes
              rapportent des changements durables dès les premières séances.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-sage-50 border border-sage-100 rounded-2xl p-8 text-center">
            <p className="font-montserrat font-bold text-navy-700 text-xl mb-2">
              Aller plus loin avec une séance guidée
            </p>
            <p className="text-navy-400 mb-6">Belgium Breathwork · Waterloo · 20 min de Bruxelles · 60 €</p>
            <button onClick={handleCalendly} className="btn-primary text-lg">
              Réserver ma place — gratuit
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-sage-100 flex flex-col sm:flex-row gap-4 justify-between">
            <Link to="/sommeil" className="text-sage-600 hover:text-sage-700 font-medium transition-colors">
              ← Page Sommeil
            </Link>
            <Link to="/blog" className="text-sage-600 hover:text-sage-700 font-medium transition-colors">
              Voir tous les articles →
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  )
}
