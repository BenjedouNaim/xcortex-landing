import { expect, test, type Page } from '@playwright/test'

const viewports = [
  { w: 375, h: 812 },
  { w: 768, h: 1024 },
  { w: 1280, h: 800 },
  { w: 1920, h: 1080 },
]
const sections = [
  'hero',
  'capabilities',
  'systems',
  'workflow',
  'solutions',
  'architecture',
  'approach',
  'final-cta',
]

async function settle(page: Page) {
  await page.goto('/')
  await page.waitForLoadState('networkidle')
  // Walk the page so observers (counters, principles cascade) fire and lazy images load.
  await page.evaluate(async () => {
    const step = window.innerHeight / 2
    for (let y = 0; y <= document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y)
      // two frames so IntersectionObservers see this position, then a beat for their callbacks
      await new Promise((r) =>
        requestAnimationFrame(() => requestAnimationFrame(r)),
      )
      await new Promise((r) => setTimeout(r, 100))
    }
  })
  await page.waitForTimeout(1500) // counters roll up over 1.2s, the principles cascade is 110ms apart
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForFunction(() => document.fonts.status === 'loaded')
  await page.waitForFunction(() =>
    [...document.images].every((i) => i.complete && i.naturalWidth > 0),
  )
  // Tailwind (CDN on legacy) has applied once the body is no longer default black.
  await page.waitForFunction(
    () => getComputedStyle(document.body).color !== 'rgb(0, 0, 0)',
  )
  await page.waitForFunction(() =>
    [...document.querySelectorAll('.principle-item')].every(
      (el) => getComputedStyle(el).opacity === '1',
    ),
  )
  await page.waitForFunction(() =>
    [...document.querySelectorAll<HTMLElement>('[data-counter]')].every(
      (el) =>
        el.textContent ===
        Number(el.dataset.counterTarget).toFixed(
          Number(el.dataset.counterDecimals ?? 0),
        ) +
          (el.dataset.counterSuffix ?? ''),
    ),
  )
}

for (const { w, h } of viewports) {
  test.describe(`w${w}`, () => {
    test.use({ viewport: { width: w, height: h } })

    test('header', async ({ page }) => {
      await settle(page)
      // The Team link is removed on purpose. Pin the links container to legacy's natural width so the rest of
      // the header lays out the same on both sites, and mask it so its contents are not compared.
      await page.addStyleTag({
        content:
          'header.fixed div:has(> a[data-nav-link]) { flex: none; width: 322.375px }',
      })
      await expect(page.locator('header.fixed')).toHaveScreenshot(
        `w${w}-header.png`,
        {
          mask: [page.locator('header.fixed div:has(> a[data-nav-link])')],
        },
      )
    })

    sections.forEach((name, i) => {
      test(`section ${i + 1} ${name}`, async ({ page }) => {
        await settle(page)
        await page.addStyleTag({
          content:
            'header.fixed, #xcx-progress-bar { display: none !important }',
        })
        await expect(page.locator('main > section').nth(i)).toHaveScreenshot(
          `w${w}-section-${i + 1}-${name}.png`,
        )
      })
    })

    test('footer', async ({ page }) => {
      await settle(page)
      await page.addStyleTag({
        content: 'header.fixed, #xcx-progress-bar { display: none !important }',
      })
      // The Team link is removed on purpose (AC-2). Put a copy of a sibling link back in legacy's slot (third of
      // five), so the 148px column, and so the stacked footer at 375, lays out as in legacy and the rest of the
      // footer is compared against the unmasked baseline.
      await page.evaluate(() => {
        if (document.querySelector('footer a[href="#team"]')) return // legacy has it
        const solutions = document.querySelector('footer a[href="#solutions"]')!
        const team = solutions.cloneNode(true) as HTMLAnchorElement
        team.href = '#team'
        team.textContent = 'Team'
        solutions.after(team)
      })
      await expect(page.locator('footer')).toHaveScreenshot(`w${w}-footer.png`)
    })
  })
}
