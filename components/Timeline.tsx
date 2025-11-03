'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award } from 'lucide-react'
import { experiences } from '@/data/experience'

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Award,
}

export default function Timeline() {
  const workExperiences = experiences.filter((exp) => exp.type === 'work')
  const education = experiences.filter((exp) => exp.type === 'education')
  const achievements = experiences.filter((exp) => exp.type === 'achievement')

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
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A timeline of my professional experience, education, and achievements.
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold mb-8 flex items-center space-x-2">
            <Briefcase className="w-6 h-6 text-primary-500" />
            <span>Work Experience</span>
          </h3>
          <div className="space-y-8">
            {workExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative pl-8 border-l-2 border-primary-500 dark:border-primary-600"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full" />
                <div className="card p-6 ml-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-heading font-semibold">
                        {exp.title}
                      </h4>
                      <p className="text-primary-500 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                      {exp.startDate} - {exp.endDate}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-primary-500 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold mb-8 flex items-center space-x-2">
            <GraduationCap className="w-6 h-6 text-primary-500" />
            <span>Education</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card p-6"
              >
                <h4 className="text-xl font-heading font-semibold mb-2">
                  {edu.title}
                </h4>
                <p className="text-primary-500 font-medium mb-2">
                  {edu.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {edu.startDate} - {edu.endDate} • {edu.location}
                </p>
                <ul className="space-y-2">
                  {edu.description.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="text-primary-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        {achievements.length > 0 && (
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-8 flex items-center space-x-2">
              <Award className="w-6 h-6 text-primary-500" />
              <span>Achievements</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="card p-6 border-2 border-primary-500"
                >
                  <h4 className="text-xl font-heading font-semibold mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-primary-500 font-medium mb-2">
                    {achievement.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {achievement.startDate}
                  </p>
                  <ul className="space-y-2">
                    {achievement.description.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="text-primary-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}




