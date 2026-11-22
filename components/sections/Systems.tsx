import { Icon } from '@/components/Icon'

export function Systems() {
  return (
    <section id="systems" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-14 max-w-5xl text-center">
        <p
          data-aura-reveal="fade-up"
          className="mb-4 font-mono text-xs font-medium tracking-[-0.04em] text-neutral-900"
        >
          WHAT WE BUILD
        </p>
        <h2
          data-aura-reveal="fade-up"
          data-aura-delay="100"
          className="mx-auto max-w-5xl text-4xl leading-[1.05] font-normal tracking-tight text-neutral-950 md:text-5xl md:leading-none lg:text-6xl lg:leading-none"
        >
          Intelligent systems.
          <span className="block">Built for real work.</span>
        </h2>
        <p
          data-aura-reveal="fade-up"
          data-aura-delay="200"
          className="mx-auto mt-6 max-w-3xl text-base leading-8 font-light text-neutral-600 md:text-lg md:leading-7"
        >
          We combine AI, software engineering, automation, and data into systems
          that are useful in production — not just impressive in a demo.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div
          data-aura-reveal="fade-up"
          className="flex flex-col justify-between rounded-[2rem] border border-white p-6 shadow-[0_10px_28px_-18px_rgba(0,0,0,0.24),inset_0_1px_0_white] transition-all duration-300 hover:-translate-y-1"
        >
          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-100 shadow-[inset_0_1px_0_white]">
                <Icon
                  icon="solar:document-text-linear"
                  className="text-2xl text-neutral-900"
                />
              </div>
              <span className="rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-1 font-mono text-[10px] text-neutral-900">
                Perception &amp; RAG
              </span>
            </div>
            <h3 className="mt-6 text-xl font-normal tracking-tight text-neutral-950">
              Understand
            </h3>
            <p className="mt-3 text-sm leading-6 font-light text-neutral-500">
              Systems that can read, interpret, classify, search, and reason
              across complex information.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-1.5 border-t border-neutral-100 pt-4">
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              Document Intelligence
            </span>
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              RAG
            </span>
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              LLMs
            </span>
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              Vision AI
            </span>
          </div>
        </div>
        <div
          data-aura-reveal="fade-up"
          className="flex flex-col justify-between rounded-[2rem] border border-white p-6 shadow-[0_10px_28px_-18px_rgba(0,0,0,0.24),inset_0_1px_0_white] transition-all duration-300 hover:-translate-y-1"
        >
          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-100 shadow-[inset_0_1px_0_white]">
                <Icon
                  icon="solar:cpu-bolt-linear"
                  className="text-2xl text-neutral-900"
                />
              </div>
              <span className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 font-mono text-[10px] text-neutral-500 shadow-[inset_0_1px_0_white]">
                Reasoning &amp; Logic
              </span>
            </div>
            <h3 className="mt-6 text-xl font-normal tracking-tight text-neutral-950">
              Decide
            </h3>
            <p className="mt-3 text-sm leading-6 font-light text-neutral-500">
              AI systems that combine context, rules, models, and business logic
              to produce reliable decisions.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-1.5 border-t border-neutral-100 pt-4">
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              AI Agents
            </span>
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              Decision Systems
            </span>
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              Routing
            </span>
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              BI
            </span>
          </div>
        </div>
        <div
          data-aura-reveal="fade-up"
          className="flex flex-col justify-between rounded-[2rem] border border-white p-6 shadow-[0_10px_28px_-18px_rgba(0,0,0,0.24),inset_0_1px_0_white] transition-all duration-300 hover:-translate-y-1"
        >
          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-100 shadow-[inset_0_1px_0_white]">
                <Icon
                  icon="solar:bolt-circle-linear"
                  className="text-2xl text-neutral-900"
                />
              </div>
              <span className="rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-1 font-mono text-[10px] text-neutral-900">
                Execution &amp; Flow
              </span>
            </div>
            <h3 className="mt-6 text-xl font-normal tracking-tight text-neutral-950">
              Act
            </h3>
            <p className="mt-3 text-sm leading-6 font-light text-neutral-500">
              Autonomous workflows that connect intelligence to the tools and
              systems where work actually happens.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-1.5 border-t border-neutral-100 pt-4">
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              AI Automation
            </span>
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              Agentic Workflows
            </span>
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              Tool Calling
            </span>
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              APIs
            </span>
          </div>
        </div>
        <div
          data-aura-reveal="fade-up"
          className="flex flex-col justify-between rounded-[2rem] border border-white p-6 shadow-[0_10px_28px_-18px_rgba(0,0,0,0.24),inset_0_1px_0_white] transition-all duration-300 hover:-translate-y-1"
        >
          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-100 shadow-[inset_0_1px_0_white]">
                <Icon
                  icon="solar:layers-minimalistic-linear"
                  className="text-2xl text-neutral-900"
                />
              </div>
              <span className="rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-1 font-mono text-[10px] text-neutral-900">
                Full-Stack Systems
              </span>
            </div>
            <h3 className="mt-6 text-xl font-normal tracking-tight text-neutral-950">
              Build
            </h3>
            <p className="mt-3 text-sm leading-6 font-light text-neutral-500">
              Production-grade software engineered around your users, data,
              infrastructure, and business.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-1.5 border-t border-neutral-100 pt-4">
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              SaaS Platforms
            </span>
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              Web Apps
            </span>
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              Internal Tools
            </span>
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              Cloud
            </span>
          </div>
        </div>
        <div
          data-aura-reveal="fade-up"
          className="flex flex-col justify-between rounded-[2rem] border border-white p-6 shadow-[0_10px_28px_-18px_rgba(0,0,0,0.24),inset_0_1px_0_white] transition-all duration-300 hover:-translate-y-1"
        >
          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-100 shadow-[inset_0_1px_0_white]">
                <Icon
                  icon="solar:tuning-2-linear"
                  className="text-2xl text-neutral-900"
                />
              </div>
              <span className="rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-1 font-mono text-[10px] text-neutral-900">
                Integration Layer
              </span>
            </div>
            <h3 className="mt-6 text-xl font-normal tracking-tight text-neutral-950">
              Connect
            </h3>
            <p className="mt-3 text-sm leading-6 font-light text-neutral-500">
              Intelligence becomes useful when it can work across the systems
              your business already uses.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-1.5 border-t border-neutral-100 pt-4">
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              APIs
            </span>
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              Databases
            </span>
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              CRMs
            </span>
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              Cloud Services
            </span>
          </div>
        </div>
        <div
          data-aura-reveal="fade-up"
          className="flex flex-col justify-between rounded-[2rem] border border-white p-6 shadow-[0_10px_28px_-18px_rgba(0,0,0,0.24),inset_0_1px_0_white] transition-all duration-300 hover:-translate-y-1"
        >
          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-100 shadow-[inset_0_1px_0_white]">
                <Icon
                  icon="solar:restart-circle-linear"
                  className="text-2xl text-neutral-600"
                />
              </div>
              <span className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 font-mono text-[10px] text-neutral-500 shadow-[inset_0_1px_0_white]">
                Continuous Delivery
              </span>
            </div>
            <h3 className="mt-6 text-xl font-normal tracking-tight text-neutral-950">
              Evolve
            </h3>
            <p className="mt-3 text-sm leading-6 font-light text-neutral-500">
              Systems designed to be monitored, improved, and extended as your
              business and technology change.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-1.5 border-t border-neutral-100 pt-4">
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              Observability
            </span>
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              Evaluation
            </span>
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              Optimization
            </span>
            <span className="rounded-sm bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
              CI/CD
            </span>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-linear-to-b from-[#171717] to-[#0a0a0a] p-6 text-white shadow-[0_28px_70px_-35px_rgba(0,0,0,0.72),inset_0_1px_0_rgba(255,255,255,0.13)] md:col-span-2 md:p-8 lg:col-span-3">
          <div className="absolute top-[-40%] right-[-10%] h-[24rem] w-[24rem] rounded-full bg-neutral-800/15 blur-[5rem]"></div>
          <div className="absolute bottom-[-45%] left-[-12%] h-[22rem] w-[22rem] rounded-full bg-neutral-800/10 blur-[5rem]"></div>
          <div
            className="absolute inset-0 opacity-[0.09]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          ></div>
          <div className="relative grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-300"></span>
                <span className="font-mono text-[10px] tracking-[-0.03em] text-neutral-300">
                  PRODUCTION SYSTEMS
                </span>
              </div>
              <h3 className="text-3xl leading-tight font-normal tracking-tight text-white md:text-4xl md:leading-10">
                Engineered for scale &amp; reliability.
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 font-light text-neutral-300 md:text-base md:leading-6">
                Every system is engineered with deterministic boundaries,
                latency optimization, and zero hallucination tolerance.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/80 bg-white p-4 text-neutral-900 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.62),inset_0_1px_0_white]">
              <div className="mb-4 flex items-center justify-between border-b border-neutral-200 pb-4">
                <div>
                  <p className="text-xs font-light text-neutral-400">
                    Telemetry &amp; Guardrails
                  </p>
                  <p className="mt-1 text-xl font-normal tracking-tight text-neutral-950">
                    Production-ready performance.
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-100">
                  <Icon
                    icon="solar:server-square-linear"
                    className="text-xl text-neutral-900"
                  />
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 shadow-[inset_0_1px_0_white]">
                  <p className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                    Reliability
                  </p>
                  <p className="mt-2 text-2xl font-light tracking-tight text-neutral-950">
                    <span
                      data-counter=""
                      data-counter-target="99.9"
                      data-counter-suffix="%"
                      data-counter-decimals="1"
                    >
                      99.9%
                    </span>
                  </p>
                  <p className="mt-1 text-xs font-light text-neutral-500">
                    uptime &amp; SLA
                  </p>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-neutral-100 p-4 text-neutral-900 shadow-[inset_0_1px_0_white]">
                  <p className="font-mono text-[10px] tracking-widest text-neutral-900 uppercase">
                    Latency
                  </p>
                  <p className="mt-2 text-2xl font-light tracking-tight text-neutral-950">
                    &lt;{' '}
                    <span
                      data-counter=""
                      data-counter-target="120"
                      data-counter-suffix="ms"
                      data-counter-decimals="0"
                    >
                      120ms
                    </span>
                  </p>
                  <p className="mt-1 text-xs font-light text-neutral-500">
                    median decision time
                  </p>
                </div>
                <div className="rounded-2xl border border-neutral-800 bg-linear-to-b from-neutral-800 to-neutral-950 p-4 text-white shadow-[0_12px_28px_-18px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.25)]">
                  <p className="font-mono text-[10px] tracking-widest text-neutral-300 uppercase">
                    Logic
                  </p>
                  <p className="mt-2 text-2xl font-light tracking-tight text-white">
                    <span
                      data-counter=""
                      data-counter-target="100"
                      data-counter-suffix="%"
                      data-counter-decimals="0"
                    >
                      100%
                    </span>
                  </p>
                  <p className="mt-1 text-xs font-light text-neutral-300">
                    deterministic rules
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
