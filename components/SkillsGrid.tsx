'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/skills'
import type { Dictionary } from '@/dictionaries'

interface SkillsGridProps {
  dict: Dictionary
}

export default function SkillsGrid({ dict }: SkillsGridProps) {
  const categories = [
    { key: 'Frontend', label: dict.skills.categories.frontend },
    { key: 'Backend', label: dict.skills.categories.backend },
    { key: 'Tools', label: dict.skills.categories.tools },
    { key: 'Soft Skills', label: dict.skills.categories.softSkills },
  ] as const

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {dict.skills.title} <span className="gradient-text">{dict.skills.titleHighlight}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {dict.skills.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter((skill) => skill.category === category.key)
            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                className="card p-6"
              >
                <h3 className="text-2xl font-heading font-semibold mb-6 gradient-text">
                  {category.label}
                </h3>
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        )}
                      </div>
                      {skill.level && (
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.8 }}
                            className="h-2 bg-gradient-primary rounded-full"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
