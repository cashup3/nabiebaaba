import { Playfair_Display, Space_Grotesk } from 'next/font/google'
import './globals.css'
import {
  defaultDescription,
  defaultTitle,
  ogImage,
  siteName,
  siteUrl,
} from '@/lib/site'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    absolute: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: '/',
    siteName,
    type: 'website',
    locale: 'en_CA',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage.url],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#000000' },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Knob Studio',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', weight: ['400','700','800'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', weight: ['300','400','500','600','700'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="Knob Studio facts" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`dark ${playfair.variable} ${spaceGrotesk.variable} font-Aeonik`}>{children}</body>
    </html>
  )
}
