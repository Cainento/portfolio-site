export interface Skill {
    name: string
    category: 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills'
    level?: number
}

export const skills: Skill[] = [
    // Frontend
    { name: 'React', category: 'Frontend', level: 90 },
    { name: 'Next.js', category: 'Frontend', level: 85 },
    { name: 'TypeScript', category: 'Frontend', level: 85 },
    { name: 'Tailwind CSS', category: 'Frontend', level: 90 },
    { name: 'JavaScript', category: 'Frontend', level: 90 },
    { name: 'HTML/CSS', category: 'Frontend', level: 95 },

    // Backend
    { name: 'Node.js', category: 'Backend', level: 80 },
    { name: 'Firebase', category: 'Backend', level: 85 },
    { name: 'REST APIs', category: 'Backend', level: 85 },
    { name: 'PostgreSQL', category: 'Backend', level: 75 },

    // Tools
    { name: 'Git', category: 'Tools', level: 85 },
    { name: 'Docker', category: 'Tools', level: 70 },
    { name: 'VS Code', category: 'Tools', level: 95 },
    { name: 'Figma', category: 'Tools', level: 75 },

    // Soft Skills
    { name: 'Problem Solving', category: 'Soft Skills' },
    { name: 'Communication', category: 'Soft Skills' },
    { name: 'Team Collaboration', category: 'Soft Skills' },
    { name: 'Continuous Learning', category: 'Soft Skills' },
]
