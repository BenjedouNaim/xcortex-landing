import { Icon } from '@/components/Icon'
import { site } from '@/content/site'

export function FinalCta() {
  return (
    <section id="final-cta" className="mx-auto max-w-7xl px-6 pt-14 pb-20">
      {/* Transition Copy Between FAQ + CTA */}
      <div className="relative mx-auto mb-10 max-w-3xl text-center">
        <div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-linear-to-b from-white/0 via-neutral-200/20 to-transparent blur-2xl"></div>

        <p className="relative mb-3 font-mono text-xs font-medium tracking-[-0.04em] text-neutral-900">
          NEXT SYSTEM
        </p>

        <h2 className="relative text-3xl leading-[1.08] font-normal tracking-tight text-neutral-950 md:text-4xl md:leading-10">
          Build something
          <span className="block">intelligent.</span>
        </h2>

        <p className="relative mt-4 text-sm leading-7 font-light text-neutral-600 md:text-base md:leading-6">
          Have a workflow worth automating, a product worth building, or a
          system that should understand more?
        </p>
      </div>

      {/* Black CTA Shell */}
      <div
        data-aura-reveal="scale-up"
        className="relative isolate overflow-hidden rounded-[2.75rem] border border-neutral-800 bg-linear-to-b from-neutral-900 via-neutral-950 to-black text-white shadow-[0_40px_90px_-45px_rgba(0,0,0,0.72),inset_0_1px_0_rgba(255,255,255,0.34)] [clip-path:inset(0_round_2.75rem)]"
      >
        {/* Surface texture */}
        <div
          className="absolute inset-0 z-0 opacity-[0.13]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)',
            backgroundSize: '2rem 2rem',
          }}
        ></div>

        {/* Depth glows */}
        <div className="pointer-events-none absolute top-[-35%] left-[-12%] z-0 h-[34rem] w-[34rem] rounded-full blur-[6rem]"></div>
        <div className="pointer-events-none absolute right-[-12%] bottom-[-40%] z-0 h-[32rem] w-[32rem] rounded-full bg-black/25 blur-[6rem]"></div>
        <div className="pointer-events-none absolute top-[30%] left-[48%] z-0 h-[20rem] w-[20rem] rounded-full blur-[5rem]"></div>

        {/* Floating Bubble: Top Left */}
        <div className="absolute top-12 left-10 z-20 hidden rotate-[-5deg] animate-[auraFinalFloatOne_5.5s_ease-in-out_infinite] md:block">
          <div className="min-w-[12.5rem] rounded-2xl border border-white bg-white px-4 py-3 shadow-[0_28px_60px_-24px_rgba(0,0,0,0.52),inset_0_1px_0_white]">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 shadow-[inset_0_1px_0_white]">
                <Icon
                  icon="solar:cpu-bolt-linear"
                  className="text-lg text-neutral-900"
                />
              </div>

              <div>
                <p className="text-xs font-normal text-neutral-950">
                  System deployed
                </p>
                <p className="text-xs font-light text-neutral-500">
                  Autonomous &amp; operational
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Bubble: Bottom Right */}
        <div className="absolute right-10 bottom-12 z-20 hidden rotate-[5deg] animate-[auraFinalFloatTwo_6.25s_ease-in-out_infinite] md:block">
          <div className="min-w-[12.5rem] rounded-2xl border border-white bg-white px-4 py-3 shadow-[0_28px_60px_-24px_rgba(0,0,0,0.52),inset_0_1px_0_white]">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 shadow-[inset_0_1px_0_white]">
                <Icon
                  icon="solar:check-circle-linear"
                  className="text-lg text-neutral-950"
                />
              </div>

              <div>
                <p className="text-xs font-normal text-neutral-950">
                  Value unlocked
                </p>
                <p className="text-xs font-light text-neutral-500">
                  Measurable operational ROI
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Content */}
        <div className="relative z-10 px-6 py-24 text-center md:px-12 md:py-28">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-3.5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
            <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_0_5px_rgba(255,255,255,0.14)]"></span>
            <span className="font-mono text-xs font-medium tracking-[-0.04em] text-neutral-200">
              ENGINEERED FOR WHAT COMES NEXT
            </span>
          </div>

          <h2
            data-aura-reveal="fade-up"
            data-aura-delay="100"
            className="mx-auto max-w-5xl text-4xl leading-[1.05] font-normal tracking-tight text-white md:text-5xl md:leading-none lg:text-6xl lg:leading-none"
          >
            Ready to engineer
            <span className="block">your next system?</span>
          </h2>

          <p
            data-aura-reveal="fade-up"
            data-aura-delay="200"
            className="mx-auto mt-6 max-w-3xl text-base leading-8 font-light text-neutral-300 md:text-lg md:leading-7"
          >
            Let’s discuss your architecture, data, and workflows. We will design
            and engineer the exact system your business needs.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white bg-linear-to-b from-white to-neutral-100 px-7 py-3.5 text-sm font-normal text-neutral-950 shadow-[0_14px_30px_rgba(0,0,0,0.18),inset_0_1px_0_white] transition-all duration-300 hover:-translate-y-0.5 hover:from-white hover:to-white active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.08)] sm:w-auto"
            >
              Start a project
              <Icon icon="solar:arrow-right-linear" className="text-lg" />
            </a>

            <a
              href="#systems"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-sm font-normal text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto"
            >
              Talk to Xcortex
            </a>
          </div>

          {/* Small Trust Row */}
          <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-3 text-xs font-light text-neutral-400 sm:flex-row">
            <span className="inline-flex items-center gap-2">
              <Icon
                icon="solar:cpu-bolt-linear"
                className="text-base text-white"
              />
              AI-native
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block"></span>

            <span className="inline-flex items-center gap-2">
              <Icon
                icon="solar:code-square-linear"
                className="text-base text-white"
              />
              Engineering-led
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block"></span>

            <span className="inline-flex items-center gap-2">
              <Icon
                icon="solar:server-square-linear"
                className="text-base text-white"
              />
              Built for production
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
