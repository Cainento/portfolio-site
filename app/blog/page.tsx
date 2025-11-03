import BlogList from '@/components/BlogList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Avila Cainan',
  description: 'Thoughts, insights, and tutorials on web development, AI, and creative technology.',
}

export default function BlogPage() {
  return (
    <section className="section-padding bg-white dark:bg-gray-900 pt-32">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            My <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts, insights, and tutorials on web development, AI, and creative technology.
          </p>
        </div>
        <BlogList />
      </div>
    </section>
  )
}




