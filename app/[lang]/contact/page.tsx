import ContactForm from '@/components/ContactForm'
import { getDictionary } from '@/dictionaries'
import type { Locale } from '@/i18n.config'

interface ContactPageProps {
  params: { lang: Locale }
}

export default async function ContactPage({ params }: ContactPageProps) {
  const dict = await getDictionary(params.lang)

  return (
    <section className="section-padding bg-white dark:bg-gray-900 pt-32">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {dict.contact.title} <span className="gradient-text">{dict.contact.titleHighlight}</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {dict.contact.description}
          </p>
        </div>
        <ContactForm dict={dict} />
      </div>
    </section>
  )
}
