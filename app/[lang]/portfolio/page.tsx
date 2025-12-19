'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import PortfolioGrid from '@/components/PortfolioGrid'
import ProjectModal from '@/components/ProjectModal'
import { projects, Project } from '@/data/projects'
import type { Locale } from '@/i18n.config'

// Import dictionaries directly for client component
import ptBr from '@/dictionaries/pt-br.json'
import en from '@/dictionaries/en.json'

const dictionaries = {
  'pt-br': ptBr,
  'en': en,
}

export default function PortfolioPage() {
  const params = useParams()
  const lang = (params.lang as Locale) || 'pt-br'
  const dict = dictionaries[lang] || dictionaries['pt-br']

  const categories = Object.values(dict.portfolio.categories)
  const [selectedCategory, setSelectedCategory] = useState<string>(dict.portfolio.categories.all)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Map display names back to data categories
  const categoryMap: Record<string, string> = {
    [dict.portfolio.categories.all]: 'All',
    [dict.portfolio.categories.webapps]: 'Web Apps',
    [dict.portfolio.categories.ai]: 'AI Projects',
    [dict.portfolio.categories.design]: 'Design',
    [dict.portfolio.categories.experimental]: 'Experimental',
  }

  const filteredProjects =
    selectedCategory === dict.portfolio.categories.all
      ? projects
      : projects.filter((project) => project.category === categoryMap[selectedCategory])

  return (
    <>
      <section className="section-padding bg-white dark:bg-gray-900 pt-32">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              {dict.portfolio.title} <span className="gradient-text">{dict.portfolio.titleHighlight}</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {dict.portfolio.description}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${selectedCategory === category
                  ? 'bg-gradient-primary text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <PortfolioGrid
            projects={filteredProjects}
            onProjectClick={setSelectedProject}
            dict={dict}
          />
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          dict={dict}
        />
      )}
    </>
  )
}
