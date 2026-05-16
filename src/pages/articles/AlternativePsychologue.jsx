import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEOMeta from '../../utils/SEOMeta'
import { CALENDLY_URL } from '../../constants'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Breathwork ou Psychologue à Bruxelles : Lequel Choisir ?',
  description: 'Psychologue ou breathwork : deux approches complémentaires mais différentes. Comprendre laquelle vous correspond — et pourquoi certaines personnes ont besoin des deux.',
  datePublished: '2026-05-15',
  dateModified: '2026-05-15',
  author: { '@type': 'Person', name: 'Daphnée', url: 'https://belgiumbreathwork.be/#about' },
  publisher: { '@type': 'Organization', name: 'Belgium Breathwork', url: 'https://belgiumbreathwork.be' },
  image: 'https://belgiumbreathwork.be/images/seance-03.png',
  url: 'https://belgiumbreathwork.be/blog/breathwork-ou-psychologue-bruxelles',
}

export default function AlternativePsychologue() {
  const handleCalendly = (e) => {
    e.preventDefault()
    if (window.Calendly) window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    else window.open(CALENDLY_URL, '_blank')
  }

  return (
    <Layout>
      <SEOMeta
        title="Breathwork ou Psychologue à Bruxelles : Lequel Choisir ? | Belgium Breathwork"
        description="Quelle différence entre breathwork et psychologue ? Les deux approches ne répondent pas aux mêmes besoins. Guide complet pour choisir — ou combiner — selon votre situation."
        canonical="https://belgiumbreathwork.be/blog/breathwork-ou-psychologue-bruxelles"
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
              <span className="section-tag text-sage-700 border-sage-200 bg-white text-xs">Guide</span>
              <span className="text-navy-300">·</span>
              <span className="text-navy-400/60 text-sm">6 min de lecture</span>
            </div>
            <h1 className="heading-xl text-navy-700 mb-6">
              Breathwork ou Psychologue à Bruxelles :{' '}
              <span className="text-gradient">Lequel Choisir ?</span>
            </h1>
            <p className="body-lg text-navy-500/80 max-w-2xl">
              Ce n'est pas l'un ou l'autre. Mais comprendre la différence fondamentale entre ces
              deux approches peut changer votre façon d'aller mieux.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img src="/images/daphnee.png" alt="Daphnée" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-navy-700 text-sm">Daphnée</p>
                <p className="text-navy-400 text-xs">Praticienne Hypnotic Breathwork · Certifiée IPHM · 15 mai 2026</p>
              </div>
            </div>
          </div>
        </header>

        <div className="container-max max-w-3xl px-4 md:px-8 -mt-8">
          <img src="/images/seance-03.png" alt="Breathwork ou psychologue à Bruxelles"
               className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lift" />
        </div>

        {/* Content */}
        <div className="container-max max-w-3xl px-4 md:px-8 py-12">
          <div className="space-y-6 text-navy-500/85 text-lg leading-relaxed">

            <p>
              C'est une question que je reçois régulièrement. "J'ai déjà vu un psychologue pendant
              deux ans. Est-ce que le breathwork peut vraiment m'apporter quelque chose de
              différent ?" La réponse courte : oui. Mais pas parce que l'une est "meilleure"
              que l'autre — parce qu'elles agissent sur des niveaux différents.
            </p>

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">Ce que fait le psychologue</h2>
            <p>
              La psychologie classique — et particulièrement les thérapies cognitivo-comportementales
              (TCC) — travaille <strong className="text-navy-700">de haut en bas</strong> (top-down).
              Elle part du cerveau préfrontal, la partie "rationnelle" de votre cerveau, pour
              influencer progressivement les émotions et le comportement.
            </p>
            <p>
              Concrètement : vous identifiez les pensées automatiques, vous les questionnez,
              vous développez de nouvelles façons de réagir. Vous comprenez d'où viennent vos
              schémas, vous apprenez à les reconnaître. C'est un travail précieux, intellectuellement
              engageant, qui prend du temps mais construit une compréhension durable de soi.
            </p>

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">Ce que fait le breathwork</h2>
            <p>
              Le breathwork — et particulièrement l'Hypnotic Breathwork — travaille{' '}
              <strong className="text-navy-700">de bas en haut</strong> (bottom-up). Il commence
              par le corps, le système nerveux autonome, les émotions stockées dans les tissus —
              et remonte vers le cerveau.
            </p>
            <p>
              En modifiant la respiration, on modifie directement la chimie du sang, l'état du
              système nerveux, et on crée les conditions pour que des émotions enfouies puissent
              remonter à la surface et être libérées — sans forcément passer par la case "comprendre".
            </p>
            <p>
              C'est ce que le psychiatre Bessel van der Kolk décrit dans son livre référence{' '}
              <em>"Le corps n'oublie rien"</em> : certains traumatismes et certaines souffrances
              sont stockés dans le corps d'une façon que la parole seule ne peut pas atteindre.
            </p>

            <div className="bg-sage-50 border border-sage-100 rounded-2xl p-6 my-8">
              <p className="font-montserrat font-semibold text-navy-700 mb-4">La différence en un mot</p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: 'Psychologie', desc: 'Comprendre → changer les pensées → influencer les émotions et le corps', color: 'bg-navy-50 border-navy-100' },
                  { label: 'Breathwork', desc: 'Agir sur le corps → libérer les émotions → changer spontanément les pensées', color: 'bg-sage-50 border-sage-200' },
                ].map((item) => (
                  <div key={item.label} className={`rounded-xl p-4 border ${item.color}`}>
                    <p className="font-montserrat font-semibold text-navy-700 mb-2">{item.label}</p>
                    <p className="text-navy-500/80 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">
              Pourquoi certaines personnes "plafonnent" en thérapie
            </h2>
            <p>
              J'entends souvent : "Je comprends parfaitement pourquoi je suis comme ça — mais
              ça ne change rien à ce que je ressens." C'est l'une des frustrations les plus
              communes en psychothérapie classique.
            </p>
            <p>
              Ce n'est pas que la thérapie a échoué. C'est que la compréhension intellectuelle
              n'est parfois pas suffisante pour modifier le système nerveux. Le corps a "mémorisé"
              des réponses automatiques — des tensions, des postures, des patterns respiratoires —
              qui continuent d'exister indépendamment de ce que vous "savez" intellectuellement.
            </p>
            <p>
              C'est là que le breathwork peut faire une différence : non pas comme remplacement
              de la thérapie, mais comme <strong className="text-navy-700">complément somatique</strong>{' '}
              qui traite ce que les mots n'atteignent pas.
            </p>

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">
              Pour qui choisir le breathwork en priorité ?
            </h2>
            <ul className="space-y-4">
              {[
                'Vous avez suivi une thérapie et vous avez l\'impression d\'être "bloqué(e)" ou en plateau',
                'Vous portez beaucoup dans le corps : tensions chroniques, fatigue, douleurs inexpliquées',
                'Vous êtes en burnout et cherchez quelque chose qui agit rapidement sur l\'état physique',
                'Vous souffrez d\'insomnie ou d\'anxiété somatique (manifestations physiques de l\'anxiété)',
                'Vous souhaitez commencer un travail sur vous-même sans passer par la parole d\'abord',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-navy-500/80">
                  <span className="text-sage-600 font-bold mt-1 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">
              Quand combiner les deux ?
            </h2>
            <p>
              La combinaison breathwork + psychologie est souvent la plus puissante. Le breathwork
              libère et le travail cognitif ancre. Nombreuses sont les participantes qui ont un suivi
              psychologique en parallèle — et qui rapportent que les deux se nourrissent mutuellement.
              Le breathwork fait remonter à la surface des choses à travailler ensuite en thérapie.
            </p>
            <p>
              L'important est de ne pas vous contenter d'une seule approche si vous sentez que
              quelque chose manque. Le corps et l'esprit ont besoin d'être traités ensemble.
            </p>

            <div className="bg-navy-50 border border-navy-100 rounded-2xl p-6 my-8">
              <p className="font-montserrat font-semibold text-navy-700 mb-2">Note importante</p>
              <p className="text-navy-500/80 leading-relaxed text-base">
                Le breathwork n'est pas une thérapie médicale et ne remplace pas un suivi
                psychologique ou psychiatrique. En cas de trouble de santé mentale sévère,
                de traumatisme complexe ou de crise, consultez un professionnel de santé qualifié.
                Le breathwork peut être pratiqué en complément, sur recommandation de votre médecin.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-sage-50 border border-sage-100 rounded-2xl p-8 text-center">
            <p className="font-montserrat font-bold text-navy-700 text-xl mb-2">
              Découvrir l'Hypnotic Breathwork
            </p>
            <p className="text-navy-400 mb-6">
              Séance de groupe · Waterloo · 20 min de Bruxelles · 60 € sur place
            </p>
            <button onClick={handleCalendly} className="btn-primary text-lg">
              Réserver ma place — gratuit
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-sage-100 flex flex-col sm:flex-row gap-4 justify-between">
            <Link to="/anxiete" className="text-sage-600 hover:text-sage-700 font-medium transition-colors">
              ← Page Anxiété
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
