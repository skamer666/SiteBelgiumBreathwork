import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEOMeta from '../../utils/SEOMeta'
import { CALENDLY_URL } from '../../constants'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Burn-out : les symptômes à reconnaître (et que faire)',
      description: "Épuisement qui ne passe pas, irritabilité, troubles du sommeil : voici les 12 signes du burn-out à ne pas ignorer, et les premières étapes pour en sortir.",
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      author: { '@type': 'Person', name: 'Daphnée', url: 'https://belgiumbreathwork.be/#about' },
      publisher: { '@type': 'Organization', name: 'Belgium Breathwork', url: 'https://belgiumbreathwork.be' },
      image: 'https://belgiumbreathwork.be/images/seance-01.jpg',
      url: 'https://belgiumbreathwork.be/blog/burnout-symptomes',
      mainEntityOfPage: 'https://belgiumbreathwork.be/blog/burnout-symptomes',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://belgiumbreathwork.be/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://belgiumbreathwork.be/blog' },
        { '@type': 'ListItem', position: 3, name: 'Burn-out : les symptômes à reconnaître', item: 'https://belgiumbreathwork.be/blog/burnout-symptomes' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quel est le premier signe du burn-out ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le plus souvent, c'est un épuisement qui ne disparaît pas après le repos — vous dormez, vous partez en week-end, et la fatigue reste. C'est le signal que le système nerveux, pas seulement le corps, est en surcharge.",
          },
        },
        {
          '@type': 'Question',
          name: 'Combien de temps dure un burn-out ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Très variable : de quelques semaines pour un épuisement modéré pris en charge tôt, à plusieurs mois voire plus d'un an pour un burn-out sévère non traité. Un accompagnement (médical, psychologique, et/ou corporel) raccourcit généralement le délai de récupération.",
          },
        },
      ],
    },
  ],
}

const signes = [
  { cat: 'Physiques', items: [
    "Épuisement qui ne disparaît pas après le repos ou les vacances",
    'Troubles du sommeil : endormissement difficile, réveils nocturnes, sommeil non réparateur',
    'Douleurs diffuses : tensions musculaires, maux de tête, maux de dos réguliers',
    'Système immunitaire affaibli : rhumes et infections à répétition',
  ]},
  { cat: 'Émotionnels', items: [
    'Irritabilité ou hypersensibilité émotionnelle inhabituelle',
    'Sensation de vide, de détachement ou de cynisme envers son travail',
    "Anxiété diffuse, parfois sans objet précis",
    'Perte de sens : "à quoi bon" devient une pensée récurrente',
  ]},
  { cat: 'Cognitifs & comportementaux', items: [
    'Difficultés de concentration et trous de mémoire',
    'Procrastination inhabituelle sur des tâches simples',
    'Isolement social, envie de fuir les interactions',
    'Perte de motivation même pour des activités auparavant plaisantes',
  ]},
]

export default function BurnoutSymptomes() {
  const handleCalendly = (e) => {
    e.preventDefault()
    if (window.Calendly) window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    else window.open(CALENDLY_URL, '_blank')
  }

  return (
    <Layout>
      <SEOMeta
        title="Burn-out : les Symptômes à Reconnaître (et que faire) | Belgium Breathwork"
        description="Épuisement qui ne passe pas, irritabilité, troubles du sommeil : les 12 signes du burn-out à ne pas ignorer, organisés par catégorie, et les premières étapes concrètes pour en sortir."
        canonical="https://belgiumbreathwork.be/blog/burnout-symptomes"
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
              <span className="section-tag text-sage-700 border-sage-200 bg-white text-xs">Burnout & Stress</span>
              <span className="text-navy-300">·</span>
              <span className="text-navy-400/60 text-sm">8 min de lecture</span>
            </div>
            <h1 className="heading-xl text-navy-700 mb-6">
              Burn-out : les symptômes à reconnaître
            </h1>
            <p className="body-lg text-navy-500/80 max-w-2xl">
              Le burn-out ne commence pas le jour où l'on s'effondre. Il s'installe par signaux
              successifs, souvent minimisés pendant des mois. Voici comment les repérer — et par
              où commencer.
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
          <img src="/images/seance-01.jpg" alt="Reconnaître les symptômes du burn-out"
               className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lift"
               width={800} height={533} />
        </div>

        <div className="container-max max-w-3xl px-4 md:px-8 py-12">
          <div className="prose-article space-y-6 text-navy-500/85 text-lg leading-relaxed">

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">En Belgique, un problème loin d'être marginal</h2>
            <p>
              Selon les données croisées de l'<strong className="text-navy-700">INAMI</strong>, de la{' '}
              <strong className="text-navy-700">SPF Emploi</strong> et de <strong className="text-navy-700">Deloitte</strong>,
              entre 20 et 28,5 % des actifs belges présentent un risque de burn-out, avec une hausse
              marquée chez les moins de 30 ans. Chaque cas coûte en moyenne plus de 23 000 € à
              l'entreprise en absentéisme et perte de productivité. Ce n'est donc pas un problème de
              "faiblesse individuelle" — c'est un phénomène structurel, et le reconnaître tôt change
              tout dans la façon d'en sortir.
            </p>

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">Les 12 signes à surveiller</h2>
            <p>
              Le burn-out se manifeste sur trois plans à la fois : le corps, les émotions, et le
              fonctionnement cognitif. Voici les signaux les plus fréquents, regroupés par catégorie.
            </p>

            {signes.map((groupe) => (
              <div key={groupe.cat} className="bg-sage-50 border border-sage-100 rounded-2xl p-6 my-6">
                <p className="font-montserrat font-semibold text-navy-700 mb-3">{groupe.cat}</p>
                <ul className="space-y-2 text-navy-500/80">
                  {groupe.items.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="text-sage-600 shrink-0">✓</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <p>
              Un ou deux de ces signes isolés ne signent pas forcément un burn-out. C'est
              <strong className="text-navy-700"> l'accumulation sur plusieurs semaines</strong>, associée
              à un épuisement qui résiste au repos, qui doit alerter.
            </p>

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">Pourquoi le repos seul ne suffit pas</h2>
            <p>
              Beaucoup de personnes en burn-out reviennent de congé aussi fatiguées qu'avant de partir.
              La raison : le burn-out n'est pas qu'un manque de sommeil ou de vacances, c'est un{' '}
              <strong className="text-navy-700">dérèglement du système nerveux autonome</strong>. L'axe
              hypothalamo-hypophyso-surrénalien reste hyperactivé, le corps continue de fonctionner en
              mode alerte même à l'arrêt — c'est pourquoi la fatigue persiste malgré le repos physique.
            </p>

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">Que faire concrètement ?</h2>
            <p>
              La prise en charge d'un burn-out combine généralement plusieurs approches, à adapter
              selon la sévérité :
            </p>
            <ul className="space-y-2 text-navy-500/80 pl-1">
              <li className="flex gap-2"><span className="text-sage-600 shrink-0">1.</span><span><strong className="text-navy-700">Consulter un médecin</strong> — pour un diagnostic, un éventuel arrêt de travail, et écarter d'autres causes (thyroïde, dépression, carences).</span></li>
              <li className="flex gap-2"><span className="text-sage-600 shrink-0">2.</span><span><strong className="text-navy-700">Un suivi psychologique</strong> — pour travailler les causes profondes, les limites, le rapport au travail.</span></li>
              <li className="flex gap-2"><span className="text-sage-600 shrink-0">3.</span><span><strong className="text-navy-700">Une approche corporelle</strong> — parce que le système nerveux autonome ne se régule pas uniquement par la pensée. C'est ici qu'intervient le <Link to="/burnout" className="text-sage-700 underline hover:text-sage-800">breathwork</Link>, qui agit directement sur la respiration et le nerf vague pour sortir de l'état d'alerte.</span></li>
            </ul>
            <p>
              Ces trois approches ne s'excluent pas — elles se complètent. Le breathwork n'est pas un
              substitut au suivi médical en cas de burn-out sévère, mais un outil complémentaire pour
              redonner au corps un accès réel au repos.
            </p>
          </div>

          <div className="mt-12 bg-sage-50 border border-sage-100 rounded-2xl p-8 text-center">
            <p className="font-montserrat font-bold text-navy-700 text-xl mb-2">
              Vous vous reconnaissez dans ces signes ?
            </p>
            <p className="text-navy-400 mb-6">
              Découvrez comment le breathwork agit sur le burn-out, ou réservez directement une séance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={handleCalendly} className="btn-primary text-lg">
                Réserver une séance — 60 €
              </button>
              <Link to="/burnout" className="btn-outline text-lg">
                Breathwork contre le burnout →
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-sage-100 flex flex-col sm:flex-row gap-4 justify-between">
            <Link to="/blog/comment-le-breathwork-aide-contre-le-burnout" className="text-sage-600 hover:text-sage-700 font-medium transition-colors">
              ← Comment le breathwork aide contre le burnout
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
