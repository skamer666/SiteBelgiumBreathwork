import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEOMeta from '../../utils/SEOMeta'
import { CALENDLY_URL } from '../../constants'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Comment le Breathwork aide contre le Burnout — Guide complet',
  description: 'Le burnout n\'est pas une simple fatigue. Découvrez comment le breathwork agit sur le système nerveux pour sortir de l\'épuisement professionnel et retrouver l\'énergie.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  author: { '@type': 'Person', name: 'Daphnée', url: 'https://belgiumbreathwork.be/#about' },
  publisher: { '@type': 'Organization', name: 'Belgium Breathwork', url: 'https://belgiumbreathwork.be' },
  image: 'https://belgiumbreathwork.be/images/seance-01.jpg',
  url: 'https://belgiumbreathwork.be/blog/comment-le-breathwork-aide-contre-le-burnout',
  mainEntityOfPage: 'https://belgiumbreathwork.be/blog/comment-le-breathwork-aide-contre-le-burnout',
}

export default function BreathworkBurnout() {
  const handleCalendly = (e) => {
    e.preventDefault()
    if (window.Calendly) window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    else window.open(CALENDLY_URL, '_blank')
  }

  return (
    <Layout>
      <SEOMeta
        title="Comment le Breathwork aide contre le Burnout — Guide complet | Belgium Breathwork"
        description="Le burnout n'est pas une simple fatigue : c'est un dérèglement physiologique. Découvrez comment le breathwork agit sur le système nerveux pour sortir de l'épuisement professionnel."
        canonical="https://belgiumbreathwork.be/blog/comment-le-breathwork-aide-contre-le-burnout"
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
              <span className="section-tag text-sage-700 border-sage-200 bg-white text-xs">Burnout & Stress</span>
              <span className="text-navy-300">·</span>
              <span className="text-navy-400/60 text-sm">7 min de lecture</span>
            </div>
            <h1 className="heading-xl text-navy-700 mb-6">
              Comment le Breathwork aide contre le Burnout
            </h1>
            <p className="body-lg text-navy-500/80 max-w-2xl">
              Le burnout n'est pas une simple fatigue qui passe avec des vacances. C'est une rupture
              physiologique profonde — et comprendre ce mécanisme change tout à la façon dont on
              peut en sortir.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img src="/images/daphnee.png" alt="Daphnée, praticienne Hypnotic Breathwork"
                   className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-navy-700 text-sm">Daphnée</p>
                <p className="text-navy-400 text-xs">Praticienne Hypnotic Breathwork · Certifiée IPHM · 1 mai 2026</p>
              </div>
            </div>
          </div>
        </header>

        {/* Image */}
        <div className="container-max max-w-3xl px-4 md:px-8 -mt-8">
          <img src="/images/seance-01.jpg" alt="Séance de breathwork contre le burnout à Waterloo"
               className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lift" />
        </div>

        {/* Content */}
        <div className="container-max max-w-3xl px-4 md:px-8 py-12">
          <div className="prose-article space-y-6 text-navy-500/85 text-lg leading-relaxed">

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">Le burnout : bien plus qu'une grande fatigue</h2>
            <p>
              On entend souvent que le burnout se soigne avec du repos. C'est en partie vrai — mais
              incomplet. Des milliers de personnes reviennent de congé aussi épuisées qu'avant.
              Pourquoi ? Parce que le burnout n'est pas qu'un problème de charge de travail.
              C'est un <strong className="text-navy-700">dérèglement du système nerveux autonome</strong>.
            </p>
            <p>
              Le système nerveux autonome régule tout ce qui se passe "automatiquement" dans votre
              corps : fréquence cardiaque, digestion, réponse au stress, immunité. En cas de stress
              chronique, l'axe hypothalamo-hypophyso-surrénalien (axe HPA) est hyperactivé :
              le cortisol reste constamment élevé, le corps reste en état d'alerte, et les
              mécanismes de récupération sont court-circuités.
            </p>
            <p>
              Le repos physique ne résout pas ce dérèglement. Le système nerveux continue de fonctionner
              en mode survie même pendant les vacances — c'est pourquoi vous rentrez encore fatigué(e).
            </p>

            <div className="bg-sage-50 border border-sage-100 rounded-2xl p-6 my-8">
              <p className="font-montserrat font-semibold text-navy-700 mb-2">Les signaux qui ne trompent pas</p>
              <ul className="space-y-2 text-navy-500/80">
                {[
                  'Épuisement qui ne disparaît pas après le repos',
                  'Irritabilité ou hypersensibilité émotionnelle inhabituelle',
                  'Perte de sens ou de motivation dans le travail',
                  'Troubles du sommeil malgré la fatigue',
                  'Difficultés de concentration ou de mémoire',
                  'Sensation d\'être "vide" ou déconnecté(e) de vous-même',
                ].map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="text-sage-600 shrink-0">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">
              Pourquoi la psychologie classique ne suffit parfois pas
            </h2>
            <p>
              La thérapie cognitive peut vous aider à identifier les pensées dysfonctionnelles,
              à remettre en question les croyances limitantes, à poser des limites. C'est précieux.
              Mais le système nerveux autonome ne répond pas aux arguments rationnels.
            </p>
            <p>
              Le neuroscientifique Peter Levine l'a bien décrit : le traumatisme et l'épuisement
              chronique sont "stockés" dans le corps sous forme de tensions musculaires, de réponses
              physiologiques automatiques, de patterns de respiration. La tête peut comprendre
              pourquoi elle est épuisée sans que le corps en soit informé.
            </p>
            <p>
              C'est ce que les thérapeutes appellent l'approche <strong className="text-navy-700">bottom-up</strong> vs{' '}
              <strong className="text-navy-700">top-down</strong> : la psychologie classique travaille du
              haut vers le bas (pensées → corps) ; le breathwork travaille du bas vers le haut
              (corps → système nerveux → émotions → cognition).
            </p>

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">
              Ce que le breathwork fait concrètement au corps en burnout
            </h2>
            <p>
              L'<strong className="text-navy-700">Hypnotic Breathwork</strong> combine deux mécanismes
              complémentaires.
            </p>
            <p>
              D'abord, les cycles de <strong className="text-navy-700">respiration consciente</strong>.
              En alternant des phases d'hyperventilation contrôlée et de rétention, le breathwork
              modifie temporairement l'équilibre CO₂/O₂ dans le sang. Cela crée un état de conscience
              modifié — similaire à une légère transe — qui permet d'accéder à des émotions et des
              tensions corporelles normalement inaccessibles.
            </p>
            <p>
              Ensuite, l'<strong className="text-navy-700">induction hypnotique légère</strong> facilite
              un lâcher-prise profond. Le cerveau passe en ondes alpha/thêta, l'état de conscience
              associé à la créativité, à la guérison et à l'intégration émotionnelle.
            </p>
            <p>
              Ensemble, ces deux techniques activent le <strong className="text-navy-700">nerf vague</strong> —
              le grand régulateur du système nerveux parasympathique. Le résultat ? Une réduction
              mesurable du cortisol, un ralentissement du rythme cardiaque, et une sensation de
              relâchement profond que beaucoup décrivent comme "le premier vrai repos depuis des mois".
            </p>

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">Ce que dit la recherche</h2>
            <p>
              Une étude publiée dans le <em>Journal of Alternative and Complementary Medicine</em> a
              démontré que quatre semaines de pratique régulière de breathwork réduisaient
              significativement les niveaux de cortisol salivaire et les scores autodéclarés de
              burnout dans un groupe de professionnels de santé.
            </p>
            <p>
              L'Université de Queensland a également documenté l'effet de la respiration consciente
              sur la variabilité de la fréquence cardiaque (VFC) — un marqueur clé de la résilience
              du système nerveux. Plus la VFC est élevée, plus le système nerveux est flexible
              et capable de s'adapter au stress.
            </p>

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">
              À quoi ressemble une séance Belgium Breathwork ?
            </h2>
            <p>
              La séance dure environ 2 heures. Elle commence par une introduction de Daphnée
              sur les mécanismes du breathwork et sur ce à quoi s'attendre. Chaque participante est
              allongée sur un tapis, avec une couverture et un masque pour les yeux si elle le souhaite.
            </p>
            <p>
              La pratique elle-même dure environ 60 minutes, accompagnée d'une playlist soigneusement
              sélectionnée. Certaines personnes pleurent. D'autres rient. Certaines voient des couleurs
              ou des images. D'autres ressentent simplement une profonde détente. Il n'y a pas de
              "bonne" expérience — le corps fait ce dont il a besoin.
            </p>
            <p>
              Le reste du temps est consacré à l'intégration : un temps de silence, puis un partage
              en groupe (non obligatoire). La plupart des participantes repartent différentes — plus
              légères, plus présentes, souvent avec cette sensation rare d'avoir vraiment lâché quelque chose.
            </p>

            <div className="bg-navy-50 border border-navy-100 rounded-2xl p-6 my-8">
              <p className="font-montserrat font-semibold text-navy-700 mb-2">Témoignage</p>
              <p className="text-navy-500/80 italic leading-relaxed">
                "J'étais en burnout depuis 8 mois, avec suivi psychologique. La thérapie m'aidait à
                comprendre — mais je n'arrivais pas à me sentir mieux dans mon corps. Après ma
                première séance de breathwork, j'ai dormi 11 heures d'affilée. Quelque chose s'était
                dénoué que les mots n'avaient pas réussi à atteindre."
              </p>
              <p className="mt-3 text-sage-600 font-medium text-sm">— Sarah, 34 ans, Bruxelles</p>
            </div>

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">Pour commencer</h2>
            <p>
              Si vous vous reconnaissez dans cet article, la première étape est simple : essayer
              une séance. Belgium Breathwork propose des séances de groupe à Waterloo, à 20 minutes
              de Bruxelles, à <strong className="text-navy-700">60 €</strong> la séance.
              Réservation gratuite en ligne, paiement sur place.
            </p>
            <p>
              Le breathwork ne remplace pas un suivi médical en cas de burnout sévère — mais il
              peut en être un complément puissant. Et pour beaucoup de personnes, c'est ce qui
              fait la différence entre comprendre leur situation et commencer vraiment à aller mieux.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-sage-50 border border-sage-100 rounded-2xl p-8 text-center">
            <p className="font-montserrat font-bold text-navy-700 text-xl mb-2">
              Prêt(e) à essayer ?
            </p>
            <p className="text-navy-400 mb-6">Séance de groupe · 60 € · Waterloo · 20 min de Bruxelles</p>
            <button onClick={handleCalendly} className="btn-primary text-lg">
              Réserver ma place — gratuit
            </button>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-sage-100 flex flex-col sm:flex-row gap-4 justify-between">
            <Link to="/burnout" className="text-sage-600 hover:text-sage-700 font-medium transition-colors">
              ← Page Burnout
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
