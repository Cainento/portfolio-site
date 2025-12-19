import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import '../globals.css'
import { i18n, type Locale } from '@/i18n.config'
import { getDictionary } from '@/dictionaries'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({
    params,
}: {
    params: { lang: Locale }
}): Promise<Metadata> {
    const dict = await getDictionary(params.lang)
    const isPortuguese = params.lang === 'pt-br'

    return {
        title: {
            default: 'Avila Cainan | ' + (isPortuguese ? 'Desenvolvedor Full-Stack' : 'Full-Stack Developer'),
            template: '%s | Avila Cainan',
        },
        description: dict.hero.description,
        keywords: isPortuguese
            ? ['desenvolvedor full-stack', 'desenvolvedor web', 'react', 'next.js', 'typescript', 'brasil']
            : ['full-stack developer', 'web developer', 'react', 'next.js', 'typescript', 'brazil'],
        authors: [{ name: 'Avila Cainan' }],
        creator: 'Avila Cainan',
        openGraph: {
            type: 'website',
            locale: params.lang === 'pt-br' ? 'pt_BR' : 'en_US',
            url: 'https://avilacainan.com',
            siteName: 'Avila Cainan',
            title: 'Avila Cainan | ' + (isPortuguese ? 'Desenvolvedor Full-Stack' : 'Full-Stack Developer'),
            description: dict.hero.description,
        },
        alternates: {
            canonical: '/',
            languages: {
                'pt-BR': '/pt-br',
                'en': '/en',
            },
        },
    }
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { lang: Locale }
}) {
    const dict = await getDictionary(params.lang)

    return (
        <html lang={params.lang === 'pt-br' ? 'pt-BR' : 'en'} suppressHydrationWarning>
            <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
                <Providers>
                    <ThemeProvider>
                        <div className="min-h-screen flex flex-col">
                            <Navbar dict={dict} lang={params.lang} />
                            <main className="flex-grow pt-16 md:pt-20">
                                {children}
                            </main>
                            <Footer dict={dict} lang={params.lang} />
                        </div>
                    </ThemeProvider>
                </Providers>
            </body>
        </html>
    )
}
