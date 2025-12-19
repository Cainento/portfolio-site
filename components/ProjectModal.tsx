'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ExternalLink, Github } from 'lucide-react'
import { Project } from '@/data/projects'
import type { Dictionary } from '@/dictionaries'

interface ProjectModalProps {
  project: Project
  onClose: () => void
  dict: Dictionary
}

export default function ProjectModal({ project, onClose, dict }: ProjectModalProps) {
  const projectDict = dict.portfolio.projects[project.id as keyof typeof dict.portfolio.projects]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={dict.portfolio.close}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image */}
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-4 py-2 bg-primary-500 text-white rounded-full">
                {dict.portfolio.categories[project.category === 'AI Projects' ? 'ai' : project.category.toLowerCase().replace(' ', '') as keyof typeof dict.portfolio.categories] || project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {projectDict?.title || project.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {projectDict?.longDescription || project.longDescription}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mb-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>{dict.portfolio.viewDemo}</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <Github className="w-5 h-5" />
                  <span>{dict.portfolio.viewGithub}</span>
                </a>
              )}
            </div>

            {/* Role */}
            <div className="mb-6">
              <h3 className="text-xl font-heading font-semibold mb-2">
                {dict.portfolio.myRole}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{projectDict?.role || project.role}</p>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="text-xl font-heading font-semibold mb-3">
                {dict.portfolio.technologies}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="mb-6">
              <h3 className="text-xl font-heading font-semibold mb-3">
                {dict.portfolio.challengesLabel}
              </h3>
              <ul className="space-y-2">
                {(projectDict?.challenges || project.challenges).map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learnings */}
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                {dict.portfolio.keyLearnings}
              </h3>
              <ul className="space-y-2">
                {(projectDict?.learnings || project.learnings).map((learning, index) => (
                  <li key={index} className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
