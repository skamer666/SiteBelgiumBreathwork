// Post-build static SEO generation.
//
// Vite ships a single dist/index.html whose <head> describes the HOMEPAGE only.
// Every deep route (/sommeil, /anxiete, ...) was served that same <head>, so
// Google saw a homepage canonical on every URL and refused to index the inner
// pages ("canonical alternate", "detected – currently not indexed" in GSC).
//
// This script writes one real HTML file per route with its own <title>,
// description, canonical, Open Graph / Twitter tags and JSON-LD, then rebuilds
// sitemap.xml and a proper 404.html. React still hydrates the same SPA bundle
// on top — only the crawlable <head> changes.
//
// Run automatically by `npm run build`.

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ROUTES, SITE_URL, DEFAULT_OG_IMAGE } from '../src/seo/seo.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = resolve(__dirname, '../dist')
const BUILD_DATE = new Date().toISOString().slice(0, 10)

const escAttr = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const escText = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Replace the first tag matching `re` with `replacement`, or insert before </head>. */
function upsert(html, re, replacement) {
  return re.test(html)
    ? html.replace(re, replacement)
    : html.replace('</head>', `    ${replacement}\n  </head>`)
}

function renderHead(html, route) {
  const url = route.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${route.path}`
  const image = route.image || DEFAULT_OG_IMAGE
  const title = escText(route.title)
  const titleAttr = escAttr(route.title)
  const desc = escAttr(route.description)

  let out = html
  out = upsert(out, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
  out = upsert(
    out,
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta name="description" content="${desc}" />`,
  )
  out = upsert(
    out,
    /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`,
  )
  out = upsert(
    out,
    /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta property="og:title" content="${titleAttr}" />`,
  )
  out = upsert(
    out,
    /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta property="og:description" content="${desc}" />`,
  )
  out = upsert(
    out,
    /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta property="og:url" content="${url}" />`,
  )
  out = upsert(
    out,
    /<meta\s+property="og:image"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta property="og:image" content="${escAttr(image)}" />`,
  )
  out = upsert(
    out,
    /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta name="twitter:title" content="${titleAttr}" />`,
  )
  out = upsert(
    out,
    /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta name="twitter:description" content="${desc}" />`,
  )
  out = upsert(
    out,
    /<meta\s+name="twitter:image"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta name="twitter:image" content="${escAttr(image)}" />`,
  )

  if (route.noindex) {
    out = upsert(
      out,
      /<meta\s+name="robots"\s+content="[\s\S]*?"\s*\/?>/,
      `<meta name="robots" content="noindex, follow" />`,
    )
  }

  if (route.schema) {
    const json = JSON.stringify(route.schema)
    out = out.replace(
      '</head>',
      `    <script type="application/ld+json" id="page-schema">${json}</script>\n  </head>`,
    )
  }
  return out
}

function renderSitemap() {
  const urls = ROUTES.filter((r) => r.prerender !== false && !r.noindex)
    .map((r) => {
      const loc = r.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${r.path}`
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${BUILD_DATE}</lastmod>`,
        `    <changefreq>${r.changefreq}</changefreq>`,
        `    <priority>${r.priority.toFixed(1)}</priority>`,
        '  </url>',
      ].join('\n')
    })
    .join('\n\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n${urls}\n\n</urlset>\n`
}

async function main() {
  const base = await readFile(join(DIST, 'index.html'), 'utf8')
  let count = 0

  for (const route of ROUTES) {
    if (route.prerender === false) continue
    const html = renderHead(base, route)
    const outFile =
      route.path === '/' ? join(DIST, 'index.html') : join(DIST, route.path, 'index.html')
    await mkdir(dirname(outFile), { recursive: true })
    await writeFile(outFile, html)
    count++
  }

  // Real 404 page (Vercel serves dist/404.html with a 404 status for unknown paths).
  const notFound = renderHead(base, {
    path: '/404',
    title: 'Page introuvable (404) | Belgium Breathwork',
    description: "Cette page n'existe pas ou a été déplacée. Retour à l'accueil de Belgium Breathwork.",
    noindex: true,
    schema: null,
  })
  await writeFile(join(DIST, '404.html'), notFound)

  await writeFile(join(DIST, 'sitemap.xml'), renderSitemap())

  console.log(`[prerender] ${count} route(s) + 404.html + sitemap.xml (lastmod ${BUILD_DATE})`)
}

main().catch((err) => {
  console.error('[prerender] failed:', err)
  process.exit(1)
})
