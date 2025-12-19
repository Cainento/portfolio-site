'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const pathname = usePathname()
  const lang = pathname.split('/')[1] || 'pt-br'

  const isPortuguese = lang === 'pt-br'

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl font-heading font-bold gradient-text mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            {isPortuguese ? 'Página Não Encontrada' : 'Page Not Found'}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            {isPortuguese
              ? 'Ops! A página que você está procurando não existe ou foi movida.'
              : "Oops! The page you're looking for doesn't exist or has been moved."
            }
          </p>
          <Link
            href={`/${lang}`}
            className="inline-flex items-center space-x-2 btn-primary"
          >
            <Home className="w-5 h-5" />
            <span>{isPortuguese ? 'Voltar ao Início' : 'Back to Home'}</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
