import Timeline from '@/components/Timeline'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience — Avila Cainan',
  description: 'Professional experience, education, and achievements of Avila Cainan.',
}

export default function ExperiencePage() {
  return (
    <section className="section-padding bg-white dark:bg-gray-900 pt-32">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey, educational background, and notable achievements.
          </p>
        </div>
        <Timeline />
      </div>
    </section>
  )
}




