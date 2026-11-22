'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

declare global {
  interface Window {
    __lenis?: Lenis
    __hydrated?: boolean
  }
}

// Legacy used Locomotive with lerp 0.08 and smooth mode off under reduced motion and below 768px (legacy/main.js 339).
// Parallax follows Locomotive v4 Smooth.js: speed = data-scroll-speed / 10,
// translateY = (scrollY + viewportHeight / 2 - elementMiddle) * -speed.
// Starts Lenis and parallax; the returned function undoes both.
function start() {
  const lenis = new Lenis({ lerp: 0.08, autoRaf: true })
  const els = [...document.querySelectorAll<HTMLElement>('[data-scroll-speed]')]
  const speeds = els.map((el) => parseFloat(el.dataset.scrollSpeed!) / 10)
  let middles: number[] = []

  const measure = () => {
    // Clearing the inline parallax transform leaves only the CSS reveal translate; subtracting it gives the untransformed middle.
    middles = els.map((el) => {
      el.style.transform = ''
      const r = el.getBoundingClientRect()
      const ty = new DOMMatrix(getComputedStyle(el).transform).m42
      return r.top + window.scrollY - ty + r.height / 2
    })
  }
  const apply = (y: number) =>
    els.forEach((el, i) => {
      const ty = (y + window.innerHeight / 2 - middles[i]) * -speeds[i]
      el.style.transform = `translate3d(0, ${ty}px, 0)`
    })
  // Resize and load both move elements, so re-measure (legacy called scroll.update() on load).
  const remeasure = () => {
    measure()
    apply(lenis.scroll)
  }

  measure()
  apply(window.scrollY)
  lenis.on('scroll', () => apply(lenis.scroll))
  window.addEventListener('resize', remeasure)
  window.addEventListener('load', remeasure)
  window.__lenis = lenis

  return () => {
    window.removeEventListener('resize', remeasure)
    window.removeEventListener('load', remeasure)
    els.forEach((el) => (el.style.transform = ''))
    delete window.__lenis
    lenis.destroy()
  }
}

export function SmoothScroll() {
  useEffect(() => {
    const wide = window.matchMedia('(min-width: 768px)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let stop: (() => void) | undefined

    // Effects run after hydration, so tell public/scripts/motion.js it may now edit the markup.
    window.__hydrated = true
    window.dispatchEvent(new Event('hydrated'))

    // AC-13: smooth scroll and parallax only on wide screens without reduced motion, and they follow either changing.
    const sync = () => {
      const want = wide.matches && !reduced.matches
      if (want && !stop) stop = start()
      else if (!want && stop) {
        stop()
        stop = undefined
      }
    }

    sync()
    wide.addEventListener('change', sync)
    reduced.addEventListener('change', sync)
    return () => {
      wide.removeEventListener('change', sync)
      reduced.removeEventListener('change', sync)
      stop?.()
    }
  }, [])

  return null
}
