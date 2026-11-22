import { Icon } from '@/components/Icon'
import { services } from '@/content/services'

export function Solutions() {
  return (
    <section id="solutions" className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center max-w-5xl mx-auto mb-14">
        <p
          data-aura-reveal="fade-up"
          className="font-mono text-xs font-medium tracking-[-0.04em] text-neutral-900 mb-4"
        >
          WHERE IT MATTERS
        </p>

        <h2
          data-aura-reveal="fade-up"
          data-aura-delay="100"
          className="text-4xl md:text-5xl md:leading-none lg:text-6xl lg:leading-none font-normal tracking-tight text-neutral-950 leading-[1.05] max-w-5xl mx-auto"
        >
          Built around the work.
          <span className="block">Not around the tool.</span>
        </h2>

        <p
          data-aura-reveal="fade-up"
          data-aura-delay="200"
          className="mt-6 text-base md:text-lg md:leading-7 leading-8 text-neutral-600 font-light max-w-3xl mx-auto"
        >
          Every system starts with a real operational problem. We design the technology around how your business
          actually works.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#final-cta"
            className="inline-flex items-center gap-2 justify-center rounded-full px-6 py-3.5 text-sm font-normal text-white bg-linear-to-b from-neutral-900 to-black border border-neutral-800 shadow-[0_10px_24px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.35)] hover:from-neutral-800 hover:to-neutral-900 hover:-translate-y-0.5 transition-all duration-300"
          >
            Start a project
            <Icon icon="solar:arrow-right-linear" className="text-lg" />
          </a>

          <a
            href="#systems"
            className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-normal text-neutral-700 bg-linear-to-b from-white to-neutral-50 border border-neutral-200 shadow-[0_6px_16px_rgba(0,0,0,0.06),inset_0_1px_0_white] hover:from-neutral-50 hover:to-neutral-100 hover:-translate-y-0.5 transition-all duration-300"
          >
            See what we build →
          </a>
        </div>
      </div>

      {/* Solutions Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Solution 01: Document Intelligence */}
        <article
          data-aura-reveal="fade-up"
          className="group bg-white/70 rounded-[2rem] border border-white shadow-[0_18px_44px_-28px_rgba(0,0,0,0.34),inset_0_1px_0_white] overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
        >
          {/* Visual Panel */}
          <div className="relative isolate mx-4 mt-4 rounded-[1.5rem] overflow-hidden bg-linear-to-b from-white to-neutral-100 border border-white shadow-[0_18px_42px_-30px_rgba(0,0,0,0.28),inset_0_1px_0_white] min-h-[13rem] [clip-path:inset(0_round_1.5rem)]">
            <div
              className="absolute inset-0 z-0 opacity-[0.16]"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.10) 1px, transparent 0)',
                backgroundSize: '1.5rem 1.5rem',
              }}
            ></div>
            <div className="absolute top-[-35%] right-[-20%] z-0 w-[14rem] h-[14rem] rounded-full bg-neutral-300/55 blur-[4rem] pointer-events-none"></div>

            {/* Mini Technical UI */}
            <div className="relative z-10 p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-400"></span>
                </div>

                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">DOC-PIPELINE</span>
              </div>

              <div className="rounded-2xl bg-white text-neutral-900 border border-neutral-200 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.03),inset_0_1px_0_white]">
                <p className="text-[11px] text-neutral-400 font-light font-mono">
                  Input: 42-page technical contract.pdf
                </p>

                <p className="mt-1 text-base font-normal tracking-tight text-neutral-950">
                  Extracted 128 structured entities
                </p>

                <div className="mt-3 space-y-1.5 font-mono text-[11px] text-neutral-600">
                  <div className="flex items-center justify-between bg-neutral-50 rounded-lg px-2.5 py-1">
                    <span>Payment terms &amp; SLA</span>
                    <span className="text-neutral-950 font-medium">Validated</span>
                  </div>
                  <div className="flex items-center justify-between bg-neutral-50 rounded-lg px-2.5 py-1">
                    <span>Database JSON sync</span>
                    <span className="text-neutral-950 font-medium">Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center shadow-[inset_0_1px_0_white]">
                <Icon icon="solar:document-text-linear" className="text-2xl text-neutral-900" />
              </div>

              <div>
                <h3 className="text-xl font-normal tracking-tight text-neutral-950">{services[0].name}</h3>

                <p className="mt-3 text-sm leading-6 text-neutral-500 font-light">{services[0].description}</p>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-neutral-100 border border-neutral-200 px-3 py-1.5 text-[11px] text-neutral-950 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
                  PDF · Extraction · RAG · Search
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Solution 02: AI Agents (Featured Dark Card) */}
        <article
          data-aura-reveal="fade-up"
          className="group relative bg-linear-to-b from-neutral-800 to-neutral-950 rounded-[2rem] border border-neutral-800 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
        >
          <div className="absolute top-[-35%] right-[-20%] w-[18rem] h-[18rem] rounded-full bg-white/25 blur-[4rem] pointer-events-none"></div>
          <div className="absolute bottom-[-40%] left-[-25%] w-[16rem] h-[16rem] rounded-full bg-neutral-400/15 blur-[4rem] pointer-events-none"></div>

          {/* Visual Panel */}
          <div className="relative mx-4 mt-4 rounded-[1.5rem] overflow-hidden bg-linear-to-b from-neutral-900 to-black border border-neutral-800 shadow-[0_18px_42px_-24px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] min-h-[13rem]">
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)',
                backgroundSize: '1.35rem 1.35rem',
              }}
            ></div>

            {/* Mini Technical UI */}
            <div className="relative p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] text-neutral-300 uppercase tracking-wider">
                  AGENT WORKSPACE
                </span>

                <div className="w-8 h-8 rounded-xl bg-white/90 border border-white flex items-center justify-center shadow-[0_8px_18px_-12px_rgba(0,0,0,0.35),inset_0_1px_0_white]">
                  <Icon icon="solar:cpu-bolt-linear" className="text-base text-neutral-900" />
                </div>
              </div>

              <div className="space-y-2.5 font-mono">
                <div className="rounded-[1.2rem] bg-white/95 border border-white p-3 shadow-[0_12px_28px_-18px_rgba(0,0,0,0.26),inset_0_1px_0_white]">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-normal text-neutral-900">Goal: Reconcile Ledger</p>
                    <span className="text-[10px] text-neutral-950 bg-neutral-200 rounded-full px-2 py-0.5 font-medium">
                      Active
                    </span>
                  </div>
                  <p className="mt-1 text-[10px] text-neutral-500 font-light">Reasoning → Tool Call → ERP Verified</p>
                </div>

                <div className="rounded-[1.2rem] bg-neutral-900/40 text-white border border-white/20 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xs">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[11px] text-neutral-200">Human Approval Gate</p>
                    <span className="text-[10px] text-neutral-300">99.8% confidence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative p-6 text-white">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-2xl border border-white/20 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                <Icon icon="solar:cpu-bolt-linear" className="text-2xl text-white" />
              </div>

              <div>
                <h3 className="text-xl font-normal tracking-tight text-white">{services[1].name}</h3>

                <p className="mt-3 text-sm leading-6 text-neutral-300 font-light">{services[1].description}</p>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-[11px] text-white font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  Tool Calling · Memory · APIs · Logic
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Solution 03: Intelligent Automation */}
        <article
          data-aura-reveal="fade-up"
          className="group bg-white/70 rounded-[2rem] border border-white shadow-[0_18px_44px_-28px_rgba(0,0,0,0.34),inset_0_1px_0_white] overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
        >
          {/* Visual Panel */}
          <div className="relative mx-4 mt-4 rounded-[1.5rem] overflow-hidden bg-linear-to-b from-white to-neutral-100 border border-white shadow-[0_18px_42px_-30px_rgba(0,0,0,0.28),inset_0_1px_0_white] min-h-[13rem]">
            <div
              className="absolute inset-0 opacity-[0.16]"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.10) 1px, transparent 0)',
                backgroundSize: '1.5rem 1.5rem',
              }}
            ></div>
            <div className="absolute top-[-30%] left-[-18%] z-0 w-[14rem] h-[14rem] rounded-full bg-neutral-400/20 blur-[3.75rem] pointer-events-none"></div>

            {/* Mini Technical UI */}
            <div className="relative p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">ORCHESTRATION</span>
                <div className="w-8 h-8 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center">
                  <Icon icon="solar:bolt-circle-linear" className="text-base text-neutral-900" />
                </div>
              </div>

              <div className="rounded-2xl bg-white text-neutral-900 border border-neutral-200 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.03),inset_0_1px_0_white]">
                <p className="text-xs text-neutral-400 font-light font-mono">Event trigger → AI routing</p>
                <p className="mt-1 text-base font-normal tracking-tight text-neutral-950">
                  Trigger → AI → Decision → Action
                </p>

                <div className="mt-3 grid grid-cols-3 gap-2 text-center font-mono">
                  <div className="rounded-xl bg-neutral-100 border border-neutral-200 p-2">
                    <p className="text-sm font-semibold text-neutral-950">100%</p>
                    <p className="text-[9px] text-neutral-600">Automated</p>
                  </div>
                  <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-2">
                    <p className="text-sm font-semibold text-neutral-900">0</p>
                    <p className="text-[9px] text-neutral-500">Manual</p>
                  </div>
                  <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-2">
                    <p className="text-sm font-semibold text-neutral-900">&lt;1s</p>
                    <p className="text-[9px] text-neutral-500">Execution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center shadow-[inset_0_1px_0_white]">
                <Icon icon="solar:widget-5-linear" className="text-2xl text-neutral-900" />
              </div>

              <div>
                <h3 className="text-xl font-normal tracking-tight text-neutral-950">{services[2].name}</h3>

                <p className="mt-3 text-sm leading-6 text-neutral-500 font-light">{services[2].description}</p>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-neutral-100 border border-neutral-200 px-3 py-1.5 text-[11px] text-neutral-950 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
                  Workflows · APIs · Events · Sync
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Metrics / Outcome Strip */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 01 */}
        <div className="border border-white rounded-[2rem] p-6 shadow-[0_12px_30px_-24px_rgba(0,0,0,0.3),inset_0_1px_0_white]">
          <div className="w-10 h-10 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center shadow-[inset_0_1px_0_white] mb-5">
            <Icon icon="solar:bolt-circle-linear" className="text-xl text-neutral-900" />
          </div>
          <p className="text-3xl font-normal tracking-tight text-neutral-950">
            10x <span className="text-2xl text-neutral-700">velocity</span>
          </p>
          <p className="mt-2 text-sm leading-6 text-neutral-500 font-light">
            From raw document ingestion to structured action in seconds.
          </p>
        </div>

        {/* Metric 02 */}
        <div className="border border-white rounded-[2rem] p-6 shadow-[0_12px_30px_-24px_rgba(0,0,0,0.3),inset_0_1px_0_white]">
          <div className="w-10 h-10 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center shadow-[inset_0_1px_0_white] mb-5">
            <Icon icon="solar:target-linear" className="text-xl text-neutral-900" />
          </div>
          <p className="text-3xl font-normal tracking-tight text-neutral-950">
            0 <span className="text-2xl text-neutral-700">bloat</span>
          </p>
          <p className="mt-2 text-sm leading-6 text-neutral-500 font-light">
            Smallest reliable solution engineered for real value.
          </p>
        </div>

        {/* Metric 03 */}
        <div className="border border-white rounded-[2rem] p-6 shadow-[0_12px_30px_-24px_rgba(0,0,0,0.3),inset_0_1px_0_white]">
          <div className="w-10 h-10 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center shadow-[inset_0_1px_0_white] mb-5">
            <Icon icon="solar:tuning-2-linear" className="text-xl text-neutral-900" />
          </div>
          <p className="text-3xl font-normal tracking-tight text-neutral-950">
            100% <span className="text-2xl text-neutral-700">connected</span>
          </p>
          <p className="mt-2 text-sm leading-6 text-neutral-500 font-light">
            Native integration with existing databases, APIs, and tools.
          </p>
        </div>

        {/* Metric 04 */}
        <div className="bg-linear-to-b from-neutral-100 to-white border border-neutral-200 rounded-[2rem] p-6 shadow-[0_16px_38px_-26px_rgba(0,0,0,0.28),inset_0_1px_0_white]">
          <div className="w-10 h-10 rounded-2xl bg-white border border-white flex items-center justify-center shadow-[inset_0_1px_0_white] mb-5">
            <Icon icon="solar:shield-check-linear" className="text-xl text-neutral-900" />
          </div>
          <p className="text-3xl font-normal tracking-tight text-neutral-950">
            Production <span className="text-2xl text-neutral-700">ready</span>
          </p>
          <p className="mt-2 text-sm leading-6 text-neutral-600 font-light">
            Built with strict evaluation, observability, and deterministic logic.
          </p>
        </div>
      </div>
    </section>
  )
}
