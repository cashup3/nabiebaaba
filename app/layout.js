import { Inter } from 'next/font/google'
import './globals.css'


export const metadata = {
  title: 'Knob Studio',
  description: 'Creative digital experiences and interactive design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className='font-Aeonik'>{children}</body>
    </html>
  )
}
