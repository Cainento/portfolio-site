'use client'

import { motion } from 'framer-motion'

import { Download } from 'lucide-react'
import Image from 'next/image'
import profileImg from '@/assets/images/profile.jpg'
import type { Dictionary } from '@/dictionaries'

interface AboutHeroProps {
  dict: Dictionary
}

export default function AboutHero({ dict }: AboutHeroProps) {
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={profileImg}
                alt="Avila Cainan"
                className="w-full h-auto"
                priority
                placeholder="blur"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {dict.about.title} <span className="gradient-text">{dict.about.titleHighlight}</span>
            </h1>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 mb-8">
              <p>{dict.about.paragraphs.intro}</p>
              <p>{dict.about.paragraphs.focus}</p>
              <p>{dict.about.paragraphs.current}</p>
            </div>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 btn-primary"
            >
              <Download className="w-5 h-5" />
              <span>{dict.about.downloadResume}</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
