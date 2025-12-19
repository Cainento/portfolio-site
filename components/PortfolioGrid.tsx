'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { Project } from '@/data/projects'
import type { Dictionary } from '@/dictionaries'

interface PortfolioGridProps {
  projects: Project[]
  onProjectClick: (project: Project) => void
  dict: Dictionary
}

export default function PortfolioGrid({ projects, onProjectClick, dict }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          whileHover={{ y: -5 }}
          className="card overflow-hidden cursor-pointer group"
          onClick={() => onProjectClick(project)}
        >
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="px-3 py-1 bg-primary-500 text-white text-sm rounded-full">
                {dict.portfolio.categories[project.category === 'AI Projects' ? 'ai' : project.category.toLowerCase().replace(' ', '') as keyof typeof dict.portfolio.categories] || project.category}
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-heading font-semibold mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              {dict.portfolio.projects[project.id as keyof typeof dict.portfolio.projects]?.description || project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-md text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-md text-gray-700 dark:text-gray-300">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center space-x-1 hover:text-primary-500 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{dict.portfolio.live}</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center space-x-1 hover:text-primary-500 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>{dict.portfolio.code}</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
