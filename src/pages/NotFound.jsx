import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import SEOMeta from '../utils/SEOMeta'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Page introuvable (404) | Belgium Breathwork',
  url: 'https://belgiumbreathwork.be/404',
}

export default function NotFound() {
  return (
    <Layout>
      <SEOMeta
        title="Page introuvable (404) | Belgium Breathwork"
        description="Cette page n'existe pas ou a été déplacée. Retour à l'accueil de Belgium Breathwork."
        canonical="https://belgiumbreathwork.be/404"
        schema={schema}
      />

      <section className="min-h-[70vh] flex flex-col items-center justify-center bg-hero-bg px-4 text-center pt-28 pb-16">
        <p className="section-tag text-sage-700 border-sage-200 bg-sage-50 mb-6">Erreur 404</p>
        <h1 className="font-montserrat font-800 text-3xl md:text-4xl text-navy-700 mb-4">
          Cette page a pris une grande respiration… et a disparu
        </h1>
        <p className="text-navy-500/80 max-w-md mb-8">
          Le lien est peut-être erroné ou la page a été déplacée. Voici par où continuer :
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/" className="btn-primary px-6 py-3">Accueil</Link>
          <Link
            to="/blog"
            className="px-6 py-3 rounded-full border border-sage-300 text-sage-700 font-medium hover:bg-sage-50 transition-colors"
          >
            Le blog
          </Link>
          <Link
            to="/breathwork-bruxelles"
            className="px-6 py-3 rounded-full border border-sage-300 text-sage-700 font-medium hover:bg-sage-50 transition-colors"
          >
            Breathwork à Bruxelles
          </Link>
        </div>
      </section>
    </Layout>
  )
}
