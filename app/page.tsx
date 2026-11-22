import { SmoothScroll } from '@/components/client/SmoothScroll'
import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { Capabilities } from '@/components/sections/Capabilities'
import { Systems } from '@/components/sections/Systems'
import { Workflow } from '@/components/sections/Workflow'
import { Solutions } from '@/components/sections/Solutions'
import { Architecture } from '@/components/sections/Architecture'
import { Approach } from '@/components/sections/Approach'
import { FinalCta } from '@/components/sections/FinalCta'
import { Footer } from '@/components/sections/Footer'
import { JsonLd } from '@/components/JsonLd'

export default function Page() {
  return (
    <>
      <div id="xcx-progress-bar" aria-hidden="true" />
      <SmoothScroll />
      {/* Plain deferred script: it runs at parse time, without waiting for React to hydrate. */}
      <script src="/scripts/motion.js" defer />
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Systems />
        <Workflow />
        <Solutions />
        <Architecture />
        <Approach />
        <FinalCta />
        <Footer />
      </main>
    </>
  )
}
