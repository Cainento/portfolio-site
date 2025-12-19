import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import { getDictionary } from '@/dictionaries'
import type { Locale } from '@/i18n.config'

interface HomePageProps {
  params: { lang: Locale }
}

export default async function Home({ params }: HomePageProps) {
  const dict = await getDictionary(params.lang)

  return (
    <>
      <Hero dict={dict} lang={params.lang} />
      <Highlights dict={dict} />
    </>
  )
}
