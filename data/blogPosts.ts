export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readingTime: string
  image: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-nextjs-14',
    title: 'Getting Started with Next.js 14: A Complete Guide',
    excerpt: 'Learn how to build modern web applications with Next.js 14, including App Router, Server Components, and new features.',
    date: '2024-01-15',
    category: 'Development',
    readingTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    content: `# Getting Started with Next.js 14: A Complete Guide

Next.js 14 brings exciting new features and improvements to the React framework ecosystem. In this comprehensive guide, we'll explore the key concepts and help you get started with building modern web applications.

## What's New in Next.js 14?

### App Router
The App Router is the new default routing system in Next.js 14, built on React Server Components. It provides:

- **Server Components by default**: Better performance and SEO
- **Layouts**: Share UI between routes
- **Loading states**: Built-in loading UI
- **Error handling**: Error boundaries made easy

### Server Actions
Server Actions allow you to write server-side code directly in your components, simplifying form handling and data mutations.

\`\`\`typescript
async function createPost(formData: FormData) {
  'use server'
  const title = formData.get('title')
  // Save to database
}
\`\`\`

## Getting Started

1. Create a new Next.js project:
\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

2. Choose your preferences (TypeScript, App Router, etc.)

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

## Best Practices

- Use Server Components by default
- Keep client components minimal
- Leverage built-in optimizations
- Follow the file-based routing conventions

## Conclusion

Next.js 14 represents a significant step forward in React framework development. The new features make it easier to build fast, scalable applications while maintaining excellent developer experience.

Happy coding! 🚀`,
  },
  {
    slug: 'ai-integration-in-web-apps',
    title: 'Integrating AI into Modern Web Applications',
    excerpt: 'Explore how to seamlessly integrate AI capabilities into your web applications using modern APIs and frameworks.',
    date: '2024-01-10',
    category: 'AI',
    readingTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    content: `# Integrating AI into Modern Web Applications

Artificial Intelligence is revolutionizing web development. In this post, we'll explore practical ways to integrate AI capabilities into your applications.

## Why Integrate AI?

- Enhanced user experience
- Automation of repetitive tasks
- Intelligent content generation
- Advanced data analysis

## Popular AI APIs

### OpenAI API
The OpenAI API provides access to powerful language models:

\`\`\`typescript
const response = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Hello!' }],
})
\`\`\`

### Other Options
- Anthropic Claude
- Google Gemini
- Hugging Face Transformers

## Best Practices

1. Handle rate limits gracefully
2. Implement proper error handling
3. Cache responses when appropriate
4. Consider user privacy and data security

## Real-World Applications

- Content generation
- Chatbots and assistants
- Code completion
- Image generation

AI integration opens up endless possibilities for creating more intelligent and helpful web applications.`,
  },
  {
    slug: 'building-responsive-designs',
    title: 'Building Responsive Designs with Tailwind CSS',
    excerpt: 'Master the art of creating beautiful, responsive layouts using Tailwind CSS utility-first approach.',
    date: '2024-01-05',
    category: 'Design',
    readingTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
    content: `# Building Responsive Designs with Tailwind CSS

Tailwind CSS makes it easy to create beautiful, responsive designs without writing custom CSS. Let's explore the key concepts.

## Responsive Breakpoints

Tailwind uses mobile-first breakpoints:

- \`sm\`: 640px
- \`md\`: 768px
- \`lg\`: 1024px
- \`xl\`: 1280px
- \`2xl\`: 1536px

## Examples

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Responsive grid -->
</div>
\`\`\`

## Best Practices

- Start with mobile design
- Use container queries when appropriate
- Test on real devices
- Consider touch targets

Responsive design is essential for modern web applications.`,
  },
]




