import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import SEOMeta from '../utils/SEOMeta'
import { articles } from '../data/articles'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog Belgium Breathwork — Respiration, Bien-être & Santé',
  description: 'Articles pratiques sur le breathwork, la gestion du stress, le sommeil et le burnout. Ressources gratuites par Belgium Breathwork à Bruxelles.',
  url: 'https://belgiumbreathwork.be/blog',
  publisher: { '@type': 'Organization', name: 'Belgium Breathwork', url: 'https://belgiumbreathwork.be' },
}

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }

export default function Blog() {
  return (
    <Layout>
      <SEOMeta
        title="Blog Belgium Breathwork — Respiration, Burnout & Sommeil | Bruxelles"
        description="Articles pratiques sur le breathwork, la gestion du stress, l'insomnie et le burnout. Techniques de respiration, science et conseils par Belgium Breathwork à Bruxelles."
        canonical="https://belgiumbreathwork.be/blog"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative bg-hero-bg pt-32 pb-16 px-4 md:px-8 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="breathe-orb absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-sage-200/40 to-sage-100/20 blur-3xl" />
        </div>
        <div className="container-max max-w-4xl relative z-10">
          <motion.div initial="hidden" animate="show"
                      variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="mb-4">
              <span className="section-tag text-sage-700 border-sage-200 bg-sage-50">
                Ressources gratuites
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="heading-xl text-navy-700 mb-4">
              Blog — Breathwork &{' '}
              <span className="text-gradient">Bien-être</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="body-lg text-navy-500/80 max-w-2xl">
              Articles pratiques sur la respiration, la gestion du stress, le sommeil et le burnout.
              Science, techniques et témoignages pour comprendre et pratiquer le breathwork.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="bg-white section-pad">
        <div className="container-max max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
            {articles.map((article, i) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
              >
                <Link to={`/blog/${article.slug}`}
                      className="flex flex-col md:flex-row gap-6 bg-white border border-sage-100 rounded-2xl overflow-hidden shadow-card hover:border-sage-300 hover:shadow-soft transition-all duration-300 group">
                  <div className="md:w-64 shrink-0">
                    <img src={article.image} alt={article.title}
                         className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="section-tag text-sage-700 border-sage-200 bg-sage-50 text-xs">
                        {article.category}
                      </span>
                      <span className="text-navy-400/60 text-xs">{article.readTime} de lecture</span>
                      <span className="text-navy-400/40 text-xs">·</span>
                      <span className="text-navy-400/60 text-xs">
                        {new Date(article.date).toLocaleDateString('fr-BE', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    </div>
                    <h2 className="font-montserrat font-bold text-navy-700 text-xl mb-3 group-hover:text-sage-700 transition-colors leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-navy-400 leading-relaxed text-sm mb-4">{article.description}</p>
                    <span className="text-sage-600 font-semibold text-sm">Lire l'article →</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Thematic links */}
          <div className="mt-16 pt-12 border-t border-sage-100">
            <h2 className="heading-md text-navy-700 mb-8">Explorer par problématique</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { to: '/burnout', label: 'Burnout professionnel', desc: 'Fatigue chronique, épuisement, perte de sens' },
                { to: '/sommeil', label: 'Sommeil & Insomnie', desc: 'Difficultés à s\'endormir, réveils nocturnes' },
                { to: '/anxiete', label: 'Anxiété & Stress', desc: 'Ruminations, tensions, attaques de panique' },
              ].map((item) => (
                <Link key={item.to} to={item.to}
                      className="block bg-sage-50 border border-sage-100 rounded-xl p-5 hover:border-sage-300 hover:shadow-soft transition-all duration-300 group">
                  <h3 className="font-montserrat font-semibold text-navy-700 mb-1 group-hover:text-sage-700 transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-navy-400 text-xs leading-relaxed">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
