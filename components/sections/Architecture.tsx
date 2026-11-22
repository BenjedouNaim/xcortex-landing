import { Icon } from '@/components/Icon'

const trustPills = [
  { icon: 'solar:cpu-bolt-linear', label: 'Full-Stack Architecture' },
  { icon: 'solar:shield-check-linear', label: 'Deterministic Guardrails' },
  { icon: 'solar:restart-circle-linear', label: 'Continuous Observability' },
] as const

const foundationCards = [
  {
    icon: 'solar:database-linear',
    title: 'Data & Retrieval',
    body: 'Structured & unstructured data processing, vector embeddings, and real-time retrieval.',
  },
  {
    icon: 'solar:cpu-bolt-linear',
    title: 'Intelligence & Context',
    body: 'LLMs, vision models, multi-agent memory, and dynamic context windows.',
  },
  {
    icon: 'solar:shield-check-linear',
    title: 'Logic & Validation',
    body: 'Deterministic business rules, verification pipelines, and security guardrails.',
  },
] as const

export function Architecture() {
  return (
    <section id="architecture" className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center max-w-5xl mx-auto mb-14">
        <p
          data-aura-reveal="fade-up"
          className="font-mono text-xs font-medium tracking-[-0.04em] text-neutral-900 mb-4"
        >
          THE SYSTEM
        </p>

        <h2
          data-aura-reveal="fade-up"
          data-aura-delay="100"
          className="text-4xl md:text-5xl md:leading-none lg:text-6xl lg:leading-none font-normal tracking-tight text-neutral-950 leading-[1.05] max-w-5xl mx-auto"
        >
          AI is one layer.
          <span className="block">The system is everything around it.</span>
        </h2>

        <p
          data-aura-reveal="fade-up"
          data-aura-delay="200"
          className="mt-6 text-base md:text-lg md:leading-7 leading-8 text-neutral-600 font-light max-w-3xl mx-auto"
        >
          Reliable AI products require more than a model. Data, retrieval, business logic, orchestration, interfaces,
          infrastructure, and evaluation all have to work together.
        </p>
      </div>

      {/* Light Architecture Workspace Panel */}
      <div className="relative overflow-hidden rounded-[2.75rem] bg-white/60 backdrop-blur-xl border border-white shadow-[0_30px_80px_-45px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,1)]">
        <div className="absolute top-[-35%] left-[-10%] w-[34rem] h-[34rem] rounded-full bg-neutral-400/20 blur-[6rem] pointer-events-none"></div>
        <div className="absolute bottom-[-40%] right-[-10%] w-[32rem] h-[32rem] rounded-full bg-neutral-400/15 blur-[6rem] pointer-events-none"></div>
        <div
          className="absolute inset-0 opacity-[0.16] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.10) 1px, transparent 0)',
            backgroundSize: '2rem 2rem',
          }}
        ></div>

        <div className="relative grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 p-6 md:p-10 lg:p-12">
          {/* Left Trust Copy */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 border border-neutral-200 px-3 py-1.5 text-xs text-neutral-950 font-light w-fit mb-7 shadow-[inset_0_1px_0_white]">
              <Icon icon="solar:layers-minimalistic-linear" className="text-base text-neutral-900" />
              Architecture &amp; System Design
            </div>

            <h3 className="text-3xl md:text-4xl md:leading-10 lg:text-[3.25rem] font-normal tracking-tight text-neutral-950 leading-[1.08] max-w-2xl">
              Engineered for precision,
              <span className="block whitespace-nowrap">built for production.</span>
            </h3>

            <p
              data-aura-reveal="fade-up"
              data-aura-delay="200"
              className="mt-6 text-base leading-8 text-neutral-600 font-light max-w-xl"
            >
              A model alone cannot run a business. We architect the full pipeline — from raw data and contextual
              embeddings to deterministic business rules and autonomous API actions.
            </p>

            {/* Trust Pills */}
            <div className="mt-9 flex flex-wrap gap-3">
              {trustPills.map((pill) => (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white px-4 py-2 text-xs text-neutral-600 font-light shadow-[0_8px_20px_-16px_rgba(0,0,0,0.24),inset_0_1px_0_white]"
                >
                  <Icon icon={pill.icon} className="text-base text-neutral-900" />
                  {pill.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Architecture Stack Visual */}
          <div className="relative">
            <div className="relative isolate overflow-hidden rounded-[2.35rem] bg-linear-to-b from-white to-neutral-50 text-neutral-900 border border-neutral-200/80 p-5 md:p-6 shadow-[0_30px_70px_-35px_rgba(0,0,0,0.42),0_10px_30px_-24px_rgba(0,0,0,0.24),inset_0_1px_0_white] [clip-path:inset(0_round_2.35rem)]">
              <div className="absolute top-[-35%] right-[-20%] z-0 w-[22rem] h-[22rem] rounded-full bg-neutral-300/45 blur-[4.5rem] pointer-events-none"></div>
              <div className="absolute bottom-[-40%] left-[-20%] z-0 w-[20rem] h-[20rem] rounded-full blur-[4rem] pointer-events-none"></div>

              <div className="relative z-10">
                {/* Top Browser Bar */}
                <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-400"></span>
                  </div>
                  <span className="font-mono text-[10px] text-neutral-500 tracking-[-0.04em]">
                    SYSTEM ARCHITECTURE
                  </span>
                </div>

                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-xs text-neutral-400 font-light mb-1">Xcortex Full-Stack Pipeline</p>
                    <h3 className="text-2xl md:text-3xl font-normal tracking-tight text-neutral-950">
                      Data · Intelligence · Logic · Action
                    </h3>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center shadow-[inset_0_1px_0_white]">
                    <Icon icon="solar:layers-minimalistic-linear" className="text-2xl text-neutral-900" />
                  </div>
                </div>

                {/* Stack Layers */}
                <div className="grid gap-3">
                  {/* Layer 1: Data & Intelligence */}
                  <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-4 shadow-[inset_0_1px_0_white]">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center">
                          <Icon icon="solar:database-linear" className="text-lg text-neutral-900" />
                        </div>
                        <div>
                          <p className="text-sm font-normal text-neutral-900">DATA &amp; CONTEXT</p>
                          <p className="mt-0.5 text-xs text-neutral-400 font-light font-mono">
                            Documents · Databases · Retrieval · Vector Embeddings
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-neutral-600 bg-white border border-neutral-200 rounded-full px-2.5 py-1 font-mono">
                        Layer 01
                      </span>
                    </div>
                  </div>

                  {/* Layer 2: Intelligence & Logic */}
                  <div className="rounded-2xl bg-white border border-neutral-200 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.03),inset_0_1px_0_white]">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center">
                          <Icon icon="solar:cpu-bolt-linear" className="text-lg text-neutral-900" />
                        </div>
                        <div>
                          <p className="text-sm font-normal text-neutral-900">INTELLIGENCE &amp; LOGIC</p>
                          <p className="mt-0.5 text-xs text-neutral-400 font-light font-mono">
                            LLM Models · Reasoning · Rules · Business Validation
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-neutral-600 bg-neutral-50 border border-neutral-200 rounded-full px-2.5 py-1 font-mono">
                        Layer 02
                      </span>
                    </div>
                  </div>

                  {/* Layer 3: Action & Product */}
                  <div className="rounded-2xl bg-linear-to-b from-neutral-100 to-white text-neutral-900 border border-neutral-200 p-4 shadow-[0_12px_28px_-20px_rgba(0,0,0,0.28),inset_0_1px_0_white]">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-white border border-white flex items-center justify-center shadow-[inset_0_1px_0_white]">
                          <Icon icon="solar:bolt-circle-linear" className="text-lg text-neutral-900" />
                        </div>
                        <div>
                          <p className="text-sm font-normal text-neutral-900">ACTION &amp; PRODUCT</p>
                          <p className="mt-0.5 text-xs text-neutral-500 font-light font-mono">
                            Tool Calling · Webhooks · Workflows · UI Dashboards
                          </p>
                        </div>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.25)] shadow-[0_0_0_5px_rgba(0,0,0,0.06)]"></span>
                    </div>
                  </div>
                </div>

                {/* Bottom Telemetry Bar */}
                <div className="mt-4 rounded-2xl bg-white border border-neutral-200 px-4 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.03),inset_0_1px_0_white]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <p className="text-xs font-normal text-neutral-900">Continuous Evaluation &amp; Telemetry</p>
                      <p className="mt-1 text-[11px] text-neutral-400 font-light">
                        Model drift, latency, and output validation monitored 24/7.
                      </p>
                    </div>

                    <a
                      href="#approach"
                      className="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xs text-neutral-950 bg-neutral-100 border border-neutral-200 shadow-[inset_0_1px_0_white]"
                    >
                      Explore architecture
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Foundation Cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 md:p-8 pt-4 md:pt-2">
          {foundationCards.map((card) => (
            <div
              key={card.title}
              data-aura-reveal="fade-up"
              className="relative overflow-hidden border border-white rounded-[2rem] p-6 shadow-[0_18px_42px_-30px_rgba(0,0,0,0.38),0_4px_14px_-12px_rgba(0,0,0,0.20),inset_0_1px_0_white]"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-neutral-300/60 to-transparent"></div>
              <div className="w-11 h-11 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center mb-5 shadow-[inset_0_1px_0_white]">
                <Icon icon={card.icon} className="text-2xl text-neutral-900" />
              </div>
              <h3 className="text-lg font-normal tracking-tight text-neutral-950">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-500 font-light">{card.body}</p>
            </div>
          ))}

          {/* Foundation Card 04 */}
          <div className="bg-linear-to-b from-neutral-100 to-white border border-neutral-200 rounded-[2rem] p-6 shadow-[0_16px_38px_-26px_rgba(0,0,0,0.28),inset_0_1px_0_white]">
            <div className="w-11 h-11 rounded-2xl bg-white border border-white flex items-center justify-center mb-5 shadow-[inset_0_1px_0_white]">
              <Icon icon="solar:bolt-circle-linear" className="text-2xl text-neutral-900" />
            </div>
            <h3 className="text-lg font-normal tracking-tight text-neutral-950">Action &amp; Interfaces</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-600 font-light">
              Tool execution, webhooks, SaaS APIs, and bespoke software interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
