import './index.css'

import { GoogleAnalytics } from '@next/third-parties/google'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import GlobalComponents from '@/components/global-components'
import { SITE_URL } from '@/constants/site'
import { AppProvider } from '@/provider'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '力維盃 × リキイ 盃 排球錦標賽 2025',
    template: '%s | 力維盃 × リキイ 盃 排球錦標賽 2025',
  },
  description:
    '力維盃排球錦標賽，用一場比賽把青春刻進記憶。集結台灣最熱血的排球魂，2025 リキイ 盃，來留下屬於你的那一頁。',
  keywords: [
    '排球',
    '錦標賽',
    '力維盃',
    'リキイ',
    'リキイ 盃',
    '排球賽',
    '排球比賽',
    '台中排球',
    '排球活動',
  ],
  authors: [{ name: 'リキイ 盃籌備團隊' }],
  creator: 'リキイ 盃籌備團隊',
  publisher: 'リキイ 盃籌備團隊',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: SITE_URL,
    siteName: '力維盃 × リキイ 盃 排球錦標賽 2025',
    title: '力維盃 × リキイ 盃 排球錦標賽 2025',
    description:
      '力維盃排球錦標賽，用一場比賽把青春刻進記憶。集結台灣最熱血的排球魂，2025 リキイ 盃，來留下屬於你的那一頁。',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'リキイ 盃錦標賽',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '力維盃 × リキイ 盃 排球錦標賽 2025',
    description:
      '力維盃排球錦標賽，用一場比賽把青春刻進記憶。集結台灣最熱血的排球魂，2025 リキイ 盃，來留下屬於你的那一頁。',
    images: ['/opengraph-image.jpg'],
    creator: '@paperhsiaooo',
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

// import noto sans tc font
import { Anton, Antonio, Noto_Sans_JP, Noto_Sans_TC } from 'next/font/google'

import PostHogProvider from '@/provider/post-hog-provider'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
})

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  preload: true,
  variable: '--font-noto-sans-tc',
})

const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-anton',
})

const antonio = Antonio({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-antonio',
})

function RootLayout({ children }) {
  // Structured Data (JSON-LD)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'リキイ 盃籌備團隊',
    url: SITE_URL,
    logo: `${SITE_URL}/social-media/logo_main.webp`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@liwei-cup.com',
      contactType: '客戶服務',
      availableLanguage: ['zh-TW'],
    },
    sameAs: ['https://twitter.com/paperhsiaooo'],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'リキイ 盃錦標賽',
    url: SITE_URL,
    description:
      '力維盃排球錦標賽，用一場比賽把青春刻進記憶。集結台灣最熱血的排球魂，2025 リキイ 盃，來留下屬於你的那一頁。',
    inLanguage: 'zh-TW',
    publisher: {
      '@type': 'Organization',
      name: 'リキイ 盃籌備團隊',
    },
  }

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: '力維盃 × リキイ 盃 排球錦標賽 2025',
    description:
      'リキイ 盃排球錦標賽，一場關於熱血、友情與信念的排球賽事。每一次奔跑與吶喊，都將成為最難忘的回憶。',
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image.jpg`,
    startDate: '2025-11-15',
    endDate: '2025-11-15',
    eventStatus: 'https://schema.org/EventCompleted',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: '新北市板橋區',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '新北市',
        addressRegion: '板橋區',
        addressStreet: '僑中一街 124 巷 27-5 號',
        addressCountry: 'TW',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'リキイ 盃籌備團隊',
      url: SITE_URL,
    },
    sport: '排球',
  }

  return (
    <html lang="zh-TW">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(eventSchema),
          }}
        />
      </head>
      <body
        className={`${notoSansTC.className} ${notoSansJP.className} ${anton.className} ${antonio.className}`}
      >
        <NuqsAdapter>
          <AppProvider>
            <PostHogProvider>
              <GlobalComponents>{children}</GlobalComponents>
            </PostHogProvider>
          </AppProvider>
        </NuqsAdapter>
        {process.env.NODE_ENV === 'production' &&
        process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        ) : null}
      </body>
    </html>
  )
}

export default RootLayout
