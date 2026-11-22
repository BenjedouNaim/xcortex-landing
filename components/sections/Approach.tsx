import { Icon } from '@/components/Icon'
import { faq } from '@/content/faq'

const principles = [
  'Understand — Start with the problem, not tech.',
  'Reduce — Remove unnecessary complexity first.',
  'Engineer — Turn architecture into robust code.',
  'Automate — Let systems handle repetitive work.',
  'Evolve — Measure what matters & iterate.',
]

const faqIcons = [
  'solar:question-circle-linear',
  'solar:cpu-bolt-linear',
  'solar:tuning-2-linear',
  'solar:bolt-circle-linear',
  'solar:server-square-linear',
  'solar:layers-minimalistic-linear',
  'solar:rocket-linear',
]

// Server-rendered accordion; public/scripts/motion.js toggles it (aria-expanded, is-open, max-height).
function FaqList() {
  return (
    <div id="faq" className="space-y-3">
      {faq.map(({ q, a }, i) => (
        <div
          key={q}
          data-aura-reveal="fade-up"
          className="faq-item rounded-[2rem] border border-white shadow-[0_14px_34px_-26px_rgba(0,0,0,0.32),inset_0_1px_0_white] transition-all"
        >
          <h3>
            <button
              type="button"
              id={`faq-button-${i}`}
              aria-expanded="false"
              aria-controls={`faq-panel-${i}`}
              className="faq-trigger flex w-full cursor-pointer items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-100 shadow-[inset_0_1px_0_white]">
                  <Icon icon={faqIcons[i]} className="text-xl text-neutral-900" />
                </span>
                <span className="text-base font-normal tracking-tight text-neutral-950 md:text-lg">
                  {q}
                </span>
              </span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-linear-to-b from-white to-neutral-50 shadow-[0_4px_10px_rgba(0,0,0,0.05),inset_0_1px_0_white]">
                <Icon
                  icon="solar:add-circle-linear"
                  className="faq-icon text-xl text-neutral-500"
                />
              </span>
            </button>
          </h3>
          <div
            id={`faq-panel-${i}`}
            role="region"
            aria-labelledby={`faq-button-${i}`}
            className="faq-body"
          >
            <div className="faq-body-inner px-5 pb-6 md:px-6 md:pl-[5.75rem]">
              <p className="text-sm leading-7 font-light text-neutral-600 md:text-base md:leading-6">
                {a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function Approach() {
  return (
    <section id="approach" className="mx-auto max-w-7xl px-6 py-20">
      {/* Section Intro */}
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p
          data-aura-reveal="fade-up"
          className="mb-4 font-mono text-xs font-medium tracking-[-0.04em] text-neutral-900"
        >
          HOW WE THINK &amp; FAQ
        </p>

        <h2
          data-aura-reveal="fade-up"
          data-aura-delay="100"
          className="text-4xl leading-[1.05] font-normal tracking-tight text-neutral-950 md:text-5xl md:leading-none lg:text-6xl lg:leading-none"
        >
          Think deeply.
          <span className="block">Build precisely.</span>
        </h2>

        <p
          data-aura-reveal="fade-up"
          data-aura-delay="200"
          className="mt-6 text-base leading-8 font-light text-neutral-600 md:text-lg md:leading-7"
        >
          Serious questions. Clear answers. How Xcortex designs, builds, and
          maintains production systems.
        </p>
      </div>

      {/* FAQ & Principles Shell */}
      <div className="relative overflow-hidden rounded-[2.75rem] border border-white bg-white/60 p-4 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-xl md:p-6 lg:p-8">
        <div className="pointer-events-none absolute top-[-35%] left-[-10%] h-[34rem] w-[34rem] rounded-full bg-neutral-400/20 blur-[6rem]"></div>
        <div className="pointer-events-none absolute right-[-10%] bottom-[-40%] h-[32rem] w-[32rem] rounded-full bg-neutral-400/15 blur-[6rem]"></div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.10) 1px, transparent 0)',
            backgroundSize: '2rem 2rem',
          }}
        ></div>

        <div className="relative grid items-start gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
          {/* Left Approach / Principles Card */}
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-linear-to-b from-[#171717] to-[#0a0a0a] p-6 text-white shadow-[0_24px_60px_-35px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(255,255,255,0.13)] md:p-8">
            <div
              className="absolute inset-0 opacity-[0.10]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
                backgroundSize: '34px 34px',
              }}
            ></div>
            <div className="pointer-events-none absolute top-[-35%] right-[-25%] h-[18rem] w-[18rem] rounded-full bg-neutral-800/15 blur-[4.5rem]"></div>
            <div className="pointer-events-none absolute bottom-[-35%] left-[-20%] h-[16rem] w-[16rem] rounded-full bg-neutral-400/10 blur-[4rem]"></div>

            <div className="relative">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
                <Icon
                  icon="solar:compass-linear"
                  className="text-2xl text-neutral-300"
                />
              </div>

              <p className="mb-4 font-mono text-xs font-medium tracking-[-0.04em] text-neutral-300">
                HOW WE THINK
              </p>

              <h3 className="text-3xl leading-[1.08] font-normal tracking-tight text-white md:text-4xl md:leading-10">
                5 Principles of
                <span className="block">Engineering.</span>
              </h3>

              <p className="mt-5 text-sm leading-7 font-light text-neutral-300 md:text-base md:leading-6">
                We do not sell AI hype. We engineer reliable software that
                solves real operational challenges.
              </p>

              {/* Principles Checklist */}
              <div className="mt-8 grid gap-2.5 font-mono" id="principles-list">
                {principles.map((text, i) => (
                  <div
                    key={text}
                    className="principle-item rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-neutral-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs text-white">{text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#final-cta"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white bg-white px-5 py-3 text-sm font-normal text-neutral-950 shadow-[inset_0_1px_0_white] transition-all hover:-translate-y-0.5 hover:bg-neutral-100"
                >
                  Start a project
                  <Icon icon="solar:arrow-right-linear" className="text-lg" />
                </a>

                <a
                  href="#systems"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.07] px-5 py-3 text-sm font-normal text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all hover:bg-white/[0.1]"
                >
                  Explore Systems
                </a>
              </div>
            </div>
          </div>

          {/* Right Accordion List (7 FAQ Questions) */}
          <FaqList />
        </div>
      </div>
    </section>
  )
}
