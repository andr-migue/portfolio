import { useState, useEffect, type ReactNode } from 'react'
import { LanguageContext, type Lang } from './language'
import { ui } from './ui'

const STORAGE_KEY = 'lang'

// Primera visita: idioma del navegador. Después, el último elegido.
function initialLang(): Lang {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved === 'en' || saved === 'es') return saved
    } catch {
        // Sin acceso a localStorage (modo privado, bloqueado): se usa el navegador.
    }
    return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>(initialLang)

    useEffect(() => {
        document.documentElement.lang = lang
        document.title = ui[lang].meta.title
        document.querySelector('meta[name="description"]')
            ?.setAttribute('content', ui[lang].meta.description)
        try {
            localStorage.setItem(STORAGE_KEY, lang)
        } catch {
            // La preferencia simplemente no se recuerda.
        }
    }, [lang])

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    )
}
