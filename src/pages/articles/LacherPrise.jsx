import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEOMeta from '../../utils/SEOMeta'
import { CALENDLY_URL } from '../../constants'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Lâcher Prise : Pourquoi Votre Respiration en Est la Clé',
      description: "Lâcher prise n'est pas une décision mentale, c'est un état physiologique. Comprendre pourquoi la volonté seule échoue, et comment la respiration ouvre la porte.",
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      author: { '@type': 'Person', name: 'Daphnée', url: 'https://belgiumbreathwork.be/#about' },
      publisher: { '@type': 'Organization', name: 'Belgium Breathwork', url: 'https://belgiumbreathwork.be' },
      image: 'https://belgiumbreathwork.be/images/seance-03.png',
      url: 'https://belgiumbreathwork.be/blog/lacher-prise',
      mainEntityOfPage: 'https://belgiumbreathwork.be/blog/lacher-prise',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://belgiumbreathwork.be/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://belgiumbreathwork.be/blog' },
        { '@type': 'ListItem', position: 3, name: 'Lâcher Prise : Pourquoi Votre Respiration en Est la Clé', item: 'https://belgiumbreathwork.be/blog/lacher-prise' },
      ],
    },
  ],
}

export default function LacherPrise() {
  const handleCalendly = (e) => {
    e.preventDefault()
    if (window.Calendly) window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    else window.open(CALENDLY_URL, '_blank')
  }

  return (
    <Layout>
      <SEOMeta
        title="Lâcher Prise : Pourquoi Votre Respiration en Est la Clé | Belgium Breathwork"
        description="Lâcher prise n'est pas une décision mentale, c'est un état physiologique. Comprendre pourquoi la volonté seule échoue face au contrôle, et comment la respiration ouvre la porte."
        canonical="https://belgiumbreathwork.be/blog/lacher-prise"
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
              <span className="section-tag text-sage-700 border-sage-200 bg-white text-xs">Bien-être & Émotions</span>
              <span className="text-navy-300">·</span>
              <span className="text-navy-400/60 text-sm">6 min de lecture</span>
            </div>
            <h1 className="heading-xl text-navy-700 mb-6">
              Lâcher Prise : Pourquoi Votre Respiration en Est la Clé
            </h1>
            <p className="body-lg text-navy-500/80 max-w-2xl">
              "Lâche prise" est sans doute le conseil le plus donné — et le plus difficile à suivre.
              La raison : ce n'est pas une décision qu'on prend avec la tête.
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
          <img src="/images/seance-03.png" alt="Lâcher prise par la respiration"
               className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lift"
               width={800} height={533} />
        </div>

        <div className="container-max max-w-3xl px-4 md:px-8 py-12">
          <div className="prose-article space-y-6 text-navy-500/85 text-lg leading-relaxed">

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">Pourquoi "juste lâcher prise" ne marche pas</h2>
            <p>
              On vous a probablement déjà dit de "lâcher prise" face à une situation stressante —
              et vous avez probablement déjà remarqué que se le répéter mentalement ne suffit pas.
              Ce n'est pas un manque de volonté. C'est que le lâcher-prise n'est{' '}
              <strong className="text-navy-700">pas une décision cognitive</strong> — c'est un état
              physiologique : celui d'un système nerveux qui accepte de sortir du mode contrôle.
            </p>
            <p>
              Tant que le corps reste en état d'alerte — même diffus, même à bas bruit — le cerveau
              continue de scanner l'environnement à la recherche de menaces. Dans cet état, le
              "lâcher-prise" mental se heurte à un mur : le corps, lui, n'a pas reçu l'information
              qu'il est en sécurité.
            </p>

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">Le contrôle : une stratégie de survie</h2>
            <p>
              Le besoin de tout contrôler — planifier, anticiper, vérifier — est souvent une stratégie
              d'adaptation apprise, parfois dès l'enfance : contrôler l'environnement pour se sentir
              en sécurité. Cette stratégie a pu être utile à un moment donné. Le problème, c'est
              qu'elle s'active en pilote automatique bien après que le "danger" initial a disparu —
              et elle épuise.
            </p>
            <p>
              Demander à ce système de "lâcher prise" par la seule volonté revient à demander à un
              système d'alarme de s'éteindre lui-même parce qu'on le lui demande gentiment. Ça ne
              fonctionne pas ainsi. Il faut un signal physiologique clair — et c'est là que la
              respiration entre en jeu.
            </p>

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">La respiration : le seul levier volontaire sur le système nerveux</h2>
            <p>
              Parmi toutes les fonctions du système nerveux autonome — rythme cardiaque, digestion,
              tension musculaire — la <strong className="text-navy-700">respiration est la seule que
              vous pouvez consciemment modifier</strong>. En ralentissant et en approfondissant votre
              respiration, vous envoyez un signal direct au cerveau limbique : "il n'y a pas de danger,
              vous pouvez relâcher."
            </p>
            <p>
              C'est un pont concret entre le mental et le corps : vous ne pouvez pas commander
              directement à votre système nerveux de se calmer, mais vous pouvez commander à votre
              respiration — et le système nerveux suit.
            </p>

            <div className="bg-sage-50 border border-sage-100 rounded-2xl p-6 my-8">
              <p className="font-montserrat font-semibold text-navy-700 mb-2">Un exercice simple pour commencer</p>
              <p className="text-navy-500/80 leading-relaxed">
                Inspirez profondément par le nez sur 4 secondes, puis expirez lentement par la bouche
                sur 8 secondes — deux fois plus longtemps qu'à l'inspiration. Répétez 5 à 8 cycles.
                Une expiration prolongée active spécifiquement le système parasympathique et donne au
                corps la permission concrète de relâcher.
              </p>
            </div>

            <h2 className="heading-md text-navy-700 !mt-10 !mb-4">Quand le lâcher-prise devient plus profond : le breathwork</h2>
            <p>
              Les exercices de respiration simples aident à relâcher les tensions du quotidien. Mais
              certaines tensions sont plus anciennes, plus enracinées — des schémas de contrôle
              installés depuis longtemps, parfois liés à des expériences passées stockées dans le
              corps plutôt que dans la mémoire consciente.
            </p>
            <p>
              L'<strong className="text-navy-700">Hypnotic Breathwork</strong> pratiqué chez Belgium
              Breathwork combine des cycles de respiration plus amples à une induction hypnotique
              légère. Cette combinaison permet d'atteindre un état de conscience modifié où le
              contrôle mental s'estompe naturellement — sans effort, sans "essayer" de lâcher prise.
              Beaucoup de participant(e)s décrivent cette expérience comme le premier vrai relâchement
              ressenti depuis longtemps.
            </p>
          </div>

          <div className="mt-12 bg-sage-50 border border-sage-100 rounded-2xl p-8 text-center">
            <p className="font-montserrat font-bold text-navy-700 text-xl mb-2">
              Prêt(e) à lâcher prise pour de vrai ?
            </p>
            <p className="text-navy-400 mb-6">Séance de groupe · 60 € · Waterloo · 20 min de Bruxelles</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={handleCalendly} className="btn-primary text-lg">
                Réserver une séance — 60 €
              </button>
              <Link to="/anxiete" className="btn-outline text-lg">
                Breathwork pour l'anxiété →
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-sage-100 flex flex-col sm:flex-row gap-4 justify-between">
            <Link to="/blog/coherence-cardiaque" className="text-sage-600 hover:text-sage-700 font-medium transition-colors">
              ← Cohérence cardiaque : le guide complet
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
