'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import Image from 'next/image'

export default function AboutHero() {
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
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
                alt="Avila Cainan"
                fill
                className="object-cover"
                priority
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
              About <span className="gradient-text">Me</span>
            </h1>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 mb-8">
              <p>
                I'm a passionate full-stack developer and creative technologist
                with a deep love for building innovative digital experiences.
                My journey in software development began in 2023, and since
                then, I've been dedicated to mastering the art of creating
                beautiful, functional, and impactful applications.
              </p>
              <p>
                My focus lies in the intersection of technology and creativity,
                where I bring together cutting-edge web technologies, AI
                automation, and thoughtful design to solve real-world problems.
                I believe in writing clean, maintainable code and always staying
                curious about emerging technologies.
              </p>
              <p>
                In 2025, I launched <strong>AcheiGO</strong>, a platform that
                helps users discover local businesses, which has been a
                significant milestone in my career. This project has allowed me
                to apply my full-stack expertise while learning from real-world
                challenges.
              </p>
              <p>
                Currently, I'm pursuing a Software Engineering degree at UNIEGO,
                continuously expanding my knowledge and skills. When I'm not
                coding, you can find me exploring new technologies, contributing
                to open-source projects, or sharing my learning journey.
              </p>
            </div>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 btn-primary"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}




