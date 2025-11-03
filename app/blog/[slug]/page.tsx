import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'
import { blogPosts } from '@/data/blogPosts'
import { Metadata } from 'next'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} — Avila Cainan`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="section-padding bg-white dark:bg-gray-900 pt-32">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </span>
          </div>
          <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {post.title}
          </h1>
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 leading-relaxed">
            {post.content.split('\n').map((line, index) => {
              // Simple markdown-like rendering
              if (line.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-heading font-bold mt-8 mb-4">{line.substring(2)}</h1>
              }
              if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-heading font-semibold mt-6 mb-3">{line.substring(3)}</h2>
              }
              if (line.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-heading font-semibold mt-4 mb-2">{line.substring(4)}</h3>
              }
              if (line.startsWith('- ')) {
                return <li key={index} className="ml-6 mb-2">{line.substring(2)}</li>
              }
              if (line.startsWith('```')) {
                return null // Skip code block markers for now
              }
              if (line.trim() === '') {
                return <br key={index} />
              }
              if (line.trim().startsWith('`') && line.trim().endsWith('`')) {
                return <code key={index} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">{line.trim().slice(1, -1)}</code>
              }
              return <p key={index} className="mb-4">{line}</p>
            })}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <a
            href="/blog"
            className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
          >
            ← Back to Blog
          </a>
        </div>
      </div>
    </article>
  )
}




