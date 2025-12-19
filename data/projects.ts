export interface Project {
    id: string
    title: string
    description: string
    longDescription: string
    image: string
    category: string
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
        title: 'Mind.IA',
        description: 'Official website for mind.ia, a Brazilian AI agency focusing on automation and business intelligence.',
        longDescription: 'Mind.IA is the official digital platform for a Brazilian AI agency. It showcases their expertise in automation and business intelligence through a sleek, modern interface. The site features high-performance animations, comprehensive service showcases, and seamless user interaction points.',
        image: '/mindia-screenshot.png',
        category: 'Web Apps',
        techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
        liveUrl: 'https://mind-ai-theta.vercel.app',
        githubUrl: 'https://github.com/Cainento/mind.ai',
        role: 'Lead Developer',
        challenges: [
            'Designing a premium, animation-heavy interface that maintains high performance and SEO scores',
            'Implementing a responsive "mobile-first" layout with complex interactive elements',
            'Creating a versatile content structure to manage services and portfolio cases',
        ],
        learnings: [
            'Advanced Next.js 14 App Router patterns for agency sites',
            'Implementing accessible and performant animations using Framer Motion',
            'Optimizing business conversion paths through strategic UI components',
        ],
    },
    {
        id: '2',
        title: 'AI Logo Generator',
        description: 'Generate unique logos using AI technology',
        longDescription: 'An AI-powered logo generator that creates unique, professional logos based on user descriptions and preferences.',
        image: '/logogen-screenshot.png',
        category: 'AI Projects',
        techStack: ['React', 'OpenAI API', 'Node.js', 'Firebase'],
        liveUrl: 'https://logo-gen-rho.vercel.app',
        githubUrl: 'https://github.com/Cainento/LogoGen',
        role: 'Full-Stack Developer',
        challenges: [
            'Integrating OpenAI API effectively',
            'Optimizing image generation speed',
            'Handling API rate limits',
        ],
        learnings: [
            'OpenAI API integration patterns',
            'Image processing and optimization',
            'API rate limiting strategies',
        ],
    },
    {
        id: '4',
        title: 'TeleCopy Pro',
        description: 'Professional-grade Telegram channel copying solution for real-time synchronization and historic migration',
        longDescription: 'TeleCopy Pro is a high-performance, professional-grade Telegram channel copying solution. Built with a modern microservices-inspired architecture, it allows users to synchronize messages between channels in real-time or perform historical migrations with ease.',
        image: '/telecopy-screenshot.png',
        category: 'Web Apps',
        techStack: ['FastAPI', 'Next.js', 'PostgreSQL', 'Stripe', 'Telethon', 'Docker', 'TypeScript'],
        liveUrl: 'https://tele-copy-pro.vercel.app',
        githubUrl: 'https://github.com/Cainento/teleCopyPro',
        role: 'Full-Stack Developer',
        challenges: [
            'Implementing robust Telegram connection handling with Telethon and 2FA support',
            'Designing a scalable architecture for handling large historical message migrations',
            'Integrating Stripe for complex subscription management and billing',
        ],
        learnings: [
            'Advanced Python and FastAPI service layer design',
            'Real-time message monitoring and processing at scale',
            'Secure session management and encrypted storage for sensitive Telegram credentials',
        ],
    },
    {
        id: '3',
        title: 'Portfolio Website',
        description: 'Modern portfolio website with dark mode and animations',
        longDescription: 'A modern, responsive portfolio website built with Next.js 14, featuring dark mode, smooth animations, and internationalization.',
        image: '/portfolio-screenshot.png',
        category: 'Web Apps',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        githubUrl: 'https://github.com/Cainento/portfolio-site',
        role: 'Designer & Developer',
        challenges: [
            'Creating smooth animations',
            'Implementing dark mode',
            'Building an i18n system',
        ],
        learnings: [
            'Framer Motion animation techniques',
            'Next.js App Router patterns',
            'Internationalization best practices',
        ],
    },
]
