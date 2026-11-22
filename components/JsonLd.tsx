import { faq } from '@/content/faq'
import { services } from '@/content/services'
import { site } from '@/content/site'

const org = { '@id': `${site.url}/#org` }

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      ...org,
      name: site.name,
      url: site.url,
      logo: {
        '@type': 'ImageObject',
        url: `${site.url}/logo.png`,
        width: 512,
        height: 512,
      },
      email: site.email,
      description: site.description,
      sameAs: site.sameAs,
      areaServed: 'Worldwide',
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: org,
      inLanguage: 'en',
    },
    ...services.map((s) => ({
      '@type': 'Service',
      name: s.name,
      description: s.description,
      provider: org,
      areaServed: 'Worldwide',
    })),
    {
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, '\\u003c'),
      }}
    />
  )
}
