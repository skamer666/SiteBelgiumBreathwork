// Single source of truth for every indexable route.
//
// Consumed by:
//   - src/App.jsx          → builds the <Route> list
//   - scripts/prerender.mjs → writes per-route static <head> + sitemap.xml
//
// If you add a page, add it here (and its lazy import in App.jsx). Otherwise a
// direct hit / refresh on that URL returns 404 in production.

export const SITE_URL = 'https://belgiumbreathwork.be'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/seance-01.jpg`

const ORG = {
  '@type': 'Organization',
  name: 'Belgium Breathwork',
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` },
}

/**
 * @typedef {Object} RouteSeo
 * @property {string}  path        Route path, no trailing slash (except "/")
 * @property {string}  component   Named export key used by App.jsx
 * @property {string}  title       <title> + og/twitter title
 * @property {string}  description meta description + og/twitter description
 * @property {string} [image]      absolute og:image (defaults to DEFAULT_OG_IMAGE)
 * @property {boolean} [prerender] set false to skip static generation (default true)
 * @property {boolean} [noindex]   emit robots noindex (default false)
 * @property {object|null} [schema] JSON-LD injected as #page-schema (home already
 *                                  ships its own @graph, so it stays null)
 * @property {number}  priority    sitemap <priority>
 * @property {string}  changefreq  sitemap <changefreq>
 */

/** @type {RouteSeo[]} */
export const ROUTES = [
  {
    path: '/',
    component: 'Home',
    title: 'Breathwork à Bruxelles & en Belgique – Belgium Breathwork',
    description:
      "Séances de breathwork à Waterloo, à 20 min de Bruxelles. Daphnée, certifiée IPHM. Apaise stress, anxiété et burnout par la respiration. Réservation gratuite en ligne, 60 € sur place.",
    schema: null,
    priority: 1.0,
    changefreq: 'weekly',
  },
  {
    path: '/breathwork-bruxelles',
    component: 'BreathworkBruxelles',
    title: 'Breathwork à Bruxelles – Séances près de la capitale | Belgium Breathwork',
    description:
      "Vous cherchez du breathwork à Bruxelles ? Les séances ont lieu à Waterloo, à 20 min du centre et accessibles depuis Uccle, Ixelles et Rhode-Saint-Genèse. Réservation gratuite, 60 € sur place.",
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Séance de breathwork',
      name: 'Breathwork à Bruxelles',
      description:
        "Séances d'Hypnotic Breathwork pour les habitants de Bruxelles, organisées à Waterloo (Brabant wallon), à 20 minutes du centre-ville.",
      provider: {
        '@type': 'WellnessCenter',
        name: 'Belgium Breathwork',
        url: SITE_URL,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Avenue Floréal 20',
          addressLocality: 'Waterloo',
          postalCode: '1410',
          addressRegion: 'Brabant wallon',
          addressCountry: 'BE',
        },
      },
      areaServed: [
        { '@type': 'City', name: 'Bruxelles' },
        { '@type': 'City', name: 'Uccle' },
        { '@type': 'City', name: 'Ixelles' },
        { '@type': 'City', name: 'Rhode-Saint-Genèse' },
      ],
      url: `${SITE_URL}/breathwork-bruxelles`,
    },
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/breathwork-waterloo',
    component: 'BreathworkWaterloo',
    title: 'Breathwork à Waterloo – Hypnotic Breathwork avec Daphnée | Belgium Breathwork',
    description:
      "Séances de breathwork à Waterloo, avenue Floréal. Hypnotic Breathwork avec Daphnée, certifiée IPHM : respiration consciente, hypnose et visualisation. Réservation gratuite, 60 € sur place.",
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WellnessCenter',
      name: 'Belgium Breathwork – Waterloo',
      description:
        "Studio de breathwork à Waterloo. Séances de groupe et individuelles d'Hypnotic Breathwork avec Daphnée, certifiée IPHM.",
      url: `${SITE_URL}/breathwork-waterloo`,
      telephone: '+32494204093',
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Avenue Floréal 20',
        addressLocality: 'Waterloo',
        postalCode: '1410',
        addressRegion: 'Brabant wallon',
        addressCountry: 'BE',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 50.7175, longitude: 4.3979 },
      areaServed: [
        { '@type': 'City', name: 'Waterloo' },
        { '@type': 'City', name: "Braine-l'Alleud" },
        { '@type': 'City', name: 'Bruxelles' },
      ],
    },
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/burnout',
    component: 'Burnout',
    title: 'Breathwork contre le Burnout à Bruxelles | Belgium Breathwork',
    description:
      "Épuisement professionnel, fatigue chronique, perte de sens : le breathwork agit directement sur le système nerveux pour sortir du burnout. Séances à Waterloo, 20 min de Bruxelles.",
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Breathwork contre le Burnout à Bruxelles | Belgium Breathwork',
      description:
        'Épuisement professionnel à Bruxelles : comment le breathwork agit sur le système nerveux pour sortir du burnout. Séances à Waterloo, 20 min de Bruxelles.',
      url: `${SITE_URL}/burnout`,
      isPartOf: { '@type': 'WebSite', url: SITE_URL },
    },
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/sommeil',
    component: 'Sommeil',
    title: "Breathwork pour Mieux Dormir — Exercices contre l'Insomnie | Belgium Breathwork",
    description:
      "Insomnie, sommeil agité, difficultés à s'endormir : le breathwork et ses techniques de respiration régulent le système nerveux pour retrouver un sommeil naturel. Séances à Waterloo.",
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: "Breathwork pour Mieux Dormir — Exercices contre l'Insomnie | Belgium Breathwork",
      description:
        "Techniques de respiration pour améliorer le sommeil naturellement. Le breathwork active le nerf vague et régule le système nerveux pour en finir avec l'insomnie.",
      url: `${SITE_URL}/sommeil`,
    },
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/anxiete',
    component: 'Anxiete',
    title: "Breathwork pour l'Anxiété à Bruxelles — Alternative Naturelle | Belgium Breathwork",
    description:
      "Anxiété chronique, attaques de panique, stress professionnel : le breathwork régule le système nerveux et réduit l'anxiété sans médicaments. Séances à Waterloo, Bruxelles.",
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: "Breathwork pour l'Anxiété à Bruxelles | Belgium Breathwork",
      description:
        "Le breathwork régule l'anxiété en agissant directement sur le système nerveux autonome. Alternative naturelle aux médicaments. Séances à Waterloo, 20 min de Bruxelles.",
      url: `${SITE_URL}/anxiete`,
    },
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/blog',
    component: 'Blog',
    title: 'Blog Belgium Breathwork — Respiration, Burnout & Sommeil | Bruxelles',
    description:
      "Articles pratiques sur le breathwork, la gestion du stress, l'insomnie et le burnout. Techniques de respiration, science et conseils par Belgium Breathwork à Bruxelles.",
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Blog Belgium Breathwork — Respiration, Bien-être & Santé',
      description:
        'Articles pratiques sur le breathwork, la gestion du stress, le sommeil et le burnout. Ressources gratuites par Belgium Breathwork à Bruxelles.',
      url: `${SITE_URL}/blog`,
      publisher: { '@type': 'Organization', name: 'Belgium Breathwork', url: SITE_URL },
    },
    priority: 0.8,
    changefreq: 'weekly',
  },
  {
    path: '/blog/comment-le-breathwork-aide-contre-le-burnout',
    component: 'BreathworkBurnout',
    title: 'Comment le Breathwork aide contre le Burnout — Guide complet | Belgium Breathwork',
    description:
      "Le burnout n'est pas une simple fatigue : c'est un dérèglement physiologique. Découvrez comment le breathwork agit sur le système nerveux pour sortir de l'épuisement professionnel.",
    image: `${SITE_URL}/images/seance-01.jpg`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'Comment le Breathwork aide contre le Burnout — Guide complet',
      description:
        "Le burnout n'est pas une simple fatigue. Découvrez comment le breathwork agit sur le système nerveux pour sortir de l'épuisement professionnel et retrouver l'énergie.",
      datePublished: '2026-05-01',
      dateModified: '2026-05-01',
      author: { '@type': 'Person', name: 'Daphnée', url: `${SITE_URL}/#about` },
      publisher: ORG,
      image: `${SITE_URL}/images/seance-01.jpg`,
      mainEntityOfPage: `${SITE_URL}/blog/comment-le-breathwork-aide-contre-le-burnout`,
      url: `${SITE_URL}/blog/comment-le-breathwork-aide-contre-le-burnout`,
    },
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/blog/exercices-de-respiration-pour-mieux-dormir',
    component: 'RespirationSommeil',
    title: '5 Exercices de Respiration pour Mieux Dormir ce Soir | Belgium Breathwork',
    description:
      "Insomnie ? Ces 5 techniques de respiration activent le nerf vague et calment le système nerveux pour s'endormir naturellement. Validées par la science, pratiques dès ce soir.",
    image: `${SITE_URL}/images/seance-02.jpg`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: '5 Exercices de Respiration pour Mieux Dormir ce Soir',
      description:
        "L'insomnie touche un tiers des adultes en Belgique. Ces 5 techniques de respiration, issues du breathwork et de la neuroscience, vous aident à vous endormir naturellement.",
      datePublished: '2026-05-08',
      dateModified: '2026-05-08',
      author: { '@type': 'Person', name: 'Daphnée', url: `${SITE_URL}/#about` },
      publisher: ORG,
      image: `${SITE_URL}/images/seance-02.jpg`,
      mainEntityOfPage: `${SITE_URL}/blog/exercices-de-respiration-pour-mieux-dormir`,
      url: `${SITE_URL}/blog/exercices-de-respiration-pour-mieux-dormir`,
    },
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/blog/burnout-symptomes',
    component: 'BurnoutSymptomes',
    title: 'Burn-out : les Symptômes à Reconnaître (et que faire) | Belgium Breathwork',
    description:
      "Épuisement qui ne passe pas, irritabilité, troubles du sommeil : les 12 signes du burn-out à ne pas ignorer, organisés par catégorie, et les premières étapes concrètes pour en sortir.",
    image: `${SITE_URL}/images/seance-01.jpg`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'Burn-out : les symptômes à reconnaître (et que faire)',
      description:
        "Épuisement qui ne passe pas, irritabilité, troubles du sommeil : voici les 12 signes du burn-out à ne pas ignorer, et les premières étapes pour en sortir.",
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      author: { '@type': 'Person', name: 'Daphnée', url: `${SITE_URL}/#about` },
      publisher: ORG,
      image: `${SITE_URL}/images/seance-01.jpg`,
      mainEntityOfPage: `${SITE_URL}/blog/burnout-symptomes`,
      url: `${SITE_URL}/blog/burnout-symptomes`,
    },
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/blog/coherence-cardiaque',
    component: 'CoherenceCardiaque',
    title: 'Cohérence Cardiaque : le Guide Complet (méthode 365) | Belgium Breathwork',
    description:
      "Qu'est-ce que la cohérence cardiaque, comment la pratiquer avec la méthode 365, et pourquoi le breathwork en est une version amplifiée. Guide pas à pas.",
    image: `${SITE_URL}/images/seance-02.jpg`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'Cohérence Cardiaque : le Guide Complet (méthode 365)',
      description:
        "Qu'est-ce que la cohérence cardiaque, comment la pratiquer avec la méthode 365, et pourquoi le breathwork en est une version amplifiée. Guide pas à pas.",
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      author: { '@type': 'Person', name: 'Daphnée', url: `${SITE_URL}/#about` },
      publisher: ORG,
      image: `${SITE_URL}/images/seance-02.jpg`,
      mainEntityOfPage: `${SITE_URL}/blog/coherence-cardiaque`,
      url: `${SITE_URL}/blog/coherence-cardiaque`,
    },
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/blog/lacher-prise',
    component: 'LacherPrise',
    title: 'Lâcher Prise : Pourquoi Votre Respiration en Est la Clé | Belgium Breathwork',
    description:
      "Lâcher prise n'est pas une décision mentale, c'est un état physiologique. Comprendre pourquoi la volonté seule échoue, et comment la respiration ouvre la porte.",
    image: `${SITE_URL}/images/seance-03.png`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'Lâcher Prise : Pourquoi Votre Respiration en Est la Clé',
      description:
        "Lâcher prise n'est pas une décision mentale, c'est un état physiologique. Comprendre pourquoi la volonté seule échoue face au contrôle, et comment la respiration ouvre la porte.",
      datePublished: '2026-09-04',
      dateModified: '2026-09-04',
      author: { '@type': 'Person', name: 'Daphnée', url: `${SITE_URL}/#about` },
      publisher: ORG,
      image: `${SITE_URL}/images/seance-03.png`,
      mainEntityOfPage: `${SITE_URL}/blog/lacher-prise`,
      url: `${SITE_URL}/blog/lacher-prise`,
    },
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/blog/breathwork-ou-psychologue-bruxelles',
    component: 'AlternativePsychologue',
    title: 'Breathwork ou Psychologue à Bruxelles : Lequel Choisir ? | Belgium Breathwork',
    description:
      "Quelle différence entre breathwork et psychologue ? Les deux approches ne répondent pas aux mêmes besoins. Guide complet pour choisir — ou combiner — selon votre situation.",
    image: `${SITE_URL}/images/seance-03.png`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'Breathwork ou Psychologue à Bruxelles : Lequel Choisir ?',
      description:
        'Psychologue ou breathwork : deux approches complémentaires mais différentes. Comprendre laquelle vous correspond — et pourquoi certaines personnes ont besoin des deux.',
      datePublished: '2026-05-15',
      dateModified: '2026-05-15',
      author: { '@type': 'Person', name: 'Daphnée', url: `${SITE_URL}/#about` },
      publisher: ORG,
      image: `${SITE_URL}/images/seance-03.png`,
      mainEntityOfPage: `${SITE_URL}/blog/breathwork-ou-psychologue-bruxelles`,
      url: `${SITE_URL}/blog/breathwork-ou-psychologue-bruxelles`,
    },
    priority: 0.7,
    changefreq: 'monthly',
  },
]

export const ROUTE_BY_PATH = Object.fromEntries(ROUTES.map((r) => [r.path, r]))
