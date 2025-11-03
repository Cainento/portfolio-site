import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Avila Cainan — Full-Stack Developer & Creative Technologist',
  description: 'Professional portfolio of Avila Cainan, a full-stack developer passionate about web, AI, and creative technology.',
  keywords: ['full-stack developer', 'web developer', 'AI automation', 'creative technology', 'portfolio'],
  authors: [{ name: 'Avila Cainan' }],
  openGraph: {
    title: 'Avila Cainan — Full-Stack Developer & Creative Technologist',
    description: 'Professional portfolio of Avila Cainan, a full-stack developer passionate about web, AI, and creative technology.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avila Cainan — Full-Stack Developer & Creative Technologist',
    description: 'Professional portfolio of Avila Cainan, a full-stack developer passionate about web, AI, and creative technology.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-body antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}




