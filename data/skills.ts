export interface Skill {
  name: string
  category: 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills'
  level?: number // 1-100, optional for soft skills
}

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', category: 'Frontend', level: 95 },
  { name: 'CSS3', category: 'Frontend', level: 90 },
  { name: 'JavaScript', category: 'Frontend', level: 92 },
  { name: 'TypeScript', category: 'Frontend', level: 88 },
  { name: 'React', category: 'Frontend', level: 90 },
  { name: 'Next.js', category: 'Frontend', level: 85 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 90 },
  { name: 'Framer Motion', category: 'Frontend', level: 80 },
  
  // Backend
  { name: 'Node.js', category: 'Backend', level: 88 },
  { name: 'Python', category: 'Backend', level: 85 },
  { name: 'Express.js', category: 'Backend', level: 87 },
  { name: 'MongoDB', category: 'Backend', level: 85 },
  { name: 'PostgreSQL', category: 'Backend', level: 80 },
  { name: 'RESTful APIs', category: 'Backend', level: 90 },
  { name: 'GraphQL', category: 'Backend', level: 75 },
  
  // Tools
  { name: 'Git', category: 'Tools', level: 90 },
  { name: 'VSCode', category: 'Tools', level: 95 },
  { name: 'Figma', category: 'Tools', level: 85 },
  { name: 'Docker', category: 'Tools', level: 75 },
  { name: 'AWS', category: 'Tools', level: 70 },
  { name: 'Linux', category: 'Tools', level: 80 },
  
  // Soft Skills
  { name: 'Problem Solving', category: 'Soft Skills' },
  { name: 'Teamwork', category: 'Soft Skills' },
  { name: 'Adaptability', category: 'Soft Skills' },
  { name: 'Communication', category: 'Soft Skills' },
  { name: 'Time Management', category: 'Soft Skills' },
  { name: 'Leadership', category: 'Soft Skills' },
]




