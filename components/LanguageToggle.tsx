'use client'

import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import type { Locale } from '@/i18n.config'
import { i18n } from '@/i18n.config'

interface LanguageToggleProps {
    currentLocale: Locale
}

export default function LanguageToggle({ currentLocale }: LanguageToggleProps) {
    const pathname = usePathname()
    const router = useRouter()

    const handleLanguageChange = (newLocale: Locale) => {
        if (newLocale === currentLocale) return

        // Save preference to cookie
        document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`

        // Remove current locale from pathname and add new one
        const segments = pathname.split('/')
        segments[1] = newLocale
        const newPath = segments.join('/')

        router.push(newPath)
    }

    return (
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            {i18n.locales.map((locale) => (
                <motion.button
                    key={locale}
                    onClick={() => handleLanguageChange(locale)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${currentLocale === locale
                            ? 'text-white'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                        }`}
                >
                    {currentLocale === locale && (
                        <motion.div
                            layoutId="language-indicator"
                            className="absolute inset-0 bg-gradient-primary rounded-md"
                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">
                        {locale === 'pt-br' ? 'PT' : 'EN'}
                    </span>
                </motion.button>
            ))}
        </div>
    )
}
