import { expect, test, type Page } from '@playwright/test'

// Counters from the markup (legacy/main.js 562-583): target, suffix and decimals decide the final text.
const counters = [
  { target: '99.9', suffix: '%', decimals: 1, zero: '0.0%', final: '99.9%' },
  { target: '120', suffix: 'ms', decimals: 0, zero: '0ms', final: '120ms' },
  { target: '100', suffix: '%', decimals: 0, zero: '0%', final: '100%' },
]

const scrollY = (page: Page) => page.evaluate(() => window.scrollY)
const boxTransform = (page: Page) =>
  page.locator('#hero-pill-box').evaluate((e) => e.style.transform)

// motion.js sets window.__motion once React has hydrated and it has taken over the page.
const waitMotion = (page: Page) =>
  page.waitForFunction(() => '__motion' in window, null, { timeout: 15_000 })
// The pill's finished state: progress line full (set for the animated, hash and reduced-motion paths alike).
const waitPillDone = (page: Page) =>
  page.waitForFunction(
    () =>
      document.getElementById('hero-scroll-progress')?.style.transform ===
      'scaleX(1)',
    null,
    { timeout: 15_000 },
  )
const waitLenis = (page: Page) =>
  page.waitForFunction(() => '__lenis' in window, null, { timeout: 15_000 })

test.describe('with motion', () => {
  test('console stays clean on load', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))
    page.on('console', (m) => {
      if (m.type() === 'error') errors.push(m.text())
    })
    await page.goto('/')
    await waitMotion(page)
    await waitLenis(page)
    await page.waitForTimeout(1000) // late hydration warnings
    expect(errors).toEqual([])
  })

  test('1. the pill plays by itself and reaches fully revealed within 2.5s, with no input', async ({
    page,
  }) => {
    await page.goto('/')
    // Sample the box's rendered x offset every frame for 2.5s, from the first frame after navigation.
    const samples = await page.evaluate(
      () =>
        new Promise<number[]>((resolve) => {
          const box = document.getElementById('hero-pill-box')!
          const out: number[] = []
          const t0 = performance.now()
          const frame = () => {
            out.push(new DOMMatrix(getComputedStyle(box).transform).m41)
            if (performance.now() - t0 < 2500) requestAnimationFrame(frame)
            else resolve(out)
          }
          frame()
        }),
    )
    const first = samples[0]
    expect(first).toBeLessThan(-10) // starts hidden to the left
    expect(samples.at(-1)).toBe(0) // ends fully revealed
    // It moved through in-between positions (a tween, not a jump) and never went backwards.
    expect(samples.some((x) => x > first + 5 && x < -5)).toBe(true)
    for (let i = 1; i < samples.length; i++)
      expect(samples[i]).toBeGreaterThanOrEqual(samples[i - 1] - 0.01)
    expect(await boxTransform(page)).toBe('translateX(0%)')
    expect(
      await page
        .locator('#hero-scroll-progress')
        .evaluate((e) => e.style.transform),
    ).toBe('scaleX(1)')
    await expect(page.locator('#hero-scroll-hint')).toBeHidden()
  })

  test('2. scrolling is never blocked: a 50px wheel at t=0 scrolls', async ({
    page,
  }) => {
    await page.goto('/')
    await page.mouse.wheel(0, 50)
    await expect.poll(() => scrollY(page)).toBeGreaterThan(0)
    expect(
      await page.evaluate(() => document.documentElement.style.overflow),
    ).toBe('')
    // and again once the pill has finished
    await waitPillDone(page)
    const y0 = await scrollY(page)
    await page.mouse.wheel(0, 300)
    await expect.poll(() => scrollY(page)).toBeGreaterThan(y0)
    // scroll progress hairline follows the scroll
    await expect
      .poll(() =>
        page
          .locator('#xcx-progress-bar')
          .evaluate((e) => new DOMMatrix(getComputedStyle(e).transform).a),
      )
      .toBeGreaterThan(0)
  })

  test('4. a nav link lands 120px below the top', async ({ page }) => {
    await page.goto('/')
    await waitMotion(page)
    await waitLenis(page)
    await page.locator('nav a[data-nav-section="systems"]').click()
    // 0.8s smooth scroll plus Lenis settling
    await expect
      .poll(
        () =>
          page.evaluate(() => {
            const top = document
              .getElementById('systems')!
              .getBoundingClientRect().top
            return Math.abs(top - 120) <= 10
          }),
        { timeout: 3000 },
      )
      .toBe(true)
  })

  test('5. loading /#workflow shows the pill finished at once', async ({
    page,
  }) => {
    await page.goto('/#workflow')
    await waitPillDone(page)
    expect(await boxTransform(page)).toBe('translateX(0%)')
    // no tween: the transition is cleared, so the box never sat mid-way
    expect(
      await page
        .locator('#hero-pill-box')
        .evaluate((e) => getComputedStyle(e).transitionDuration),
    ).toBe('0s')
    const y0 = await scrollY(page)
    expect(y0).toBeGreaterThan(0)
    await page.mouse.wheel(0, 300)
    await expect.poll(() => scrollY(page)).toBeGreaterThan(y0)
  })

  test('8. counters roll up from zero to their final text', async ({
    page,
  }) => {
    await page.goto('/')
    await waitMotion(page)
    // Record every text a counter shows; the three sit in one row, so they start together.
    await page.evaluate(() => {
      const seen: Record<string, string[]> = {}
      ;(window as unknown as { __seen: typeof seen }).__seen = seen
      document.querySelectorAll('[data-counter]').forEach((node) => {
        const key = node.getAttribute('data-counter-target')!
        seen[key] = []
        new MutationObserver(() =>
          seen[key].push(node.textContent ?? ''),
        ).observe(node, {
          childList: true,
          characterData: true,
          subtree: true,
        })
      })
      document
        .querySelector('[data-counter]')!
        .scrollIntoView({ block: 'center' })
    })
    for (const c of counters) {
      await expect(
        page.locator(`[data-counter][data-counter-target="${c.target}"]`),
      ).toHaveText(c.final)
      const seen = await page.evaluate(
        (key) =>
          (window as unknown as { __seen: Record<string, string[]> }).__seen[
            key
          ],
        c.target,
      )
      expect(seen[0]).toBe(c.zero)
      expect(seen.length).toBeGreaterThan(3)
    }
  })

  test('9. the active nav link follows the section', async ({ page }) => {
    await page.goto('/')
    await waitMotion(page)
    await waitLenis(page)
    await expect(page.locator('nav a[data-nav-link].is-active')).toHaveCount(0)
    await page.locator('nav a[data-nav-section="solutions"]').click()
    const active = page.locator('nav a[data-nav-link].is-active')
    await expect(active).toHaveCount(1)
    await expect(active).toHaveAttribute('data-nav-section', 'solutions')
  })

  test('11. parallax moves the hero image and h1 on desktop', async ({
    page,
  }) => {
    await page.goto('/')
    await waitMotion(page)
    await waitLenis(page)
    await page.evaluate(() => window.scrollTo(0, 300))
    const img = page.locator('[data-scroll-speed="-1.5"]')
    await expect(img).toHaveAttribute('style', /translate3d/)
    await expect(page.locator('h1[data-scroll-speed]')).toHaveAttribute(
      'style',
      /translate3d/,
    )
    // Locomotive v4: translateY = (scrollY + innerHeight / 2 - elementMiddle) * -speed / 10
    const err = () =>
      img.evaluate((e) => {
        const ty = parseFloat(e.style.transform.split(',')[1])
        const r = e.getBoundingClientRect()
        const middle = r.top + window.scrollY - ty + r.height / 2
        const want = (window.scrollY + window.innerHeight / 2 - middle) * 0.15
        return Math.abs(ty - want)
      })
    await expect.poll(err).toBeLessThan(0.5)
  })

  test('12. the 3s failsafe reveals everything if the observer never runs', async ({
    page,
  }) => {
    await page.addInitScript(() => {
      window.IntersectionObserver = class {
        observe() {}
        unobserve() {}
        disconnect() {}
      } as unknown as typeof IntersectionObserver
    })
    await page.goto('/')
    await expect
      .poll(
        () =>
          page.evaluate(
            () =>
              document.querySelectorAll('[data-aura-reveal]:not(.is-inview)')
                .length +
              document.querySelectorAll('.principle-item:not(.is-visible)')
                .length,
          ),
        { timeout: 8000 },
      )
      .toBe(0)
  })
})

test.describe('faq', () => {
  const trigger = (page: Page, i: number) => page.locator(`#faq-button-${i}`)
  const item = (page: Page, i: number) => page.locator('.faq-item').nth(i)
  const maxHeight = (page: Page, i: number) =>
    page
      .locator(`#faq-panel-${i}`)
      .evaluate((e) => parseFloat(e.style.maxHeight || '0'))
  const hasClass = (name: string) => new RegExp(`(^|\\s)${name}(\\s|$)`)

  test('13. a click opens an item with is-open, a rotated icon and a tall panel; another click closes the first', async ({
    page,
  }) => {
    await page.goto('/#faq')
    await waitPillDone(page)
    await trigger(page, 0).click()
    await expect(trigger(page, 0)).toHaveAttribute('aria-expanded', 'true')
    // Catches glued class names: transition-all and is-open must both be present.
    await expect(item(page, 0)).toHaveClass(hasClass('transition-all'))
    await expect(item(page, 0)).toHaveClass(hasClass('is-open'))
    await expect
      .poll(() =>
        item(page, 0)
          .locator('.faq-icon')
          .evaluate((e) => getComputedStyle(e).transform),
      )
      .not.toBe('none')
    await expect.poll(() => maxHeight(page, 0)).toBeGreaterThan(0)
    // Toggling must not wipe the reveal state: an item that was shown stays shown.
    await expect(item(page, 0)).toHaveClass(hasClass('is-inview'))
    await expect
      .poll(() => item(page, 0).evaluate((e) => getComputedStyle(e).opacity))
      .toBe('1')

    await trigger(page, 1).click()
    await expect(trigger(page, 1)).toHaveAttribute('aria-expanded', 'true')
    await expect(trigger(page, 0)).toHaveAttribute('aria-expanded', 'false')
    await expect(item(page, 0)).not.toHaveClass(hasClass('is-open'))
    await expect.poll(() => maxHeight(page, 0)).toBe(0)
    await expect.poll(() => maxHeight(page, 1)).toBeGreaterThan(0)
  })

  test('14. Enter and Space on a focused trigger toggle it', async ({
    page,
  }) => {
    await page.goto('/#faq')
    await waitPillDone(page)
    await trigger(page, 2).focus()
    await page.keyboard.press('Enter')
    await expect(trigger(page, 2)).toHaveAttribute('aria-expanded', 'true')
    await page.keyboard.press('Space')
    await expect(trigger(page, 2)).toHaveAttribute('aria-expanded', 'false')
    await page.keyboard.press('Space')
    await expect(trigger(page, 2)).toHaveAttribute('aria-expanded', 'true')
  })
})

test.describe('failsafe without motion.js', () => {
  test('15. if motion.js never loads, every reveal element is visible after 3.5s (AC-14)', async ({
    page,
  }) => {
    await page.route('**/scripts/motion.js', (route) => route.abort())
    await page.goto('/')
    // 3s failsafe in the head script, plus the 600ms opacity transition.
    await page.waitForTimeout(3500)
    await expect
      .poll(
        () =>
          page.evaluate(() => {
            const els = [
              ...document.querySelectorAll('[data-aura-reveal], .principle-item'),
            ]
            return els.length > 10 && els.every((e) => getComputedStyle(e).opacity === '1')
          }),
        { timeout: 2000 },
      )
      .toBe(true)
  })
})

test.describe('missing pill markup', () => {
  test('16. without the pill elements the pill code does nothing and throws nothing', async ({
    page,
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))
    await page.addInitScript(() => {
      // Rename instead of removing: a missing node would make React regenerate the tree.
      new MutationObserver(() => {
        const hint = document.getElementById('hero-scroll-hint')
        if (hint) hint.id = 'renamed-hint'
      }).observe(document, { childList: true, subtree: true })
    })
    await page.goto('/')
    await waitLenis(page)
    await page.waitForTimeout(2000)
    expect(errors).toEqual([])
    expect(await boxTransform(page)).toBe('') // never touched
    await page.mouse.wheel(0, 300)
    await expect.poll(() => scrollY(page)).toBeGreaterThan(0)
  })
})

test.describe('reduced motion', () => {
  test.use({ reducedMotion: 'reduce' })

  test('6. pill final at once with the hint kept, no smooth scroll, no parallax, everything visible', async ({
    page,
  }) => {
    await page.goto('/')
    await waitPillDone(page)
    expect(await boxTransform(page)).toBe('translateX(0%)')
    await expect(page.locator('#hero-scroll-hint')).toBeVisible()
    await page.waitForTimeout(800) // the hint must stay, not fade out
    await expect(page.locator('#hero-scroll-hint')).toBeVisible()
    await expect(page.locator('#hero-scroll-hint')).toHaveCSS('opacity', '1')
    expect(await page.evaluate(() => '__lenis' in window)).toBe(false)
    const opacities = await page.evaluate(() =>
      [...document.querySelectorAll('[data-aura-reveal]')].map(
        (e) => getComputedStyle(e).opacity,
      ),
    )
    expect(opacities.length).toBeGreaterThan(10)
    expect(opacities.every((o) => o === '1')).toBe(true)
    // principle items have no reduced-motion CSS, the script must show them
    await expect
      .poll(() =>
        page.evaluate(() =>
          [...document.querySelectorAll('.principle-item')].every(
            (e) => getComputedStyle(e).opacity === '1',
          ),
        ),
      )
      .toBe(true)
    // counters show the final value the moment they come into view
    for (const c of counters) {
      const el = page.locator(
        `[data-counter][data-counter-target="${c.target}"]`,
      )
      await el.evaluate((node) => node.scrollIntoView({ block: 'center' }))
      await page.evaluate(
        () =>
          new Promise((r) =>
            requestAnimationFrame(() => requestAnimationFrame(r)),
          ),
      )
      await expect(el).toHaveText(c.final, { timeout: 100 })
    }
    await page.evaluate(() => window.scrollTo(0, 400))
    const transforms = await page.evaluate(() =>
      [...document.querySelectorAll<HTMLElement>('[data-scroll-speed]')].map(
        (e) => [e.style.transform, getComputedStyle(e).transform],
      ),
    )
    expect(transforms).toEqual([
      ['', 'none'],
      ['', 'none'],
    ])
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.mouse.wheel(0, 300)
    await expect.poll(() => scrollY(page)).toBeGreaterThan(0)
  })
})

test.describe('no javascript', () => {
  test.use({ javaScriptEnabled: false })

  test('7. all reveal elements and the hero pill text are visible', async ({
    page,
  }) => {
    await page.goto('/')
    expect(
      await page.evaluate(() => document.documentElement.className),
    ).not.toMatch(/\bjs\b/)
    const hidden = await page.evaluate(
      () =>
        [
          ...document.querySelectorAll('[data-aura-reveal], .principle-item'),
        ].filter((e) => getComputedStyle(e).opacity !== '1').length,
    )
    expect(hidden).toBe(0)
    const pill = page.locator('#hero-pill-text')
    await expect(pill).toBeVisible()
    // the dark box sits behind the white text, so it is readable
    expect(
      await page
        .locator('#hero-pill-box')
        .evaluate((e) => getComputedStyle(e).transform),
    ).toBe('none')
  })
})

test.describe('mobile width', () => {
  test.use({ viewport: { width: 375, height: 812 } })

  test('10. no parallax and no smooth scroll below 768px', async ({ page }) => {
    await page.goto('/')
    await waitMotion(page)
    await page.mouse.wheel(0, 400)
    await expect.poll(() => scrollY(page)).toBeGreaterThan(0)
    await page.evaluate(() => window.scrollTo(0, 500))
    await expect.poll(() => scrollY(page)).toBe(500)
    expect(await page.evaluate(() => '__lenis' in window)).toBe(false)
    const inline = await page.evaluate(() =>
      [...document.querySelectorAll<HTMLElement>('[data-scroll-speed]')].map(
        (e) => e.style.transform,
      ),
    )
    expect(inline).toEqual(['', ''])
  })
})
