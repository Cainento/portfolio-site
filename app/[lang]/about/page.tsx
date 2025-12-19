import AboutHero from '@/components/AboutHero'
import SkillsGrid from '@/components/SkillsGrid'

import { getDictionary } from '@/dictionaries'
import type { Locale } from '@/i18n.config'

interface AboutPageProps {
  params: { lang: Locale }
}

export default async function AboutPage({ params }: AboutPageProps) {
  const dict = await getDictionary(params.lang)

  return (
    <>
      <AboutHero dict={dict} />
      <SkillsGrid dict={dict} />

    </>
  )
}
