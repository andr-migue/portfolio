import { createContext, useContext } from 'react'
import { ui } from './ui'

export type Lang = 'en' | 'es'

// Cada idioma se nombra en su propio idioma, como es habitual en selectores.
export const LANGUAGES: Record<Lang, string> = {
    en: 'English',
    es: 'Español',
}

// Texto de contenido en todos los idiomas soportados.
export type Localized = Record<Lang, string>

interface LanguageContextValue {
    lang: Lang
    setLang: (lang: Lang) => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

// Fechas guardadas como 'YYYY-MM'; se formatean según el idioma
// ('Apr 2026' / 'abr 2026').
function formatMonth(yearMonth: string, lang: Lang) {
    const [year, month] = yearMonth.split('-').map(Number)
    return new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric' })
        .format(new Date(year, month - 1))
}

export function useLanguage() {
    const ctx = useContext(LanguageContext)
    if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
    const { lang, setLang } = ctx
    const t = ui[lang]

    return {
        lang,
        setLang,
        t,
        // Texto de contenido en el idioma activo.
        l: (text: Localized) => text[lang],
        // Nombre visible de un tag; los que no tienen traducción se muestran tal cual.
        tag: (name: string) => t.tags[name] ?? name,
        // Periodo 'inicio – fin'; sin fin significa que sigue en curso.
        period: (start: string, end?: string) =>
            `${formatMonth(start, lang)} – ${end ? formatMonth(end, lang) : t.present}`,
    }
}
