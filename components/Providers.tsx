'use client'

import { ThemeProvider } from './ThemeProvider'
import Navbar from './Navbar'
import Footer from './Footer'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  )
}


