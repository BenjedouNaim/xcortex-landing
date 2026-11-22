import Image from 'next/image'

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 pt-5">
        <div className="relative overflow-hidden rounded-full border border-white/90 px-4 py-3 shadow-[0_14px_38px_-22px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-2xl">
          <div className="pointer-events-none absolute inset-0 rounded-full"></div>
          <div className="relative z-10 flex items-center justify-between">
            <a href="#" className="group flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-linear-to-b from-white to-neutral-100 p-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_0_white]">
                <Image
                  src="/logo.png"
                  alt="Xcortex Logo"
                  width={24}
                  height={24}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="flex flex-col justify-center leading-none">
                <span className="font-mono text-sm font-semibold tracking-[-0.08em] text-neutral-950 transition-colors group-hover:text-neutral-950">
                  Xcortex
                </span>
                <span className="mt-0.5 text-[10px] font-light tracking-[-0.03em] text-neutral-400">
                  AI · AUTOMATION · ENGINEERING
                </span>
              </span>
            </a>
            <div className="hidden items-center gap-7 text-xs font-normal text-neutral-600 md:flex">
              <a
                href="#systems"
                data-nav-link=""
                data-nav-section="systems"
                className="relative transition-colors duration-500 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-neutral-900 after:transition-all after:duration-500 hover:text-neutral-950 hover:after:w-full"
              >
                Systems
              </a>
              <a
                href="#solutions"
                data-nav-link=""
                data-nav-section="solutions"
                className="relative transition-colors duration-500 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-neutral-900 after:transition-all after:duration-500 hover:text-neutral-950 hover:after:w-full"
              >
                Solutions
              </a>
              <a
                href="#approach"
                data-nav-link=""
                data-nav-section="approach"
                className="relative transition-colors duration-500 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-neutral-900 after:transition-all after:duration-500 hover:text-neutral-950 hover:after:w-full"
              >
                About
              </a>
              <a
                href="#final-cta"
                data-nav-link=""
                data-nav-section="final-cta"
                className="relative transition-colors duration-500 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-neutral-900 after:transition-all after:duration-500 hover:text-neutral-950 hover:after:w-full"
              >
                Contact
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="#systems"
                className="hidden items-center justify-center rounded-full border border-neutral-200 px-4 py-2 text-xs text-neutral-700 shadow-[0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_0_white] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-neutral-950 sm:inline-flex"
              >
                See what we build →
              </a>
              <a
                href="#final-cta"
                className="inline-flex items-center justify-center rounded-full border border-neutral-800 bg-linear-to-b from-neutral-900 to-black px-4 py-2 text-xs text-white shadow-[0_5px_14px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:from-neutral-800 hover:to-neutral-900"
              >
                Start a project →
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
