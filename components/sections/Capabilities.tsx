import { Icon } from '@/components/Icon'

export function Capabilities() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative z-10 flex w-full flex-col gap-y-16">
        <div className="max-w-3xl">
          <p
            data-aura-reveal="fade-up"
            className="mb-4 font-mono text-xs font-medium tracking-[-0.04em] text-neutral-900"
          >
            THE PROBLEM
          </p>
          <h2
            data-aura-reveal="fade-up"
            data-aura-delay="100"
            className="max-w-5xl text-4xl leading-[1.05] font-normal tracking-tight text-neutral-950 md:text-5xl md:leading-none lg:text-6xl lg:leading-none"
          >
            Software should do more.
            <span className="block">Not just respond.</span>
          </h2>
          <p
            data-aura-reveal="fade-up"
            data-aura-delay="200"
            className="mt-5 max-w-2xl text-base leading-8 font-light text-neutral-600 md:text-lg md:leading-7"
          >
            Most software waits for instructions. Modern systems can understand
            context, reason across information, and take action. Xcortex builds
            the systems that make that possible.
          </p>
        </div>
        <div
          data-aura-stagger=""
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          <div
            data-aura-reveal="fade-up"
            className="group flex flex-col gap-4 rounded-[2rem] border border-white p-6 shadow-[0_10px_28px_-20px_rgba(0,0,0,0.24),inset_0_1px_0_white] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-100 text-neutral-900 shadow-[inset_0_1px_0_white]">
              <Icon
                icon="solar:folder-with-files-linear"
                className="text-2xl"
              />
            </div>
            <div>
              <h3 className="text-lg font-normal tracking-tight text-neutral-950">
                Context gets lost
              </h3>
              <p className="mt-3 text-sm leading-7 font-light text-neutral-600">
                Data, documents, conversations, and business knowledge are
                scattered across tools that were never designed to understand
                the whole picture.
              </p>
            </div>
          </div>
          <div
            data-aura-reveal="fade-up"
            className="group flex flex-col gap-4 rounded-[2rem] border border-white p-6 shadow-[0_10px_28px_-20px_rgba(0,0,0,0.24),inset_0_1px_0_white] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-100 text-neutral-900 shadow-[inset_0_1px_0_white]">
              <Icon icon="solar:refresh-circle-linear" className="text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-normal tracking-tight text-neutral-950">
                Manual work persists
              </h3>
              <p className="mt-3 text-sm leading-7 font-light text-neutral-600">
                Teams spend time moving information between systems, checking
                repetitive tasks, and doing work software should already handle.
              </p>
            </div>
          </div>
          <div
            data-aura-reveal="fade-up"
            className="group flex flex-col gap-4 rounded-[2rem] border border-white p-6 shadow-[0_10px_28px_-20px_rgba(0,0,0,0.24),inset_0_1px_0_white] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-100 text-neutral-900 shadow-[inset_0_1px_0_white]">
              <Icon icon="solar:cpu-bolt-linear" className="text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-normal tracking-tight text-neutral-950">
                Intelligence stays isolated
              </h3>
              <p className="mt-3 text-sm leading-7 font-light text-neutral-600">
                A model alone is not a system. Real value comes from connecting
                intelligence to your data, tools, workflows, and decisions.
              </p>
            </div>
          </div>
          <div
            data-aura-reveal="fade-up"
            className="group flex flex-col gap-4 rounded-[2rem] border border-white p-6 shadow-[0_10px_28px_-20px_rgba(0,0,0,0.24),inset_0_1px_0_white] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-100 text-neutral-900 shadow-[inset_0_1px_0_white]">
              <Icon icon="solar:stop-circle-linear" className="text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-normal tracking-tight text-neutral-950">
                Nothing acts
              </h3>
              <p className="mt-3 text-sm leading-7 font-light text-neutral-600">
                Traditional software produces an answer and stops. Intelligent
                systems can understand the situation and continue with the next
                action.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aura-reveal="scale-up"
          className="relative min-h-[560px] overflow-hidden rounded-[2.75rem] border border-white/10 bg-linear-to-b from-[#171717] to-[#0a0a0a] text-white shadow-[0_40px_90px_-45px_rgba(0,0,0,0.78),inset_0_1px_0_rgba(255,255,255,0.14)] lg:min-h-[620px]"
        >
          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          ></div>
          <div className="absolute top-[-30%] right-[-10%] h-[32rem] w-[32rem] rounded-full bg-neutral-800/15 blur-[6rem]"></div>
          <div className="absolute bottom-[-25%] left-[-12%] h-[28rem] w-[28rem] rounded-full bg-neutral-800/10 blur-[5rem]"></div>
          <div className="absolute top-[20%] left-[42%] h-[18rem] w-[18rem] rounded-full bg-white/5 blur-[4rem]"></div>
          <div className="relative grid h-full min-h-[560px] grid-cols-1 lg:min-h-[620px] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <p className="mb-4 font-mono text-xs font-medium tracking-[-0.04em] text-neutral-400">
                THE TRANSFORMATION
              </p>
              <h2 className="mb-6 text-3xl leading-tight font-light tracking-tight text-white md:text-4xl md:leading-10 lg:text-5xl lg:leading-none">
                From information
                <span className="block">to intelligence</span>
                <span className="block">to action.</span>
              </h2>
              <p className="max-w-xl text-base leading-8 font-light text-neutral-300">
                We connect intelligence directly to your data, tools, workflows,
                and decisions — transforming raw operational context into
                autonomous, high-precision execution.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#systems"
                  className="group flex w-fit items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-normal text-neutral-900 shadow-[inset_0_1px_0_white] transition-all hover:-translate-y-0.5 hover:bg-neutral-100"
                >
                  <span>See what we build</span>
                  <Icon
                    icon="solar:arrow-right-linear"
                    className="text-lg transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="#final-cta"
                  className="group flex w-fit items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.07] px-6 py-3 text-sm font-normal text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all hover:bg-white/[0.1]"
                >
                  <span>Start a project →</span>
                </a>
              </div>
              <div className="mt-12 border-t border-white/10 pt-8">
                <p className="mb-4 font-mono text-xs tracking-widest text-white/50 uppercase">
                  Engineered for production
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                    Enterprises
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                    High-Growth Tech
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                    Operations
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                    Platforms
                  </span>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center p-6 md:p-10 lg:pr-14">
              <div className="relative w-full max-w-2xl rounded-[2.25rem] border border-white/10 bg-white/[0.065] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_70px_-40px_rgba(0,0,0,0.72)] backdrop-blur-xs md:p-5">
                <div className="overflow-hidden rounded-[1.85rem] border border-white/80 bg-linear-to-b from-white to-neutral-100 text-neutral-900 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.55),inset_0_1px_0_white]">
                  <div className="flex items-center justify-between border-b border-neutral-200/80 px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-300"></span>
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-300"></span>
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-400"></span>
                    </div>
                    <div className="font-mono text-xs tracking-[-0.05em] text-neutral-500">
                      INPUT → INTELLIGENCE → ACTION
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-1 text-xs font-light text-neutral-400">
                          Xcortex Engine active
                        </p>
                        <h3 className="text-2xl font-normal tracking-tight text-neutral-950 md:text-3xl">
                          From information to intelligence to action.
                        </h3>
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-100 text-neutral-950 shadow-[inset_0_1px_0_white]">
                        <Icon
                          icon="solar:cpu-bolt-linear"
                          className="text-2xl"
                        />
                      </div>
                    </div>
                    <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-5">
                      <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-4 shadow-[inset_0_1px_0_white]">
                        <p className="mb-4 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                          INPUT
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-3 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.03),inset_0_1px_0_white]">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100">
                              <Icon
                                icon="solar:document-text-linear"
                                className="text-base text-neutral-900"
                              />
                            </div>
                            <div>
                              <p className="text-xs font-normal text-neutral-900">
                                Documents
                              </p>
                              <p className="text-[11px] font-light text-neutral-400">
                                PDFs &amp; raw data
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-3 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.03),inset_0_1px_0_white]">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100">
                              <Icon
                                icon="solar:database-linear"
                                className="text-base text-neutral-900"
                              />
                            </div>
                            <div>
                              <p className="text-xs font-normal text-neutral-900">
                                Business Data
                              </p>
                              <p className="text-[11px] font-light text-neutral-400">
                                Databases &amp; ERPs
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-3 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.03),inset_0_1px_0_white]">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100">
                              <Icon
                                icon="solar:code-square-linear"
                                className="text-base text-neutral-900"
                              />
                            </div>
                            <div>
                              <p className="text-xs font-normal text-neutral-900">
                                APIs &amp; Events
                              </p>
                              <p className="text-[11px] font-light text-neutral-400">
                                Live webhook streams
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-3 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.03),inset_0_1px_0_white]">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100">
                              <Icon
                                icon="solar:letter-linear"
                                className="text-base text-neutral-600"
                              />
                            </div>
                            <div>
                              <p className="text-xs font-normal text-neutral-900">
                                Requests
                              </p>
                              <p className="text-[11px] font-light text-neutral-400">
                                Internal knowledge &amp; tickets
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden flex-col items-center justify-center gap-2 md:flex">
                        <div className="h-12 w-px bg-linear-to-b from-transparent via-neutral-300 to-transparent"></div>
                        <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-800 bg-linear-to-b from-neutral-900 to-black p-3 text-white shadow-[0_10px_24px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.35)]">
                          <span className="mb-1 font-mono text-[9px] font-semibold tracking-wider text-neutral-300 uppercase">
                            ENGINE
                          </span>
                          <Icon
                            icon="solar:alt-arrow-right-linear"
                            className="text-xl"
                          />
                        </div>
                        <div className="h-12 w-px bg-linear-to-b from-transparent via-neutral-300 to-transparent"></div>
                      </div>
                      <div className="rounded-[1.5rem] border border-white/10 bg-linear-to-b from-[#171717] to-[#0a0a0a] p-4 text-white shadow-[0_12px_30px_-20px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.1)]">
                        <p className="mb-4 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                          ACTION
                        </p>
                        <div className="space-y-3">
                          <div className="rounded-2xl border border-white/10 px-3 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-2.5">
                                <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.25)]"></span>
                                <p className="text-xs font-normal text-white">
                                  Automate workflow
                                </p>
                              </div>
                              <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 font-mono text-[10px] text-neutral-300">
                                Executed
                              </span>
                            </div>
                          </div>
                          <div className="rounded-2xl border border-white/10 px-3 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-2.5">
                                <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.25)]"></span>
                                <p className="text-xs font-normal text-white">
                                  Update systems
                                </p>
                              </div>
                              <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 font-mono text-[10px] text-neutral-300">
                                Synced
                              </span>
                            </div>
                          </div>
                          <div className="rounded-2xl border border-white/10 px-3 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-2.5">
                                <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.25)]"></span>
                                <p className="text-xs font-normal text-white">
                                  Generate decisions
                                </p>
                              </div>
                              <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 font-mono text-[10px] text-neutral-300">
                                Verified
                              </span>
                            </div>
                          </div>
                          <div className="rounded-2xl border border-neutral-800 bg-linear-to-b from-neutral-900 to-black px-3 py-2.5 shadow-[0_10px_22px_-14px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.25)]">
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-2.5">
                                <Icon
                                  icon="solar:bolt-circle-linear"
                                  className="text-base text-white"
                                />
                                <div>
                                  <p className="text-xs font-normal text-white">
                                    Trigger processes
                                  </p>
                                  <p className="text-[10px] font-light text-neutral-300">
                                    Assist teams &amp; operations
                                  </p>
                                </div>
                              </div>
                              <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.25)]"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.03),inset_0_1px_0_white]">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100">
                            <Icon
                              icon="solar:shield-check-linear"
                              className="text-base text-neutral-900"
                            />
                          </div>
                          <div>
                            <p className="text-xs font-normal text-neutral-900">
                              XCORTEX ENGINE
                            </p>
                            <p className="text-[11px] font-light text-neutral-400">
                              Understand · Reason · Decide · Orchestrate
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 font-mono text-[11px] text-neutral-500">
                          <span className="inline-flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-neutral-950"></span>
                            Context understood
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-neutral-950"></span>
                            Reasoning complete
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-neutral-950"></span>
                            Action ready
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-16 -right-3 hidden rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-[0_18px_38px_-20px_rgba(0,0,0,0.45),inset_0_1px_0_white] backdrop-blur-sm md:block">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100">
                      <Icon
                        icon="solar:check-circle-linear"
                        className="text-lg text-neutral-900"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-normal text-neutral-900">
                        Context understood
                      </p>
                      <p className="text-xs font-light text-neutral-400">
                        Multi-source synthesis complete
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-6 hidden rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-[0_18px_38px_-20px_rgba(0,0,0,0.45),inset_0_1px_0_white] backdrop-blur-sm md:block">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100">
                      <Icon
                        icon="solar:bolt-circle-linear"
                        className="text-lg text-neutral-900"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-normal text-neutral-900">
                        Action ready
                      </p>
                      <p className="text-xs font-light text-neutral-400">
                        Autonomous execution verified
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
