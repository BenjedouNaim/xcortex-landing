import { Icon } from '@/components/Icon'

const steps = [
  {
    n: '01',
    icon: 'solar:magnifer-linear',
    title: 'Understand',
    body: 'Map the problem, workflow, data, users, constraints, and desired outcome.',
    tag: 'Context defined',
  },
  {
    n: '02',
    icon: 'solar:ruler-angular-linear',
    title: 'Design',
    body: 'Define the architecture, intelligence layer, integrations, data flow, and system boundaries.',
    tag: 'System designed',
  },
  {
    n: '03',
    icon: 'solar:code-square-linear',
    title: 'Engineer',
    body: 'Build the software, AI components, automation, APIs, and infrastructure required for production.',
    tag: 'System built',
  },
  {
    n: '04',
    icon: 'solar:restart-circle-linear',
    title: 'Evolve',
    body: 'Test, evaluate, monitor, improve, and extend the system as real usage creates new requirements.',
    tag: 'System evolving',
  },
] as const

export function Workflow() {
  return (
    <section id="workflow" className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Intro */}
      <div className="text-center max-w-5xl mx-auto mb-16">
        <p
          data-aura-reveal="fade-up"
          className="font-mono text-xs font-medium tracking-[-0.04em] text-neutral-900 mb-4"
        >
          HOW WE ENGINEER
        </p>

        <h2
          data-aura-reveal="fade-up"
          data-aura-delay="100"
          className="text-4xl md:text-5xl md:leading-none lg:text-6xl lg:leading-none font-normal tracking-tight text-neutral-950 leading-[1.05] max-w-5xl mx-auto"
        >
          From problem
          <span className="block">to production.</span>
        </h2>

        <p
          data-aura-reveal="fade-up"
          data-aura-delay="200"
          className="mt-6 max-w-3xl mx-auto text-base md:text-lg md:leading-7 leading-8 text-neutral-600 font-light"
        >
          We do not start with a model. We start with the problem, design the system around it, then engineer the
          smallest reliable solution that can create real value.
        </p>
      </div>

      {/* Timeline Shell */}
      <div
        data-aura-reveal="scale-up"
        className="relative overflow-hidden rounded-[2.75rem] bg-white/55 backdrop-blur-xl border border-white shadow-[0_30px_80px_-45px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,1)] px-6 md:px-10 pt-16 pb-12"
      >
        {/* Soft background glows */}
        <div className="absolute top-[-35%] left-[10%] w-[32rem] h-[32rem] rounded-full bg-neutral-400/20 blur-[6rem] pointer-events-none"></div>
        <div className="absolute bottom-[-35%] right-[5%] w-[30rem] h-[30rem] rounded-full bg-neutral-400/15 blur-[6rem] pointer-events-none"></div>
        <div
          className="absolute inset-0 opacity-[0.16] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.10) 1px, transparent 0)',
            backgroundSize: '2rem 2rem',
          }}
        ></div>

        {/* Timeline Area */}
        <div className="relative">
          {/* Animated Connection Line */}
          <div className="hidden lg:block absolute left-0 right-0 top-[3.05rem] h-px">
            <div className="absolute inset-x-12 top-0 border-t border-dashed border-neutral-300/60"></div>
            <div className="absolute top-[-1px] left-12 h-[2px] w-52 bg-linear-to-r from-transparent via-neutral-900/70 to-transparent rounded-full animate-[auraConnectionFlow_4.5s_linear_infinite]"></div>
          </div>

          {/* Steps Grid */}
          <div
            data-aura-stagger=""
            className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {steps.map((step) => (
              <div
                key={step.n}
                data-aura-reveal="fade-up"
                className="group relative flex flex-col items-center text-center"
              >
                <div className="h-24 w-full relative flex items-center justify-center">
                  <span className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-b from-white to-neutral-100 border border-white shadow-[0_16px_34px_-20px_rgba(0,0,0,0.55),inset_0_1px_0_white]">
                    <span className="absolute inset-1 rounded-full bg-linear-to-b from-neutral-900 to-black border border-neutral-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_10px_22px_rgba(0,0,0,0.28)]"></span>
                    <span className="relative font-mono text-sm font-semibold text-white">{step.n}</span>
                  </span>
                </div>

                <div className="mt-4 rounded-[2rem] bg-white/70 border border-white p-6 min-h-[15rem] shadow-[0_16px_36px_-26px_rgba(0,0,0,0.32),inset_0_1px_0_white] group-hover:-translate-y-1 group-hover:bg-white/85 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 mx-auto rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center shadow-[inset_0_1px_0_white] mb-5">
                      <Icon icon={step.icon} className="text-2xl text-neutral-900" />
                    </div>
                    <h3 className="text-xl font-normal tracking-tight text-neutral-950">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-neutral-500 font-light">{step.body}</p>
                  </div>

                  <div className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-100 border border-neutral-200 px-3 py-1.5 text-[11px] text-neutral-950 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
                    {step.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-12 flex flex-col sm:flex-row justify-center items-center gap-3">
          <a
            href="#systems"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-linear-to-b from-white to-neutral-50 border border-neutral-200 text-neutral-700 text-sm font-normal shadow-[0_6px_16px_rgba(0,0,0,0.06),inset_0_1px_0_white] hover:from-neutral-50 hover:to-neutral-100 hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore our systems →
          </a>

          <a
            href="#final-cta"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-linear-to-b from-neutral-900 to-black border border-neutral-800 text-white text-sm font-normal shadow-[0_10px_24px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.35)] hover:from-neutral-800 hover:to-neutral-900 hover:-translate-y-0.5 transition-all duration-300"
          >
            Start a project
            <Icon icon="solar:arrow-right-linear" className="text-lg" />
          </a>
        </div>
      </div>
    </section>
  )
}
