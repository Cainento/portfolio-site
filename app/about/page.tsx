import AboutHero from '@/components/AboutHero'
import SkillsGrid from '@/components/SkillsGrid'
import Timeline from '@/components/Timeline'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Avila Cainan',
  description: 'Learn more about Avila Cainan, a full-stack developer passionate about web, AI, and creative technology.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <SkillsGrid />
      <Timeline />
    </>
  )
}




