import { SITE_URL } from '@/constants/site'

export const dynamic = 'force-static'

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: '2026-09-19',
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
