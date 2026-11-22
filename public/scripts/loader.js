// Intro loader, ported from the Claude Design file Loader.dc.html. Runs only when the head script added .intro to <html>
// (first plain visit per session, no reduced motion, no hash). Dispatches 'xcx:intro-done' when the page is revealed.
;(function () {
  var html = document.documentElement
  if (!html.classList.contains('intro')) return
  window.__intro = 1
  var $ = function (id) { return document.getElementById(id) }
  var root = $('xl-root'), l1 = $('xl-l1'), l2 = $('xl-l2'), l3 = $('xl-l3'), fog = $('xl-fog'), glow = $('xl-glow')
  var logo = $('xl-logo'), top = $('xl-top'), bot = $('xl-bot'), ui = $('xl-ui'), count = $('xl-count'), fill = $('xl-fill')
  var snd = $('xl-snd'), sndLabel = $('xl-snd-label'), bars = [0, 1, 2, 3].map(function (i) { return $('xl-bar' + i) })
  var hero = document.querySelector('[data-intro-zoom]')
  if (!root) return finish()

  var D = 4200, L0 = 500, L1 = L0 + D, H = L1 + 900, X = H + 1300
  var KEYS = [[0, 0], [0.16, 0.1], [0.34, 0.37], [0.5, 0.45], [0.7, 0.8], [0.86, 0.9], [1, 1]]
  // Summit pixel in each source image, used to sit the logo on the peak.
  var PEAK = { desktop: { w: 1942, h: 809, x: 972, y: 280 }, mobile: { w: 1254, h: 1254, x: 632, y: 476 } }
  var clamp = function (v) { return Math.min(1, Math.max(0, v)) }
  var eo = function (t) { return 1 - Math.pow(1 - t, 3) }
  var eio = function (t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2 }
  var ex = function (t) { return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2 }
  function prog(t) {
    t = clamp(t)
    for (var i = 1; i < KEYS.length; i++) {
      var a = KEYS[i - 1], b = KEYS[i]
      if (t <= b[0]) { var u = (t - a[0]) / (b[0] - a[0]); return a[1] + (b[1] - a[1]) * u * u * (3 - 2 * u) }
    }
    return 1
  }

  function place() {
    var W = root.clientWidth, Hh = root.clientHeight, P = W / Hh <= 1 ? PEAK.mobile : PEAK.desktop
    var s = Math.max(W / P.w, Hh / P.h), x = (W - P.w * s) * 0.5 + P.x * s, y = (Hh - P.h * s) * 0.4 + P.y * s
    logo.style.left = glow.style.left = x + 'px'
    logo.style.top = y - Math.max(28, Hh * 0.06) + 'px'
    glow.style.top = y + 'px'
  }

  // Sound: synthesized drone and exit swoosh, on by default. Browsers keep audio suspended until the visitor
  // interacts, so it starts on the first pointer or key press (which also skips to the exit swoosh).
  var ac, master, noise, drone, audioOn = false
  function initAudio() {
    if (ac) return ac
    var AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return null
    ac = new AC()
    master = ac.createGain(); master.gain.value = 0
    var comp = ac.createDynamicsCompressor(); master.connect(comp); comp.connect(ac.destination)
    var len = ac.sampleRate * 3; noise = ac.createBuffer(2, len, ac.sampleRate)
    for (var ch = 0; ch < 2; ch++) {
      var d = noise.getChannelData(ch), b = 0
      for (var i = 0; i < len; i++) { b = (b + 0.02 * (Math.random() * 2 - 1)) / 1.02; d[i] = b * 3.5 }
    }
    return ac
  }
  function startDrone() {
    var n = ac.currentTime, out = ac.createGain(); out.gain.value = 0; out.connect(master)
    var lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 120; lp.Q.value = 0.7; lp.connect(out)
    var src = ac.createBufferSource(); src.buffer = noise; src.loop = true
    var ng = ac.createGain(); ng.gain.value = 0.5; src.connect(ng); ng.connect(lp)
    var o1 = ac.createOscillator(); o1.type = 'sine'; o1.frequency.value = 43.65
    var o2 = ac.createOscillator(); o2.type = 'triangle'; o2.frequency.value = 65.4; o2.detune.value = 6
    var g1 = ac.createGain(); g1.gain.value = 0.5; var g2 = ac.createGain(); g2.gain.value = 0.12
    o1.connect(g1); g1.connect(lp); o2.connect(g2); g2.connect(lp)
    ;[src, o1, o2].forEach(function (s) { s.start(n) })
    out.gain.setTargetAtTime(0.32, n, 0.9)
    drone = { out: out, lp: lp, srcs: [src, o1, o2] }
  }
  function stopDrone(fade) {
    if (!drone) return
    var d = drone, n = ac.currentTime; drone = null
    d.out.gain.cancelScheduledValues(n); d.out.gain.setTargetAtTime(0, n, fade / 4)
    d.srcs.forEach(function (s) { try { s.stop(n + fade + 0.2) } catch {} })
  }
  function swoosh() {
    if (!audioOn || ac.state !== 'running') return
    var n = ac.currentTime, T = 1.5
    var src = ac.createBufferSource(); src.buffer = noise
    var bp = ac.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 1.4
    bp.frequency.setValueAtTime(140, n); bp.frequency.exponentialRampToValueAtTime(1500, n + T * 0.42); bp.frequency.exponentialRampToValueAtTime(110, n + T)
    var ng = ac.createGain(); ng.gain.setValueAtTime(0.0001, n); ng.gain.exponentialRampToValueAtTime(1.1, n + T * 0.4); ng.gain.exponentialRampToValueAtTime(0.0001, n + T)
    src.connect(bp); bp.connect(ng)
    if (ac.createStereoPanner) {
      var pan = ac.createStereoPanner(); pan.pan.setValueAtTime(-0.35, n); pan.pan.linearRampToValueAtTime(0.35, n + T); ng.connect(pan); pan.connect(master)
    } else ng.connect(master)
    src.start(n); src.stop(n + T + 0.1)
    var o = ac.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(92, n); o.frequency.exponentialRampToValueAtTime(30, n + T * 0.9)
    var og = ac.createGain(); og.gain.setValueAtTime(0.0001, n); og.gain.exponentialRampToValueAtTime(0.9, n + T * 0.32); og.gain.exponentialRampToValueAtTime(0.0001, n + T * 1.1)
    o.connect(og); og.connect(master); o.start(n); o.stop(n + T * 1.2)
  }
  function setSound(on) {
    audioOn = on
    snd.setAttribute('aria-pressed', on ? 'true' : 'false')
    sndLabel.textContent = on ? 'Sound on' : 'Sound off'
    if (!on) { if (ac) master.gain.setTargetAtTime(0, ac.currentTime, 0.1); return }
    if (!initAudio()) return setSound(false)
    ac.resume().then(function () {
      master.gain.setTargetAtTime(0.8, ac.currentTime, 0.08)
      if (!drone && performance.now() - t0 < H) startDrone()
    }, function () {})
  }
  snd.addEventListener('click', function (e) { e.stopPropagation(); setSound(!audioOn) })
  function unlock() { if (audioOn && ac && ac.state !== 'running') setSound(true) }
  window.addEventListener('pointerdown', unlock, true)
  window.addEventListener('keydown', unlock, true)

  // Skip: any click on the loader or a key press jumps to the exit slide.
  function skip(e) {
    if (e && e.type === 'keydown' && e.key === 'Tab') return
    var t = performance.now() - t0
    if (t < H - 350) t0 = performance.now() - (H - 350)
  }
  root.addEventListener('click', skip)
  window.addEventListener('keydown', skip)
  window.addEventListener('resize', place)

  var t0 = performance.now(), grainAt = 0, swooshed = false, raf
  function tick(now) {
    var t = now - t0, m = eo(clamp(t / 2400))
    l1.style.opacity = m
    l1.style.transform = 'scale(' + (1.08 - 0.06 * m - 0.02 * clamp((t - 2400) / (D + 2000))) + ')'
    l1.style.filter = m < 1 ? 'blur(' + (1 - m) * 12 + 'px)' : 'none'
    l2.style.opacity = 0.5 * eo(clamp((t - 600) / 2000))
    l3.style.opacity = 0.2 * clamp(t / 600)
    if (now - grainAt > 80) { grainAt = now; l3.style.transform = 'translate(' + ((Math.random() * 80 - 40) | 0) + 'px,' + ((Math.random() * 80 - 40) | 0) + 'px)' }
    fog.style.transform = 'translateX(' + Math.sin(now / 9000) * 12 + '%)'
    var p = prog((t - L0) / D)
    top.style.strokeDashoffset = 1 - eio(clamp(p / 0.62))
    bot.style.strokeDashoffset = 1 - eio(clamp((p - 0.38) / 0.62))
    ui.style.opacity = eo(clamp((t - 300) / 800)) * (1 - clamp((t - L1 - 200) / 500))
    count.textContent = String(Math.round(p * 100)).padStart(3, '0')
    fill.style.transform = 'scaleX(' + p + ')'
    var hold = eo(clamp((t - L1) / 700))
    glow.style.opacity = (0.1 + p * 0.3 + hold * 0.5) * m
    logo.style.filter = 'drop-shadow(0 0 ' + (4 + hold * 22) + 'px rgba(255,255,255,' + (0.25 + hold * 0.45) + '))'
    logo.style.transform = 'translate(-50%,calc(-100% - ' + hold * 6 + 'px))'
    if (drone) drone.lp.frequency.setTargetAtTime(120 + p * 520 + hold * 300, ac.currentTime, 0.15)
    if (!swooshed && t >= H - 350) { swooshed = true; if (ac) { swoosh(); stopDrone(1) } }
    snd.style.opacity = eo(clamp((t - 300) / 800)) * (1 - clamp((t - H) / 400))
    for (var i = 0; i < 4; i++) bars[i].style.height = audioOn && ac && ac.state === 'running' ? 30 + 70 * Math.abs(Math.sin(now / (170 + i * 60) + i * 1.7)) + '%' : '30%'
    root.style.transform = 'translateY(' + -ex(clamp((t - H) / 1300)) * 100 + '%)'
    // The hero belongs to React: only touch it once hydrated (CSS holds scale(1.08) until then).
    if (hero && t > H + 200 && window.__hydrated) hero.style.transform = 'scale(' + (1.08 - 0.08 * eo(clamp((t - H - 200) / 1600))) + ')'
    if (t >= X) return finish()
    raf = requestAnimationFrame(tick)
  }

  function finish() {
    cancelAnimationFrame(raf)
    window.removeEventListener('keydown', skip)
    window.removeEventListener('pointerdown', unlock, true)
    window.removeEventListener('keydown', unlock, true)
    window.removeEventListener('resize', place)
    try { sessionStorage.setItem('xcx-intro', '1') } catch {}
    if (hero) hero.style.transform = ''
    html.classList.remove('intro')
    if (window.__lenis) window.__lenis.start()
    window.dispatchEvent(new Event('xcx:intro-done'))
    if (ac) setTimeout(function () { ac.close() }, 2000)
  }

  place()
  setSound(true)
  raf = requestAnimationFrame(tick)
})()
