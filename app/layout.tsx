import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { site } from '@/content/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const title = 'Xcortex | AI Software, Automation & Engineering Agency'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  alternates: { canonical: `${site.url}/` },
  openGraph: {
    type: 'website',
    url: `${site.url}/`,
    siteName: site.name,
    title,
    description: site.description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
}

export const viewport: Viewport = { themeColor: '#ffffff' }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            // 'js' (AC-14): hidden starting states exist only under it. The 3s failsafe drops it if motion.js has not run by then.
            // 'cv-off': below-the-fold sections are only skipped on a plain first visit; a hash or a reload/back would land on guessed heights.
            // 'intro': the loader plays once per tab session, on a plain visit, never under reduced motion or automation; it preloads its photo.
            __html:
              "var h=document.documentElement,n=performance.getEntriesByType('navigation')[0],p=!location.hash&&(!n||n.type==='navigate'),s;h.classList.add('js');if(!p)h.classList.add('cv-off');try{s=sessionStorage.getItem('xcx-intro')}catch(e){s=1}if(p&&!s&&!navigator.webdriver&&!matchMedia('(prefers-reduced-motion: reduce)').matches){h.classList.add('intro');var l=document.createElement('link');l.rel='preload';l.as='image';l.type='image/avif';l.fetchPriority='high';l.href='/loader/mountain-'+(innerWidth<=innerHeight?'mobile':'desktop')+'.avif';document.head.appendChild(l)}setTimeout(function(){if(!window.__motion)h.classList.remove('js');if(!window.__intro)h.classList.remove('intro')},3000)",
          }}
        />
      </head>
      <body className="relative min-h-screen overflow-x-hidden bg-white font-sans text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white">
        {children}
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  )
}
