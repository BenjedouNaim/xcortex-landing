import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(fileURLToPath(new URL('../legacy', import.meta.url)))
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
}

createServer(async (req, res) => {
  try {
    const { pathname } = new URL(req.url ?? '/', 'http://localhost')
    const file = resolve(join(root, decodeURIComponent(pathname)))
    if (file !== root && !file.startsWith(root + sep)) {
      res.writeHead(403).end('Forbidden')
      return
    }
    const path = pathname.endsWith('/') ? join(file, 'index.html') : file
    const body = await readFile(path)
    res
      .writeHead(200, {
        'Content-Type': types[extname(path)] ?? 'application/octet-stream',
      })
      .end(body)
  } catch {
    res.writeHead(404).end('Not found')
  }
}).listen(4100, '127.0.0.1', () => console.log('legacy on http://localhost:4100'))
