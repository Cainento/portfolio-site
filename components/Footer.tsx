'use client'

import Link from 'next/link'
import { Github, Linkedin, Youtube, Instagram, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Dictionary } from '@/dictionaries'
import type { Locale } from '@/i18n.config'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/Cainento', ariaLabel: 'GitHub profile' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/avilacainan', ariaLabel: 'LinkedIn profile' },
  { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@cainento', ariaLabel: 'YouTube channel Cainento' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/cainento/', ariaLabel: 'Instagram profile' },
]

interface FooterProps {
  dict: Dictionary
  lang: Locale
}

export default function Footer({ dict, lang }: FooterProps) {
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
              {dict.footer.role}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">{dict.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}/about`} className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/portfolio`} className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
                  {dict.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">{dict.footer.connect}</h4>
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
              href="mailto:cainento@outlook.com"
              className="flex items-center space-x-2 mt-4 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>cainento@outlook.com</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Avila Cainan. {dict.footer.copyright}</p>
          <p className="mt-2 text-sm">
            {dict.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  )
}
