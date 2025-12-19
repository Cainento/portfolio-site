'use client'

import { Code, Sparkles, Palette, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Dictionary } from '@/dictionaries'

interface HighlightsProps {
  dict: Dictionary
}

export default function Highlights({ dict }: HighlightsProps) {
  const highlights = [
    {
      icon: Code,
      title: dict.highlights.items.webDev.title,
      description: dict.highlights.items.webDev.description,
    },
    {
      icon: Sparkles,
      title: dict.highlights.items.aiAutomation.title,
      description: dict.highlights.items.aiAutomation.description,
    },
    {
      icon: Palette,
      title: dict.highlights.items.design.title,
      description: dict.highlights.items.design.description,
    },
    {
      icon: Rocket,
      title: dict.highlights.items.innovation.title,
      description: dict.highlights.items.innovation.description,
    },
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {dict.highlights.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {dict.highlights.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="card p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
