import { Inter, Playfair_Display, Space_Grotesk } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Knob Studio',
  description: 'Creative digital experiences and interactive design',
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
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
}

export default function RootLayout({ children }) {
  const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
  const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${playfair.variable} ${spaceGrotesk.variable} font-Aeonik`}>{children}</body>
    </html>
  )
}
