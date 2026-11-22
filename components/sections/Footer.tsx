import Image from 'next/image'
import { site } from '@/content/site'

export function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-white shadow-[0_-18px_55px_-40px_rgba(0,0,0,0.45),inset_0_1px_0_white] backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-neutral-300 to-transparent"></div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1.8fr] lg:gap-16">
          {/* Brand / Summary */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <a href="#" className="group flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-linear-to-b from-white to-neutral-100 p-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_0_white]">
                <Image
                  src="/logo.png"
                  alt="Xcortex Logo"
                  width={512}
                  height={512}
                  sizes="28px"
                  className="h-full w-full object-contain"
                />
              </span>

              <span className="flex flex-col justify-center leading-none">
                <span className="font-mono text-sm font-semibold tracking-[-0.08em] text-neutral-950 transition-colors group-hover:text-neutral-950">
                  Xcortex
                </span>
                <span className="mt-1 text-[10px] font-light tracking-[-0.03em] text-neutral-400">
                  AI · AUTOMATION · ENGINEERING
                </span>
              </span>
            </a>

            <p
              data-aura-reveal="fade-up"
              data-aura-delay="200"
              className="mt-5 max-w-sm text-sm leading-6 font-light text-neutral-500"
            >
              Xcortex engineers intelligent software systems for businesses
              ready to operate differently.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1.5 font-mono text-xs text-neutral-950 shadow-[inset_0_1px_0_white]">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-900"></span>
              Intelligence, engineered.
            </div>
          </div>

          {/* Footer Link Groups */}
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:text-left">
            {/* Explore */}
            <div>
              <p className="mb-4 font-mono text-[10px] font-medium tracking-[-0.04em] text-neutral-400 uppercase">
                Explore
              </p>
              <div className="flex flex-col gap-3 text-sm font-light text-neutral-500">
                <a
                  href="#systems"
                  className="transition-colors hover:text-neutral-950"
                >
                  Systems
                </a>
                <a
                  href="#solutions"
                  className="transition-colors hover:text-neutral-950"
                >
                  Solutions
                </a>
                <a
                  href="#approach"
                  className="transition-colors hover:text-neutral-950"
                >
                  About
                </a>
                <a
                  href="#final-cta"
                  className="transition-colors hover:text-neutral-950"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Capabilities */}
            <div>
              <p className="mb-4 font-mono text-[10px] font-medium tracking-[-0.04em] text-neutral-400 uppercase">
                Capabilities
              </p>
              <div className="flex flex-col gap-3 text-sm font-light text-neutral-500">
                <a
                  href="#solutions"
                  className="transition-colors hover:text-neutral-950"
                >
                  AI Agents
                </a>
                <a
                  href="#solutions"
                  className="transition-colors hover:text-neutral-950"
                >
                  Intelligent Automation
                </a>
                <a
                  href="#solutions"
                  className="transition-colors hover:text-neutral-950"
                >
                  Document Intelligence
                </a>
                <a
                  href="#systems"
                  className="transition-colors hover:text-neutral-950"
                >
                  AI Platforms
                </a>
                <a
                  href="#systems"
                  className="transition-colors hover:text-neutral-950"
                >
                  Software Engineering
                </a>
              </div>
            </div>

            {/* Connect */}
            <div>
              <p className="mb-4 font-mono text-[10px] font-medium tracking-[-0.04em] text-neutral-400 uppercase">
                Connect
              </p>
              <div className="flex flex-col gap-3 text-sm font-light text-neutral-500">
                <a
                  href="https://www.linkedin.com/company/xcortex/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-neutral-950"
                >
                  LinkedIn
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-neutral-950"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200/70 pt-6 md:flex-row">
          <p className="text-xs font-light text-neutral-400">
            © 2026 Xcortex. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs font-light text-neutral-400">
            <a href="#" className="transition-colors hover:text-neutral-950">
              Terms
            </a>
            <span className="h-1 w-1 rounded-full bg-neutral-300"></span>
            <a href="#" className="transition-colors hover:text-neutral-950">
              Privacy
            </a>
            <span className="h-1 w-1 rounded-full bg-neutral-300"></span>
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-neutral-950"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
