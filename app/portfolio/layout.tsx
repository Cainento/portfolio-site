import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio — Avila Cainan',
  description: 'A collection of projects showcasing skills in web development, AI, design, and innovative technology solutions.',
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}




