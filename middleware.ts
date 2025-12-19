import { NextRequest, NextResponse } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { i18n } from './i18n.config'

function getLocale(request: NextRequest): string {
    // Check for saved preference in cookie
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
    if (cookieLocale && i18n.locales.includes(cookieLocale as any)) {
        return cookieLocale
    }

    // Negotiator expects a plain object with headers
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    const locales: string[] = [...i18n.locales]
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

    try {
        const locale = matchLocale(languages, locales, i18n.defaultLocale)
        return locale
    } catch {
        return i18n.defaultLocale
    }
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Check if pathname is missing locale
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Skip static files and API routes
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.') // static files
    ) {
        return
    }

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        return NextResponse.redirect(
            new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
        )
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next, api)
        '/((?!_next|api|.*\\..*).*)',
    ],
}
