'use client'

import Link from 'next/link'
import { Github, Linkedin, Youtube, Instagram, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com', ariaLabel: 'GitHub profile' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', ariaLabel: 'LinkedIn profile' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@GlobalLearner', ariaLabel: 'YouTube channel Global Learner' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', ariaLabel: 'Instagram profile' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold gradient-text mb-4">
              Avila Cainan
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Full-Stack Developer & Creative Technologist
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
            <a
              href="mailto:contact@avilacainan.com"
              className="flex items-center space-x-2 mt-4 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>contact@avilacainan.com</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Avila Cainan. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}




