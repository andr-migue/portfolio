import { useState, useEffect, useRef } from 'react'
import './LanguageSelect.css'
import { useLanguage, LANGUAGES, type Lang } from '../../i18n/language'

interface LanguageSelectProps {
    className?: string
}

export default function LanguageSelect({ className = '' }: LanguageSelectProps) {
    const { lang, setLang, t } = useLanguage()
    const [open, setOpen] = useState(false)
    const rootRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLButtonElement>(null)

    // Se cierra al hacer clic fuera o con Escape (devolviendo el foco al botón).
    useEffect(() => {
        if (!open) return
        function handleClick(e: MouseEvent) {
            if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
        }
        function handleKey(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                setOpen(false)
                triggerRef.current?.focus()
            }
        }
        document.addEventListener('mousedown', handleClick)
        document.addEventListener('keydown', handleKey)
        return () => {
            document.removeEventListener('mousedown', handleClick)
            document.removeEventListener('keydown', handleKey)
        }
    }, [open])

    function select(next: Lang) {
        setLang(next)
        setOpen(false)
        triggerRef.current?.focus()
    }

    return (
        <div className={`lang-select ${className}`} ref={rootRef}>
            <button
                type='button'
                ref={triggerRef}
                className='lang-select__trigger'
                onClick={() => setOpen(o => !o)}
                aria-haspopup='true'
                aria-expanded={open}
                aria-label={`${t.language}: ${LANGUAGES[lang]}`}
                title={t.language}
            >
                {lang.toUpperCase()}
                <svg className='lang-select__chevron' viewBox='0 0 10 6' aria-hidden='true'>
                    <path d='M1 1l4 4 4-4' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
            </button>
            {open && (
                <ul className='lang-select__menu'>
                    {(Object.keys(LANGUAGES) as Lang[]).map(code => (
                        <li key={code}>
                            <button
                                type='button'
                                className={`lang-select__option${code === lang ? ' is-active' : ''}`}
                                onClick={() => select(code)}
                                lang={code}
                                aria-current={code === lang}
                            >
                                {LANGUAGES[code]}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
