(function () {
  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;

  // ═══════════════════════════════════════════════════════════════════
  // TEAM SECTION — The People Behind the System
  // Members render data-driven from TEAM_MEMBERS. Update names,
  // photos (640x800, 4:5) and LinkedIn URLs here only.
  // ═══════════════════════════════════════════════════════════════════

  var TEAM_MEMBERS = [
    {
      id: 'founder',
      role: 'FOUNDER',
      name: 'Naim Benjedou',
      systemRole: 'SYSTEMS',
      description: 'Defines the direction, architecture, and systems Xcortex builds.',
      tags: ['PRODUCT', 'STRATEGY', 'SYSTEMS'],
      image: 'team-founder.jpeg',
      linkedin: null
    },
    {
      id: 'partner',
      role: 'FOUNDER RIGHT HAND',
      name: 'Mohamed Abdouli',
      systemRole: 'OPERATIONS',
      tags: ['OPERATIONS', 'PRODUCT', 'GROWTH'],
      image: 'team-partner.jpeg',
      linkedin: null
    },
    {
      id: 'product',
      role: 'PRODUCT ENGINEER',
      name: 'Oussama Gader',
      systemRole: 'PRODUCT',
      tags: ['PRODUCT', 'SOFTWARE', 'UX'],
      image: 'team-product-engineer.jpeg',
      linkedin: null
    },
    {
      id: 'ai',
      role: 'AI ENGINEER',
      name: 'Fedi Ben Mahfoudh',
      systemRole: 'INTELLIGENCE',
      tags: ['LLMs', 'RAG', 'AGENTS'],
      image: 'team-ai-engineer.jpeg',
      linkedin: null
    },
    {
      id: 'automation',
      role: 'AUTOMATION ENGINEER',
      name: 'Noureddine Marzougui',
      systemRole: 'AUTOMATION',
      tags: ['WORKFLOWS', 'APIs', 'ORCHESTRATION'],
      image: 'team-automation-engineer.jpeg',
      linkedin: null
    }
  ];

  var teamGrid = document.getElementById('team-grid');
  var teamSystem = document.getElementById('team-system');
  var teamSvg = document.getElementById('team-lines');
  var teamById = {};
  var teamPinned = null;
  var teamActiveId = null;
  var teamCanHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var teamWireFill = document.querySelector('.team-wire-fill');
  var teamWireRaf = null;

  function teamPad(n) { return (n < 10 ? '0' : '') + n; }

  function teamRender() {
    if (!teamGrid) return;
    var html = '';
    TEAM_MEMBERS.forEach(function (m, i) {
      m.index = i + 1;
      teamById[m.id] = m;
      var dots = '';
      if (m.id !== 'founder') dots += '<span class="team-dot team-dot-top" aria-hidden="true"></span>';
      if (m.id === 'founder') dots += '<span class="team-dot team-dot-bottom" aria-hidden="true"></span>';
      var link = m.linkedin
        ? '<a class="team-link" href="' + m.linkedin + '" target="_blank" rel="noopener noreferrer" aria-label="' + m.name + ' on LinkedIn">LinkedIn &#8599;</a>'
        : '';
      html +=
        '<div class="team-node" data-scroll data-aura-reveal="fade-up" data-pos="' + m.id + '" style="transition-delay:' + (250 + i * 100) + 'ms">' +
        '<article class="team-card" tabindex="0" role="button" aria-pressed="false" data-member="' + m.id + '" aria-label="' + m.role + ': ' + m.name + '">' +
        dots +
        '<div class="team-photo">' +
        '<img src="' + m.image + '" alt="' + m.name + ' \u2014 ' + m.role + ' at Xcortex" width="640" height="800" loading="lazy" decoding="async">' +
        '<span class="team-index" aria-hidden="true">' + teamPad(m.index) + ' / ' + teamPad(TEAM_MEMBERS.length) + '</span>' +
        '</div>' +
        '<div class="team-meta">' +
        '<p class="team-role">' + m.role + '</p>' +
        '<h3 class="team-name">' + m.name + '</h3>' +
        '<div class="team-tags">' + m.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div>' +
        link +
        '</div>' +
        '</article>' +
        '</div>';
    });
    teamGrid.innerHTML = html;
  }

  // ── Connection lines (desktop system diagram) ───────────────────────
  function teamDrawLines(instant) {
    if (!teamSvg || !teamSystem || !teamGrid) return;
    if (!window.matchMedia('(min-width: 1024px)').matches) { teamSvg.innerHTML = ''; return; }
    var card = {};
    TEAM_MEMBERS.forEach(function (m) {
      card[m.id] = teamGrid.querySelector('[data-member="' + m.id + '"]');
    });
    if (!card.founder || !card.partner || !card.product || !card.ai || !card.automation) return;

    function pt(id, side) {
      var dot = card[id].querySelector('.team-dot-' + side);
      if (!dot) return null;
      var r = dot.getBoundingClientRect();
      var g = teamSystem.getBoundingClientRect();
      return { x: r.left + r.width / 2 - g.left, y: r.top + r.height / 2 - g.top };
    }

    var fB = pt('founder', 'bottom');
    var pT = pt('partner', 'top');
    var prT = pt('product', 'top');
    var aiT = pt('ai', 'top');
    var auT = pt('automation', 'top');
    if (!fB || !pT || !prT || !aiT || !auT) return;

    var g = teamSystem.getBoundingClientRect();
    var pBot = card.partner.getBoundingClientRect().bottom - g.top;

    var yMid1 = fB.y + (Math.min(pT.y, prT.y) - fB.y) / 2;
    var yMid2 = pBot + (Math.min(aiT.y, auT.y) - pBot) / 2;

    var segs = [
      { x1: fB.x, y1: fB.y, x2: fB.x, y2: yMid1, members: 'founder', delay: 250 },
      { x1: pT.x, y1: yMid1, x2: prT.x, y2: yMid1, members: 'founder partner product', delay: 400 },
      { x1: pT.x, y1: yMid1, x2: pT.x, y2: pT.y, members: 'partner', delay: 460 },
      { x1: prT.x, y1: yMid1, x2: prT.x, y2: prT.y, members: 'product', delay: 460 },
      { x1: fB.x, y1: yMid1, x2: fB.x, y2: yMid2, members: 'founder ai automation', delay: 560 },
      { x1: aiT.x, y1: yMid2, x2: auT.x, y2: yMid2, members: 'ai automation', delay: 640 },
      { x1: aiT.x, y1: yMid2, x2: aiT.x, y2: aiT.y, members: 'ai', delay: 700 },
      { x1: auT.x, y1: yMid2, x2: auT.x, y2: auT.y, members: 'automation', delay: 700 }
    ];

    teamSvg.setAttribute('viewBox', '0 0 ' + g.width + ' ' + g.height);
    teamSvg.setAttribute('width', g.width);
    teamSvg.setAttribute('height', g.height);
    if (teamSvg.dataset.pulses) delete teamSvg.dataset.pulses;
    teamSvg.innerHTML = segs.map(function (s) {
      var len = Math.max(1, Math.round(Math.max(Math.abs(s.x2 - s.x1), Math.abs(s.y2 - s.y1))));
      var offset = instant ? 0 : len;
      return '<g class="team-seg" data-members="' + s.members + '">' +
        '<line class="team-line" x1="' + s.x1 + '" y1="' + s.y1 + '" x2="' + s.x2 + '" y2="' + s.y2 + '" style="stroke-dasharray:' + len + '; stroke-dashoffset:' + offset + '; --team-delay:' + s.delay + 'ms"></line>' +
        '</g>';
    }).join('');

    if (instant && teamSystem.classList.contains('is-revealed')) {
      teamRevealLines();
    }
    teamApplyLines();
  }

  function teamRevealLines() {
    if (!teamSvg) return;
    teamSvg.querySelectorAll('.team-line').forEach(function (ln) {
      ln.style.strokeDashoffset = '0';
    });
    teamAddPulses();
  }

  // ── Data pulses: dots flowing along the wires (system alive) ─────────
  function teamAddPulses() {
    if (!teamSvg || prefersReducedMotion) return;
    if (teamSvg.dataset.pulses) return;
    teamSvg.dataset.pulses = '1';
    var ns = 'http://www.w3.org/2000/svg';
    teamSvg.querySelectorAll('.team-seg').forEach(function (seg, i) {
      var ln = seg.querySelector('.team-line');
      if (!ln) return;
      var x1 = parseFloat(ln.getAttribute('x1')), y1 = parseFloat(ln.getAttribute('y1'));
      var x2 = parseFloat(ln.getAttribute('x2')), y2 = parseFloat(ln.getAttribute('y2'));
      var len = Math.max(1, Math.hypot(x2 - x1, y2 - y1));
      var dur = Math.max(2.2, Math.min(4.4, len / 110));
      var del = 0.15 + i * 0.22;
      var c = document.createElementNS(ns, 'circle');
      c.setAttribute('class', 'team-pulse');
      c.setAttribute('r', '2');
      c.setAttribute('cx', '0');
      c.setAttribute('cy', '0');
      c.style.setProperty('offset-path', "path('M " + x1 + ' ' + y1 + ' L ' + x2 + ' ' + y2 + "')");
      c.style.setProperty('--team-dur', dur.toFixed(2) + 's');
      c.style.setProperty('--team-del', del.toFixed(2) + 's');
      seg.appendChild(c);
    });
  }

  function teamApplyLines() {
    if (!teamSvg) return;
    teamSvg.querySelectorAll('.team-seg').forEach(function (seg) {
      var mem = (seg.getAttribute('data-members') || '').split(' ');
      seg.classList.toggle('is-lit', !!teamActiveId && mem.indexOf(teamActiveId) !== -1);
    });
  }

  function teamSetActive(id) {
    teamActiveId = id;
    if (!teamGrid) return;
    teamGrid.querySelectorAll('.team-node').forEach(function (node) {
      var c = node.querySelector('.team-card');
      var isMe = !!c && !!id && c.getAttribute('data-member') === id;
      node.classList.toggle('is-active', isMe);
    });
    teamGrid.querySelectorAll('.team-card').forEach(function (c) {
      var isMe = !!id && c.getAttribute('data-member') === id;
      c.classList.toggle('is-active', isMe);
      c.setAttribute('aria-pressed', (isMe && teamPinned === id) ? 'true' : 'false');
    });
    teamGrid.classList.toggle('has-active', !!id);
    teamApplyLines();

    var m = id ? teamById[id] : null;
    var p = document.getElementById('team-indicator-primary');
    var cn = document.getElementById('team-indicator-count');
    var st = document.getElementById('team-indicator-status');
    if (p && cn && st) {
      if (m) {
        p.textContent = m.role;
        cn.textContent = teamPad(m.index) + ' / ' + teamPad(TEAM_MEMBERS.length);
        st.textContent = 'SYSTEM ROLE / ' + m.systemRole;
      } else {
        p.textContent = 'XCORTEX / TEAM';
        cn.textContent = teamPad(TEAM_MEMBERS.length) + ' / ' + teamPad(TEAM_MEMBERS.length);
        st.textContent = 'SYSTEM ACTIVE';
      }
    }
  }

  function teamBindEvents() {
    if (!teamGrid) return;

    teamGrid.querySelectorAll('.team-card').forEach(function (card) {
      var id = card.getAttribute('data-member');

      // Hover only for real pointers — avoids sticky states on touch
      if (teamCanHover) {
        card.addEventListener('mouseenter', function () { teamSetActive(id); });
        card.addEventListener('mouseleave', function () { teamSetActive(teamPinned); });
      }
      card.addEventListener('focusin', function () { teamSetActive(id); });
      card.addEventListener('focusout', function () {
        setTimeout(function () {
          if (!card.contains(document.activeElement)) teamSetActive(teamPinned);
        }, 0);
      });

      function togglePin() {
        teamPinned = (teamPinned === id) ? null : id;
        teamSetActive(teamPinned || id);
      }

      card.addEventListener('click', function (e) {
        if (e.target && e.target.closest && e.target.closest('a')) return;
        togglePin();
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault();
          togglePin();
        }
      });
    });

    if (teamCanHover) {
      teamGrid.addEventListener('mouseleave', function () { teamSetActive(teamPinned); });
    }

    // Draw connection lines when the system scrolls into view
    if ('IntersectionObserver' in window && teamSystem) {
      var teamObs = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          teamSystem.classList.add('is-revealed');
          teamRevealLines();
          teamObs.disconnect();
        }
      }, { threshold: 0.2 });
      teamObs.observe(teamSystem);
    }

    var teamResizeT;
    window.addEventListener('resize', function () {
      clearTimeout(teamResizeT);
      teamResizeT = setTimeout(function () {
        teamDrawLines(!!teamSystem && teamSystem.classList.contains('is-revealed'));
      }, 150);
    });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        teamDrawLines(!!teamSystem && teamSystem.classList.contains('is-revealed'));
      });
    }
    window.addEventListener('load', function () {
      setTimeout(function () {
        teamDrawLines(!!teamSystem && teamSystem.classList.contains('is-revealed'));
      }, 350);
    });
  }

  // ── Mobile system wire: fill tracks scroll progress ──────────────────
  function teamWireProgress() {
    teamWireRaf = null;
    if (!teamSystem || !teamWireFill) return;
    if (window.matchMedia('(min-width: 1024px)').matches) {
      teamWireFill.style.transform = 'scaleY(0)';
      return;
    }
    var r = teamSystem.getBoundingClientRect();
    var focus = window.innerHeight * 0.62;
    var p = (focus - r.top) / r.height;
    p = Math.min(Math.max(p, 0), 1);
    teamWireFill.style.transform = 'scaleY(' + p.toFixed(4) + ')';
  }

  function teamQueueWire() {
    if (!teamWireRaf) teamWireRaf = requestAnimationFrame(teamWireProgress);
  }

  window.addEventListener('scroll', teamQueueWire, { passive: true });
  window.addEventListener('resize', teamQueueWire);
  window.addEventListener('load', teamQueueWire);

  teamRender();
  teamBindEvents();
  teamDrawLines(false);
  teamQueueWire();


  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: !prefersReducedMotion && !isMobile,
    lerp: 0.08,          // Silky smooth (lower = smoother)
    multiplier: 1,
    class: 'is-inview',  // Class added when element enters viewport
    repeat: false,       // One-shot reveals (Webflow style)
    offset: ['12%', 0],  // Trigger 12% from bottom

    // Tablet: keep smooth
    tablet: {
      smooth: !prefersReducedMotion,
      breakpoint: 1024
    },

    // Mobile: disable smooth for perf, keep detection
    smartphone: {
      smooth: false,
      breakpoint: 768
    }
  });

  // ── Hero Pill: Scroll-lock + scrubbed animation ─────────────────────────
  // While the pill is not fully revealed, the page stays pinned at the top
  // and the user's scroll input is consumed to drive the animation.
  // Once the box slides fully in, the lock releases and normal scroll resumes.

  var pillBox = document.getElementById('hero-pill-box');
  var pillCurrent = -100;   // current rendered translate (%)
  var pillTarget = -100;   // target translate (%)
  var pillRaf = null;
  var virtualY = 0;      // accumulated virtual scroll (px)
  var PILL_TOTAL = 600;    // px of scroll input to consume (feel)
  var heroUnlocked = false;

  // Progress bar element (we'll create it in the hero)
  var progressBar = document.getElementById('hero-scroll-progress');

  function setPillFromVirtual() {
    var progress = Math.min(Math.max(virtualY / PILL_TOTAL, 0), 1);
    pillTarget = -100 + progress * 100;
    // Update progress bar
    if (progressBar) progressBar.style.width = (progress * 100).toFixed(1) + '%';
  }

  function animatePill() {
    pillCurrent += (pillTarget - pillCurrent) * 0.10;
    if (pillBox) {
      pillBox.style.transform = 'translateX(' + pillCurrent.toFixed(3) + '%)';
    }
    if (Math.abs(pillTarget - pillCurrent) > 0.05) {
      pillRaf = requestAnimationFrame(animatePill);
    } else {
      pillCurrent = pillTarget;
      if (pillBox) pillBox.style.transform = 'translateX(' + pillCurrent.toFixed(3) + '%)';
      pillRaf = null;
      // If we just finished and pill is fully revealed, unlock scroll
      if (pillTarget >= -0.5 && !heroUnlocked) {
        unlockScroll();
      }
    }
  }

  function triggerPillRaf() {
    if (!pillRaf) pillRaf = requestAnimationFrame(animatePill);
  }

  function unlockScroll() {
    if (heroUnlocked) return; // guard against double-call
    heroUnlocked = true;

    // ── Permanently remove all scroll-hijack listeners ─────────────────
    window.removeEventListener('wheel', onWheel, { passive: false });
    window.removeEventListener('touchstart', onTouchStart, { passive: true });
    window.removeEventListener('touchmove', onTouchMove, { passive: false });

    // ── Hard-pin the pill at 0% — will never move again ────────────────
    if (pillRaf) { cancelAnimationFrame(pillRaf); pillRaf = null; }
    pillTarget = 0;
    pillCurrent = 0;
    if (pillBox) {
      pillBox.style.transform = 'translateX(0%)';
      pillBox.style.willChange = 'auto'; // release GPU layer
    }
    if (progressBar) progressBar.style.width = '100%';

    // ── Restore page scroll ────────────────────────────────────────────
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';

    // ── Fade out hint ──────────────────────────────────────────────────
    var wrap = document.getElementById('hero-scroll-hint');
    if (wrap) {
      wrap.style.opacity = '0';
      wrap.style.transform = 'translateY(8px)';
      setTimeout(function () { if (wrap) wrap.style.display = 'none'; }, 400);
    }

    // ── Resume Locomotive (desktop smooth scroll) ──────────────────────
    try { scroll.start(); } catch (e) { }
    try { scroll.update(); } catch (e) { }
  }

  function lockScroll() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    // Pause Locomotive Scroll (desktop smooth mode uses CSS transform,
    // not native scroll — overflow:hidden alone doesn't stop it)
    try { scroll.stop(); } catch (e) { }
  }

  // Start locked
  if (!prefersReducedMotion) {
    lockScroll();
  } else {
    // Reduced-motion: skip animation, go straight to revealed
    heroUnlocked = true;
    pillTarget = 0; pillCurrent = 0;
    if (pillBox) pillBox.style.transform = 'translateX(0%)';
    if (progressBar) progressBar.style.width = '100%';
  }

  // Desktop: Wheel events drive virtualY while locked
  // Store as named functions so they can be fully removed on unlock
  function onWheel(e) {
    e.preventDefault();
    virtualY = Math.min(Math.max(virtualY + e.deltaY, 0), PILL_TOTAL);
    setPillFromVirtual();
    triggerPillRaf();
  }

  var touchStartY = 0;
  function onTouchStart(e) {
    touchStartY = e.touches[0].clientY;
  }
  function onTouchMove(e) {
    e.preventDefault();
    var dy = touchStartY - e.touches[0].clientY;
    touchStartY = e.touches[0].clientY;
    virtualY = Math.min(Math.max(virtualY + dy * 1.8, 0), PILL_TOTAL);
    setPillFromVirtual();
    triggerPillRaf();
  }

  window.addEventListener('wheel', onWheel, { passive: false });
  window.addEventListener('touchstart', onTouchStart, { passive: true });
  window.addEventListener('touchmove', onTouchMove, { passive: false });

        // When Locomotive marks a stagger container as is-inview, reveal its children
        scroll.on('scroll', function (args) {
          teamQueueWire();
          document.querySelectorAll('[data-aura-stagger].is-inview').forEach(function (container) {
      container.querySelectorAll('[data-aura-reveal]').forEach(function (child) {
        child.classList.add('is-inview');
      });
    });
  });

  // Handle anchor clicks for smooth scroll-to
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = anchor.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        scroll.scrollTo(target, {
          offset: -120,
          duration: 800,
          easing: [0.25, 0.0, 0.35, 1.0]
        });
      }
    });
  });

  // Update on resize
  window.addEventListener('resize', function () { scroll.update(); });

  // Update after images load
  window.addEventListener('load', function () {
    setTimeout(function () { scroll.update(); }, 300);
  });

  // ── Scroll Progress Hairline ───────────────────────────────────────────
  var progressBarEl = document.getElementById('xcx-progress-bar');
  function updateProgressBar(args) {
    if (!progressBarEl) return;
    var scrollEl = document.querySelector('[data-scroll-container]');
    var totalH = scrollEl ? scrollEl.scrollHeight - window.innerHeight : document.body.scrollHeight - window.innerHeight;
    if (totalH <= 0) return;
    var y = args && args.scroll ? args.scroll.y : (window.scrollY || 0);
    progressBarEl.style.width = Math.min((y / totalH) * 100, 100).toFixed(2) + '%';
  }
  scroll.on('scroll', updateProgressBar);
  window.addEventListener('scroll', function () {
    updateProgressBar({ scroll: { y: window.scrollY || 0 } });
  }, { passive: true });

  // ── Active Nav Link on Scroll ──────────────────────────────────────────
  var navLinks = document.querySelectorAll('[data-nav-link]');
  var navSections = ['systems', 'solutions', 'team', 'approach', 'final-cta'];
  function updateActiveNav(scrollY) {
    var active = '';
    // Walk sections top to bottom; last one that's past the top wins
    for (var i = 0; i < navSections.length; i++) {
      var el = document.getElementById(navSections[i]);
      if (!el) continue;
      var top = el.getBoundingClientRect().top + scrollY - 160;
      if (scrollY >= top) active = navSections[i];
    }
    navLinks.forEach(function (a) {
      if (a.getAttribute('data-nav-section') === active) {
        a.classList.add('is-active');
      } else {
        a.classList.remove('is-active');
      }
    });
  }
  scroll.on('scroll', function (args) { updateActiveNav(args.scroll.y); });
  window.addEventListener('scroll', function () {
    updateActiveNav(window.scrollY || 0);
  }, { passive: true });

  // ── Metric Counter Roll-Up ─────────────────────────────────────────────
  function animateCounter(el) {
    if (el.dataset.counterDone) return;
    el.dataset.counterDone = '1';
    var target = parseFloat(el.getAttribute('data-counter-target'));
    var suffix = el.getAttribute('data-counter-suffix') || '';
    var decimals = parseInt(el.getAttribute('data-counter-decimals') || '0', 10);
    var duration = 1200;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      // ease-out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = eased * target;
      el.textContent = current.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toFixed(decimals) + suffix;
    }
    el.textContent = (0).toFixed(decimals) + suffix;
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var counterObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-counter]').forEach(function (el) {
      counterObs.observe(el);
    });
  }

  // ── FAQ Smooth Accordion ───────────────────────────────────────────────
  document.querySelectorAll('.faq-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var body = item.querySelector('.faq-body');
      var isOpen = item.classList.contains('is-open');

      // Close any currently open item
      document.querySelectorAll('.faq-item.is-open').forEach(function (openItem) {
        openItem.classList.remove('is-open');
        openItem.querySelector('.faq-body').style.maxHeight = '0';
        openItem.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
        openItem.style.background = '';
      });

      if (!isOpen) {
        item.classList.add('is-open');
        // Use actual content height for pixel-perfect animation
        body.style.maxHeight = body.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
        item.style.background = 'rgba(255,255,255,0.9)';
        setTimeout(function () { try { scroll.update(); } catch (e) { } }, 450);
      }
    });
  });

  // ── Principles Cascade Reveal ──────────────────────────────────────────
  var principlesList = document.getElementById('principles-list');
  if (principlesList && 'IntersectionObserver' in window) {
    var principleObs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        var items = principlesList.querySelectorAll('.principle-item');
        items.forEach(function (item, i) {
          setTimeout(function () {
            item.classList.add('is-visible');
          }, i * 110);
        });
        principleObs.unobserve(principlesList);
      }
    }, { threshold: 0.2 });
    principleObs.observe(principlesList);
  }

})();
