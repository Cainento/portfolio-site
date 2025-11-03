'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 pt-32">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl md:text-[12rem] font-heading font-bold gradient-text mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="btn-primary inline-flex items-center space-x-2">
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
            <Link href="/portfolio" className="btn-secondary inline-flex items-center space-x-2">
              <Search className="w-5 h-5" />
              <span>View Portfolio</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}




