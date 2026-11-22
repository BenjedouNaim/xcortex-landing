// AC-6: gzip sum of every <script src> in the prerendered `/` HTML must be <= 130 KB.
// <script noModule> files are listed but not counted: modern browsers never download them.
import { readFileSync, existsSync } from 'node:fs'
import { gzipSync } from 'node:zlib'

const LIMIT = 133_120
const html = readFileSync('.next/server/app/index.html', 'utf8')
const tags = [...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"[^>]*>/gi)].map((m) => ({
  src: m[1],
  noModule: /\bnomodule\b/i.test(m[0]),
}))

let total = 0
let skipped = 0
const rows = []
for (const { src, noModule } of new Map(tags.map((t) => [t.src, t])).values()) {
  const path = src.split('?')[0]
  const file = path.startsWith('/_next/static/')
    ? '.next/static/' + decodeURIComponent(path.slice('/_next/static/'.length))
    : path.startsWith('/scripts/')
      ? 'public' + path
      : null
  if (!file || !existsSync(file)) {
    rows.push(['UNRESOLVED', src])
    continue
  }
  const gz = gzipSync(readFileSync(file), { level: 9 }).length
  if (noModule) skipped += gz
  else total += gz
  rows.push([String(gz) + (noModule ? ' (noModule, not counted)' : ''), src])
}
for (const [gz, src] of rows) console.log(gz.padStart(8), src)
if (skipped) console.log(`noModule (not counted): ${skipped} bytes`)
console.log(`total ${total} bytes (${(total / 1024).toFixed(1)} KB), limit ${LIMIT}`)
process.exit(total > LIMIT || rows.some((r) => r[0] === 'UNRESOLVED') ? 1 : 0)
