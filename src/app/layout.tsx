import type { Metadata } from 'next'
import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const OG_IMAGE =
  'https://res.cloudinary.com/dkhawygrr/image/upload/q_auto/f_auto/v1781204033/Evidentize_logo_samples_4_pec1w5.png'

export const metadata: Metadata = {
  title: {
    default: 'Evidentize — The Evidence Layer for Human Capability',
    template: '%s — Evidentize',
  },
  description:
    'Evidentize is the evidence layer for human capability. Partner with us to give your learners, graduates and candidates verified proof of what they can actually do.',
  metadataBase: new URL('https://www.evidentize.io'),
  icons: {
    icon: OG_IMAGE,
    shortcut: OG_IMAGE,
    apple: OG_IMAGE,
  },
  openGraph: {
    title: 'Evidentize — The Evidence Layer for Human Capability',
    description:
      'Evidence over claims. Verified real-work assessments for universities, training providers, coaching businesses, employers and recruiters.',
    url: 'https://www.evidentize.io',
    siteName: 'Evidentize',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: OG_IMAGE, alt: 'Evidentize' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evidentize — The Evidence Layer for Human Capability',
    description: 'Evidence over claims. Verified capability for partners, educators and talent leaders.',
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-GB"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
