/**
 * Mini serveur local pour tester les fonctions Vercel sans déployer.
 * Usage : node api/dev-server.js
 */
import { createServer } from 'http'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Charge .env.local manuellement
const envPath = join(__dirname, '..', '.env.local')
try {
  const lines = readFileSync(envPath, 'utf8').split('\n')
  for (const line of lines) {
    const [key, ...val] = line.split('=')
    if (key && val.length) process.env[key.trim()] = val.join('=').trim()
  }
} catch {}

const { default: handler } = await import('./prochaines-seances.js')

const server = createServer(async (req, res) => {
  if (req.url === '/api/prochaines-seances') {
    await handler(req, res)
  } else {
    res.writeHead(404)
    res.end('Not found')
  }
})

server.listen(3001, () => {
  console.log('✅ API dev server running on http://localhost:3001')
})
