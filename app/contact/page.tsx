import ContactForm from '@/components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Avila Cainan',
  description: 'Get in touch with Avila Cainan for collaboration, inquiries, or just to say hello.',
}

export default function ContactPage() {
  return (
    <section className="section-padding bg-white dark:bg-gray-900 pt-32">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Send me a message and I'll respond as soon as possible.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}




