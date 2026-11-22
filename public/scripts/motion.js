// Port of the motion in legacy/main.js: reveal, stagger, counters, principles, active nav, progress hairline, hero pill, anchors, FAQ.
// Loaded as a plain deferred script, so it runs at parse time without waiting for React. Anything that edits markup React
// also renders waits for hydration (afterHydration), because React logs a mismatch if it finds the server HTML already changed.
;(function () {
  var d = document
  var root = d.documentElement
  var w = window
  var reduce = w.matchMedia('(prefers-reduced-motion: reduce)').matches
  var all = function (sel, from) {
    return [].slice.call((from || d).querySelectorAll(sel))
  }
  var byId = function (id) {
    return d.getElementById(id)
  }
  var inview = function (el) {
    el.classList.add('is-inview')
  }
  var anyObserverFired = false

  // SmoothScroll sets window.__hydrated and fires 'hydrated' once React has hydrated.
  function afterHydration(fn) {
    if (w.__hydrated) fn()
    else w.addEventListener('hydrated', fn, { once: true })
  }

  // Calls fn(el) once, the first time each element intersects.
  function watch(els, opts, fn) {
    var io = new IntersectionObserver(function (entries) {
      anyObserverFired = true
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          io.unobserve(e.target)
          fn(e.target)
        }
      })
    }, opts)
    els.forEach(function (el) {
      io.observe(el)
    })
  }

  afterHydration(function () {
    // The inline head script drops the 'js' class if this flag is not set within 3s (AC-14), so a slow or failed
    // hydration ends in a plain, fully visible page. If that already happened, leave it that way.
    w.__motion = 1
    if (!root.classList.contains('js')) return

    // ── Reveal and stagger containers (legacy 487) ─────────────────────────
    var reveals = all('[data-aura-reveal],[data-aura-stagger]')
    var principles = all('.principle-item')
    function showAll() {
      reveals.forEach(inview)
      principles.forEach(function (el) {
        el.classList.add('is-visible')
      })
    }
    if (reduce) {
      showAll()
    } else {
      watch(reveals, { rootMargin: '0px 0px -12% 0px' }, function (el) {
        inview(el)
        if (el.hasAttribute('data-aura-stagger'))
          all('[data-aura-reveal]', el).forEach(inview)
      })
      // AC-14: the head script only knows this file ran. If the observer never reports, show everything.
      setTimeout(function () {
        if (!anyObserverFired) showAll()
      }, 3000)
    }

    // ── Counters (legacy 562) ──────────────────────────────────────────────
    function counter(el, instant) {
      var target = parseFloat(el.getAttribute('data-counter-target'))
      var suffix = el.getAttribute('data-counter-suffix') || ''
      var decimals = parseInt(el.getAttribute('data-counter-decimals') || '0', 10)
      var set = function (n) {
        el.textContent = n.toFixed(decimals) + suffix
      }
      if (instant) return set(target)
      var t0
      set(0)
      requestAnimationFrame(function step(ts) {
        t0 = t0 || ts
        var p = Math.min((ts - t0) / 1200, 1)
        set(target * (1 - Math.pow(1 - p, 3)))
        if (p < 1) requestAnimationFrame(step)
      })
    }
    var counters = all('[data-counter]')
    if (reduce) {
      counters.forEach(function (el) {
        counter(el, true)
      })
    } else {
      watch(counters, { threshold: 0.5 }, counter)
    }

    // ── Principles cascade (legacy 624) ────────────────────────────────────
    var list = byId('principles-list')
    if (list && !reduce) {
      watch([list], { threshold: 0.2 }, function () {
        principles.forEach(function (el, i) {
          setTimeout(function () {
            el.classList.add('is-visible')
          }, i * 110)
        })
      })
    }

    // ── Scroll progress hairline (legacy 522) and active nav link (legacy 537) ──
    // The scroll handler only reads cached numbers and writes a transform; layout is measured again when the page size changes.
    var progress = byId('xcx-progress-bar')
    var navLinks = all('[data-nav-link]')
    var navSections = navLinks.map(function (a) {
      return a.getAttribute('data-nav-section')
    })
    var maxScroll = 0
    var sectionTops = []
    var lastActive = null
    function measure() {
      maxScroll = root.scrollHeight - w.innerHeight
      sectionTops = navSections.map(function (id) {
        var el = byId(id)
        return el ? el.getBoundingClientRect().top + (w.scrollY || 0) : Infinity
      })
    }
    function onScroll() {
      var y = w.scrollY || 0
      if (progress && maxScroll > 0)
        progress.style.transform = 'scaleX(' + Math.min(y / maxScroll, 1).toFixed(4) + ')'
      var active = ''
      navSections.forEach(function (id, i) {
        if (sectionTops[i] - y <= 160) active = id
      })
      if (active === lastActive) return
      lastActive = active
      navLinks.forEach(function (a) {
        a.classList.toggle(
          'is-active',
          a.getAttribute('data-nav-section') === active,
        )
      })
    }
    // Fires once at start and whenever the page height changes (hint hiding, FAQ opening, images, fonts).
    new ResizeObserver(function () {
      measure()
      onScroll()
    }).observe(d.body)
    w.addEventListener('scroll', onScroll, { passive: true })
  })

  // ── Hero pill: plays by itself on load (user decision, replaces legacy 361's scroll scrub and lock) ──
  // One CSS transition on transform, plus the hint's progress line filling in step. No scroll lock, no input handling.
  var box = byId('hero-pill-box')
  var bar = byId('hero-scroll-progress')
  var hint = byId('hero-scroll-hint')
  var PILL_MS = 1200
  var PILL_EASE = 'cubic-bezier(0.25, 0, 0.35, 1)' // legacy's anchor easing
  var pillTimer = 0
  var hintTimer = 0
  // Without the pill markup there is nothing to play.
  var done = !(box && bar && hint)

  function hideHint() {
    hintTimer = 0
    hint.style.display = 'none'
  }
  // The pill's finished look. The hint fades out (legacy 428) unless keepHint (reduced motion leaves it alone).
  function finishPill(keepHint) {
    if (done) return
    done = true
    clearTimeout(pillTimer)
    box.style.transition = bar.style.transition = ''
    box.style.transform = 'translateX(0%)'
    box.style.willChange = 'auto'
    bar.style.transform = 'scaleX(1)'
    if (keepHint) return
    hint.style.opacity = '0'
    hint.style.transform = 'translateY(8px)'
    hintTimer = setTimeout(hideHint, 400)
  }
  function playPill() {
    if (done) return
    box.style.transition = 'transform ' + PILL_MS + 'ms ' + PILL_EASE
    bar.style.transition = 'transform ' + PILL_MS + 'ms ' + PILL_EASE
    box.style.transform = 'translateX(0%)'
    bar.style.transform = 'scaleX(1)'
    pillTimer = setTimeout(finishPill, PILL_MS + 50)
  }

  if (!done) {
    afterHydration(function () {
      if (reduce) finishPill(true)
      else if (w.scrollY > 0 || location.hash) finishPill()
      else if (document.documentElement.classList.contains('intro')) w.addEventListener('xcx:intro-done', function () { setTimeout(playPill, 300) }, { once: true })
      else setTimeout(playPill, 300)
    })
  }

  // ── FAQ accordion (legacy 598, AC-4) ───────────────────────────────────
  // One item open at a time; the open panel gets an inline max-height equal to its scrollHeight. Buttons give Enter and Space as clicks.
  function setFaq(button, open) {
    var item = button.closest('.faq-item')
    var panel = byId(button.getAttribute('aria-controls'))
    button.setAttribute('aria-expanded', open ? 'true' : 'false')
    item.classList.toggle('is-open', open)
    item.style.background = open ? 'rgba(255,255,255,0.9)' : ''
    panel.style.maxHeight = open ? panel.scrollHeight + 'px' : '0'
  }
  d.addEventListener('click', function (e) {
    var button = e.target.closest('.faq-trigger')
    if (!button) return
    var wasOpen = button.getAttribute('aria-expanded') === 'true'
    all('.faq-trigger[aria-expanded="true"]').forEach(function (b) {
      setFaq(b, false)
    })
    if (!wasOpen) setFaq(button, true)
  })

  // ── Anchors (legacy 497) ───────────────────────────────────────────────
  // cubic-bezier(.25, 0, .35, 1): x(t) = .75t - .45t^2 + .7t^3, y(t) = 3t^2 - 2t^3, solved for t with Newton steps.
  function ease(x) {
    var t = x
    for (var i = 0; i < 6; i++)
      t -=
        (0.75 * t - 0.45 * t * t + 0.7 * t * t * t - x) /
        (0.75 - 0.9 * t + 2.1 * t * t)
    return 3 * t * t - 2 * t * t * t
  }
  d.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]')
    if (!a) return
    // Targets below skipped sections sit at guessed heights until those render; render them all before measuring.
    root.classList.add('cv-off')
    // The hint leaving the layout moves everything below the hero up, so settle that before measuring the target.
    if (!done) finishPill()
    if (hintTimer) {
      clearTimeout(hintTimer)
      hideHint()
    }
    var href = a.getAttribute('href')
    var target = href === '#' ? null : byId(href.slice(1))
    if (href !== '#' && !target) return
    e.preventDefault()
    var lenis = w.__lenis
    if (lenis) {
      lenis.scrollTo(target || 0, {
        offset: target ? -120 : 0,
        duration: 0.8,
        easing: ease,
      })
    } else {
      w.scrollTo({
        top: target ? target.getBoundingClientRect().top + w.scrollY - 120 : 0,
        behavior: reduce ? 'auto' : 'smooth',
      })
    }
  })
})()
