export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string | 'Present'
  description: string[]
  type: 'work' | 'education' | 'achievement'
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Full-Stack Developer',
    company: 'AcheiGO',
    location: 'Remote',
    startDate: '2024',
    endDate: 'Present',
    type: 'work',
    description: [
      'Led development of the AcheiGO platform, a comprehensive local business discovery platform',
      'Architected and implemented scalable backend systems using Node.js and MongoDB',
      'Built responsive frontend components with React and Next.js',
      'Collaborated with cross-functional teams to deliver features on time and within budget',
      'Optimized application performance, resulting in 40% faster load times',
    ],
  },
  {
    id: '2',
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: 'Remote',
    startDate: '2023',
    endDate: '2024',
    type: 'work',
    description: [
      'Developed custom web applications for various clients',
      'Created responsive websites using modern technologies',
      'Implemented SEO best practices to improve client visibility',
      'Managed project timelines and client communications',
    ],
  },
  {
    id: '3',
    title: 'Software Engineering',
    company: 'UNIEGO',
    location: 'Brazil',
    startDate: '2023',
    endDate: 'Present',
    type: 'education',
    description: [
      'Pursuing Bachelor\'s degree in Software Engineering',
      'Focus on full-stack development, algorithms, and software architecture',
      'Active member of programming and tech innovation clubs',
    ],
  },
  {
    id: '4',
    title: 'Full-Stack Web Development Certification',
    company: 'FreeCodeCamp',
    location: 'Online',
    startDate: '2023',
    endDate: '2023',
    type: 'education',
    description: [
      'Completed comprehensive full-stack web development curriculum',
      'Built multiple projects demonstrating proficiency in modern web technologies',
      'Learned best practices for responsive design and accessibility',
    ],
  },
  {
    id: '5',
    title: 'Launched AcheiGO Platform',
    company: 'AcheiGO',
    location: 'Brazil',
    startDate: '2025',
    endDate: '2025',
    type: 'achievement',
    description: [
      'Successfully launched the AcheiGO platform, serving thousands of users',
      'Implemented innovative features that improved user engagement by 60%',
      'Received positive feedback from early adopters and stakeholders',
    ],
  },
]




