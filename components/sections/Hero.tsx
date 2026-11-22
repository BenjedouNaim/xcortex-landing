import { Icon } from '@/components/Icon'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative flex min-h-[620px] w-full items-center overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28 lg:min-h-[720px]">
      <div data-intro-zoom className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={70}
          preload
          fetchPriority="high"
          data-scroll-speed="-1.5"
          className="h-full w-full object-cover object-[75%_center] opacity-90 select-none lg:object-right lg:opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/90 to-transparent lg:w-3/5 lg:via-white/70"></div>
        <div className="absolute inset-0 bg-linear-to-b from-white/90 via-white/40 to-white lg:hidden"></div>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-2xl text-center lg:text-left">
          <div
            data-aura-reveal="fade-up"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white/90 px-3.5 py-2 shadow-[0_6px_18px_-12px_rgba(0,0,0,0.15),inset_0_1px_0_white] backdrop-blur-md"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 bg-linear-to-b from-neutral-100 to-white shadow-[inset_0_1px_0_white]">
              <Icon
                icon="solar:cpu-bolt-linear"
                className="text-base text-neutral-900"
              />
            </span>
            <span className="font-mono text-xs font-medium tracking-[-0.04em] text-neutral-600">
              XCORTEX / AI · AUTOMATION · ENGINEERING
            </span>
          </div>
          <h1
            data-scroll-speed="0.5"
            data-aura-reveal="fade-up"
            data-aura-delay="100"
            className="text-[2.75rem] leading-[0.92] font-light tracking-[-0.075em] text-neutral-950 sm:text-[4rem] md:text-[4.8rem] lg:text-[5.6rem] xl:text-[6.2rem]"
            style={{ textShadow: '0 1px 1px rgba(255,255,255,0.8)' }}
          >
            <span className="sr-only">
              Xcortex, an AI software, automation and engineering agency
            </span>
            <span className="block">Intelligence.</span>
            <span className="mt-1 block sm:mt-2">Engineered.</span>
            <span className="mt-3 block sm:mt-4">
              <span
                id="hero-pill-track"
                className="max-w-full rounded-xl px-3.5 py-1.5 sm:rounded-2xl sm:px-5 sm:py-2 md:rounded-[1.25rem] md:px-6 md:py-2.5"
              >
                <span id="hero-pill-box" aria-hidden="true"></span>
                <span
                  id="hero-pill-text"
                  className="text-[1.4rem] leading-tight font-normal tracking-[-0.04em] whitespace-nowrap sm:text-[2.2rem] md:text-[2.85rem] lg:text-[3.35rem] xl:text-[3.75rem]"
                >
                  For what comes next.
                </span>
              </span>
            </span>
          </h1>
          <p
            data-aura-reveal="fade-up"
            data-aura-delay="200"
            className="mx-auto mt-6 max-w-xl text-base leading-8 font-light text-neutral-600 md:mt-8 md:text-lg md:leading-7 lg:mx-0"
          >
            We build AI-powered software, intelligent automation, and production
            systems that help companies understand more, automate more, and move
            faster.
          </p>
          <div
            data-aura-reveal="fade-up"
            data-aura-delay="300"
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-10 lg:justify-start"
          >
            <a
              href="#final-cta"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-800 bg-linear-to-b from-neutral-900 to-black px-6 py-3.5 text-sm font-normal text-white shadow-[0_10px_24px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:from-neutral-800 hover:to-neutral-900 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.18)] sm:w-auto"
            >
              Start a project
              <Icon icon="solar:arrow-right-linear" className="text-lg" />
            </a>
            <a
              href="#systems"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-200 bg-linear-to-b from-white to-neutral-50 px-6 py-3.5 text-sm font-normal text-neutral-700 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_0_white] transition-all duration-300 hover:-translate-y-0.5 hover:from-neutral-50 hover:to-neutral-100 sm:w-auto"
            >
              Explore our systems
              <Icon
                icon="solar:arrow-right-linear"
                className="text-lg text-neutral-900"
              />
            </a>
          </div>
          <div
            data-aura-reveal="fade-in"
            data-aura-delay="500"
            className="mt-8 flex flex-col flex-wrap items-center justify-center gap-3 text-xs font-light text-neutral-500 sm:flex-row lg:justify-start"
          >
            <span className="inline-flex items-center gap-2">
              <Icon
                icon="solar:cpu-bolt-linear"
                className="text-base text-neutral-900"
              />
              AI-native engineering
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-neutral-300 sm:block"></span>
            <span className="inline-flex items-center gap-2">
              <Icon
                icon="solar:server-square-linear"
                className="text-base text-neutral-900"
              />
              Production-ready systems
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-neutral-300 sm:block"></span>
            <span className="inline-flex items-center gap-2">
              <Icon
                icon="solar:layers-minimalistic-linear"
                className="text-base text-neutral-900"
              />
              Built around your business
            </span>
          </div>
          <div
            id="hero-scroll-hint"
            style={{ transition: 'opacity 0.4s ease, transform 0.4s ease' }}
            className="mt-10 flex flex-col items-center justify-center gap-2 lg:items-start"
          >
            <div className="h-px w-32 overflow-hidden rounded-full bg-neutral-200">
              <div
                id="hero-scroll-progress"
                style={{
                  width: '100%',
                  height: '100%',
                  background: '#171717',
                  borderRadius: '9999px',
                  transform: 'scaleX(0)',
                  transformOrigin: '0 50%',
                }}
              ></div>
            </div>
            <span className="font-mono text-[10px] font-light tracking-[-0.02em] text-neutral-400">
              Scroll to reveal
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
