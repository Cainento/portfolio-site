export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  category: 'Web Apps' | 'AI Projects' | 'Design' | 'Experimental'
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  role: string
  challenges: string[]
  learnings: string[]
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AcheiGO Platform',
    description: 'A comprehensive platform for discovering and connecting local businesses.',
    longDescription: 'AcheiGO is a full-stack platform designed to help users discover local businesses and services in their area. The platform features real-time search, business listings, user reviews, and interactive maps.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    category: 'Web Apps',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    liveUrl: 'https://acheigo.com',
    githubUrl: 'https://github.com',
    role: 'Full-Stack Developer & Lead Architect',
    challenges: [
      'Implementing real-time search with high performance',
      'Managing complex state across multiple components',
      'Optimizing database queries for fast response times',
    ],
    learnings: [
      'Advanced Next.js server-side rendering techniques',
      'Database optimization and indexing strategies',
      'Building scalable RESTful APIs',
    ],
  },
  {
    id: '2',
    title: 'AI Content Generator',
    description: 'An intelligent tool that generates high-quality content using AI.',
    longDescription: 'This AI-powered content generator helps users create blog posts, social media content, and marketing copy. It uses advanced NLP models to understand context and generate relevant, engaging content.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    category: 'AI Projects',
    techStack: ['Python', 'React', 'OpenAI API', 'FastAPI', 'PostgreSQL'],
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    role: 'AI Engineer & Full-Stack Developer',
    challenges: [
      'Integrating multiple AI models seamlessly',
      'Handling rate limits and API costs',
      'Ensuring content quality and relevance',
    ],
    learnings: [
      'Advanced prompt engineering techniques',
      'API optimization and caching strategies',
      'Working with large language models',
    ],
  },
  {
    id: '3',
    title: 'E-Commerce Dashboard',
    description: 'A modern admin dashboard for managing e-commerce operations.',
    longDescription: 'A comprehensive dashboard built for e-commerce businesses to manage products, orders, customers, and analytics. Features real-time updates, data visualization, and automated reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    category: 'Web Apps',
    techStack: ['React', 'TypeScript', 'Material-UI', 'Chart.js', 'Node.js'],
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    role: 'Frontend Developer',
    challenges: [
      'Building complex data visualizations',
      'Managing large datasets efficiently',
      'Creating intuitive user interfaces',
    ],
    learnings: [
      'Advanced React patterns and hooks',
      'Data visualization best practices',
      'Performance optimization techniques',
    ],
  },
  {
    id: '4',
    title: 'Creative Portfolio Website',
    description: 'A stunning portfolio website showcasing creative work.',
    longDescription: 'A visually striking portfolio website featuring smooth animations, interactive elements, and a unique design system. Built with modern web technologies and best practices.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
    category: 'Design',
    techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    role: 'UI/UX Designer & Developer',
    challenges: [
      'Creating smooth animations without performance issues',
      'Ensuring accessibility while maintaining visual appeal',
      'Optimizing for various screen sizes',
    ],
    learnings: [
      'Advanced animation techniques with Framer Motion',
      'Accessibility best practices',
      'Responsive design patterns',
    ],
  },
  {
    id: '5',
    title: 'Blockchain Voting System',
    description: 'A secure, transparent voting system built on blockchain technology.',
    longDescription: 'An experimental voting system that leverages blockchain technology to ensure transparency, security, and immutability of votes. Features real-time verification and anonymous voting.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
    category: 'Experimental',
    techStack: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'Node.js'],
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    role: 'Blockchain Developer',
    challenges: [
      'Understanding blockchain consensus mechanisms',
      'Implementing secure smart contracts',
      'Managing gas costs and optimization',
    ],
    learnings: [
      'Smart contract development and security',
      'Web3 integration patterns',
      'Blockchain architecture principles',
    ],
  },
  {
    id: '6',
    title: 'Real-time Collaboration Tool',
    description: 'A collaborative workspace for teams to work together in real-time.',
    longDescription: 'A powerful collaboration tool that enables teams to work together in real-time. Features include shared whiteboards, document editing, video conferencing, and task management.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
    category: 'Web Apps',
    techStack: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    role: 'Full-Stack Developer',
    challenges: [
      'Implementing real-time synchronization',
      'Handling concurrent edits',
      'Managing WebRTC connections',
    ],
    learnings: [
      'WebSocket programming and real-time systems',
      'Operational transformation algorithms',
      'Video streaming and conferencing technologies',
    ],
  },
]




