import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEOMeta from '../../utils/SEOMeta'
import { CALENDLY_URL } from '../../constants'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Cohérence Cardiaque : le Guide Complet (méthode 365)',
      description: "Qu'est-ce que la cohérence cardiaque, comment la pratiquer avec la méthode 365, et pourquoi le breathwork en est une version amplifiée. Guide pas à pas.",
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      author: { '@type': 'Person', name: 'Daphnée', url: 'https://belgiumbreathwork.be/#about' },
      publisher: { '@type': 'Organization', name: 'Belgium Breathwork', url: 'https://belgiumbreathwork.be' },
      image: 'https://belgiumbreathwork.be/images/seance-02.jpg',
      url: 'https://belgiumbreathwork.be/blog/coherence-cardiaque',
      mainEntityOfPage: 'https://belgiumbreathwork.be/blog/coherence-cardiaque',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://belgiumbreathwork.be/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://belgiumbreathwork.be/blog' },
        { '@type': 'ListItem', position: 3, name: 'Cohérence Cardiaque : le Guide Complet', item: 'https://belgiumbreathwork.be/blog/coherence-cardiaque' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Qu'est-ce que la méthode 365 en cohérence cardiaque ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "3 fois par jour, pendant 6 minutes, à un rythme de 5 respirations par minute (inspirez 5 secondes, expirez 5 secondes). C'est le protocole le plus étudié pour synchroniser durablement le rythme cardiaque et le système nerveux.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle est la différence entre cohérence cardiaque et breathwork ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "La cohérence cardiaque est une respiration lente et régulière qui stabilise le système nerveux. Le breathwork utilise des rythmes respiratoires plus intenses et cycliques pour aller plus loin : libération émotionnelle et accès à un état de conscience modifié, souvent associé à une induction hypnotique légère.",
          },
        },
      ],
    },
  ],
}

const etapes = [
  { n: '01', title: 'Installez-vous', desc: "Asseyez-vous confortablement, dos droit, ou allongez-vous. Fermez les yeux si possible." },
  { n: '02', title: 'Inspirez 5 secondes', desc: 'Par le nez, en gonflant doucement le ventre puis la poitrine.' },
  { n: '03', title: 'Expirez 5 secondes', desc: "Par le nez ou la bouche, lentement, sans forcer. C'est un cycle complet de 10 secondes, soit 6 respirations par minute." },
  { n: '04', title: 'Répétez pendant 5 à 6 minutes', desc: 'Idéalement 3 fois par jour : au réveil, avant un moment stressant, et en fin de journée.' },
]

export default function CoherenceCardiaque() {
  const handleCalendly = (e) => {
    e.preventDefault()
    if (window.Calendly) window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    else window.open(CALENDLY_URL, '_blank')
  }

  return (
    <Layout>
      <SEOMeta
        title="Cohérence Cardiaque : le Guide Complet (méthode 365) | Belgium Breathwork"
        description="Qu'est-ce que la cohérence cardiaque, comment la pratiquer avec la méthode 365 (3x/jour, 6 min, 6 respirations/min), et pourquoi le breathwork en est une version amplifiée."
        canonical="https://belgiumbreathwork.be/blog/coherence-cardiaque"
        schema={schema}
      />

      <article className="bg-white pt-28">
        <header className="bg-hero-bg py-16 px-4 md:px-8">
          <div className="container-max max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Link to="/blog" className="text-sage-600 hover:text-sage-700 text-sm font-medium transition-colors">
                ← Blog
              </Link>
              <span className="text-navy-300">·</span>
              <span className="section-tag text-sage-700 border-sage-200 bg-white text-xs">Respiration & Science</span>
              <span className="text-navy-300">·</span>
              <span className="text-navy-400/60 text-sm">7 min de lecture</span>
            </div>
            <h1 className="heading-xl text-navy-700 mb-6">
              Cohérence Cardiaque : le Guide Complet
            </h1>
            <p className="body-lg text-navy-500/80 max-w-2xl">
              Une technique de respiration simple, gratuite et validée scientifiquement pour calmer
              le système nerveux en quelques minutes. Voici comment la pratiquer, et jusqu'où elle
              peut vous mener.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img src="/images/daphnee.png" alt="Daphnée, praticienne Hypnotic Breathwork"
                   className="w-10 h-10 rounded-full object-cover" width={40} height={40} />
              <div>
                <p className="font-semibold text-navy-700 text-sm">Daphnée</p>
                <p className="text-navy-400 text-xs">Praticienne Hypnotic Breathwork · Certifiée IPHM · 4 septembre 2026</p>
              </div>
            </div>
          </div>
        </header>

        <div className="container-max max-w-3xl px-4 md:px-8 -mt-8">
          <img src="/images/seance-02.jpg" alt="Exercice de cohérence cardiaque"
               className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lift"
               width={800} height={533} />
        </div>

        <div className="container-max max-w-3xl px-4 md:px-8 py-12">
          <div className="prose-article space-y-6 text-navy-500/85 text-lg leading-relaxed">

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">Qu'est-ce que la cohérence cardiaque ?</h2>
            <p>
              La cohérence cardiaque est une technique de respiration qui consiste à respirer à un
              rythme précis — environ <strong className="text-navy-700">6 respirations par minute</strong> —
              pour synchroniser le rythme cardiaque avec la respiration. Ce rythme particulier
              maximise la <strong className="text-navy-700">variabilité de la fréquence cardiaque (VFC)</strong>,
              un marqueur reconnu de la capacité du système nerveux à s'adapter au stress.
            </p>
            <p>
              Contrairement à la respiration spontanée, souvent irrégulière et rapide en période de
              stress, ce rythme lent et régulier active le nerf vague et bascule le système nerveux
              vers son mode <strong className="text-navy-700">parasympathique</strong> — celui du repos,
              de la digestion et de la récupération.
            </p>

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">La méthode 365 : comment pratiquer</h2>
            <p>
              Développée pour être simple à mémoriser, la méthode "365" se résume ainsi :{' '}
              <strong className="text-navy-700">3 fois par jour, pendant 6 minutes, à 5 secondes
              d'inspiration puis 5 secondes d'expiration</strong>.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 my-8">
              {etapes.map((e) => (
                <div key={e.n} className="bg-white rounded-2xl p-6 border border-sage-100 shadow-card">
                  <span className="text-sage-300 font-montserrat font-bold text-2xl">{e.n}</span>
                  <h3 className="font-montserrat font-semibold text-navy-700 mt-2 mb-1">{e.title}</h3>
                  <p className="text-navy-400 text-sm leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">Les bienfaits, au-delà du calme immédiat</h2>
            <div className="bg-sage-50 border border-sage-100 rounded-2xl p-6 my-8">
              <ul className="space-y-2 text-navy-500/80">
                {[
                  'Réduction rapide du stress et de l\'anxiété situationnelle',
                  'Meilleure gestion émotionnelle face aux imprévus',
                  'Amélioration de la qualité du sommeil quand elle est pratiquée le soir',
                  'Augmentation progressive de la résilience au stress avec la pratique régulière',
                  'Meilleure clarté mentale et concentration',
                ].map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="text-sage-600 shrink-0">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p>
              L'effet le plus immédiat se ressent en quelques minutes : ralentissement du rythme
              cardiaque, détente musculaire. L'effet le plus profond, lui, se construit avec la
              répétition — un système nerveux entraîné à revenir au calme y revient de plus en plus
              facilement, y compris face à un vrai imprévu.
            </p>

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">
              Et quand la cohérence cardiaque ne suffit plus ?
            </h2>
            <p>
              La cohérence cardiaque est un excellent point de départ — accessible, gratuite,
              pratiquable seul(e) n'importe où. Mais pour des tensions émotionnelles plus profondes
              (burnout, anxiété chronique, traumatismes non résolus), une respiration douce et
              régulière ne suffit parfois pas à "débloquer" ce qui est stocké dans le corps.
            </p>
            <p>
              C'est là qu'intervient le <strong className="text-navy-700">breathwork</strong> — et en
              particulier l'<strong className="text-navy-700">Hypnotic Breathwork</strong> pratiqué chez
              Belgium Breathwork. Le principe reste le même — utiliser la respiration pour agir sur
              le système nerveux — mais avec des rythmes respiratoires plus amples et cycliques,
              associés à une induction hypnotique légère. L'effet est plus intense et va souvent
              jusqu'à la <Link to="/blog/breathwork-ou-psychologue-bruxelles" className="text-sage-700 underline hover:text-sage-800">libération émotionnelle</Link>,
              là où la cohérence cardiaque seule apaise sans nécessairement "vider" la tension accumulée.
            </p>
          </div>

          <div className="mt-12 bg-sage-50 border border-sage-100 rounded-2xl p-8 text-center">
            <p className="font-montserrat font-bold text-navy-700 text-xl mb-2">
              Envie d'aller plus loin que la cohérence cardiaque ?
            </p>
            <p className="text-navy-400 mb-6">Séance de groupe · 60 € · Waterloo · 20 min de Bruxelles</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={handleCalendly} className="btn-primary text-lg">
                Réserver une séance — 60 €
              </button>
              <Link to="/sommeil" className="btn-outline text-lg">
                Breathwork pour le sommeil →
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-sage-100 flex flex-col sm:flex-row gap-4 justify-between">
            <Link to="/anxiete" className="text-sage-600 hover:text-sage-700 font-medium transition-colors">
              ← Breathwork pour l'anxiété
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
