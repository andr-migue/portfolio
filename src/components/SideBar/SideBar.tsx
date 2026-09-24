import { useState, useEffect, useRef } from 'react'
import './SideBar.css'
import NavBar from '../NavBar/NavBar'
import { contact } from '../../contents/contact'
import { getIcon } from '../../contents/icons'

const sections = ['Home', 'Projects', 'TimeLine']

interface SideBarProps {
    active: number
    onSelect: (i: number) => void
    theme: 'light' | 'dark'
    toggleTheme: () => void
}

export default function SideBar({ active, onSelect, theme, toggleTheme }: SideBarProps) {
    const [showImage, setShowImage] = useState(false)
    const [copied, setCopied] = useState<string | null>(null)
    const overlayRef = useRef<HTMLDivElement>(null)

    function copy(key: string, value: string) {
        navigator.clipboard.writeText(value).then(() => {
            setCopied(key)
            setTimeout(() => setCopied(c => (c === key ? null : c)), 1500)
        })
    }

    useEffect(() => {
        if (!showImage) return
        function handleKey(e: KeyboardEvent) {
            if (e.key === 'Escape') setShowImage(false)
        }
        document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [showImage])

    return (
        <aside className='sidebar'>

            <div className='profile-card'>
                <button className='theme-button' onClick={toggleTheme}>
                    <img
                        src={`${import.meta.env.BASE_URL}icons/${theme === 'light' ? 'moon' : 'sun'}.svg`}
                        alt='Toggle theme'
                        className='theme-button_icon'
                    />
                </button>
                <button
                    type='button'
                    className='profile-card__image-button'
                    onClick={() => setShowImage(true)}
                    aria-label='Ver foto de perfil en grande'
                >
                    <img src={`${import.meta.env.BASE_URL}images/hero.jpg`} alt='Miguel Cazorla Zamora' className='profile-card__image'/>
                </button>
                <h1 className='profile-card__name'>Miguel Cazorla Zamora</h1>
                <p className='profile-card__role'>Fullstack Software Developer</p>
            </div>

            <NavBar sections={sections} active={active} onSelect={onSelect} vertical />

            <ul className='sidebar-fields'>
                <li className='sidebar-fields__item'>
                    <span className='sidebar-fields__name'>Email: </span>
                    <span className='sidebar-fields__value sidebar-fields__value--copyable'>
                        <span className='sidebar-fields__email'>{contact.email}</span>
                        <span className='sidebar-fields__actions'>
                            <button
                                type='button'
                                className='sidebar-fields__copy'
                                onClick={() => copy('email', contact.email)}
                                aria-label='Copy email'
                                title='Copy'
                            >
                                <img src={`${import.meta.env.BASE_URL}icons/copy.svg`} alt='' aria-hidden='true' />
                                {copied === 'email' && (
                                    <span className='sidebar-fields__copied'>¡Copied!</span>
                                )}
                            </button>
                            <a
                                href={`mailto:${contact.email}`}
                                className='sidebar-fields__copy'
                                aria-label='Send email'
                                title='Send'
                            >
                                <img src={`${import.meta.env.BASE_URL}icons/send.svg`} alt='' aria-hidden='true' />
                            </a>
                        </span>
                    </span>
                </li>
                <li className='sidebar-fields__item sidebar-fields__item--secondary'>
                    <span className='sidebar-fields__name'>Phone: </span>
                    <span className='sidebar-fields__value sidebar-fields__value--copyable'>
                        <span>{contact.phone}</span>
                        <button
                            type='button'
                            className='sidebar-fields__copy'
                            onClick={() => copy('phone', contact.phone)}
                            aria-label='Copy phone'
                            title='Copy'
                        >
                            <img src={`${import.meta.env.BASE_URL}icons/copy.svg`} alt='' aria-hidden='true' />
                            {copied === 'phone' && (
                                <span className='sidebar-fields__copied'>¡Copied!</span>
                            )}
                        </button>
                    </span>
                </li>
                <li className='sidebar-fields__item sidebar-fields__item--secondary'>
                    <span className='sidebar-fields__name'>Location: </span>
                    <span className='sidebar-fields__value'>{contact.location}</span>
                </li>
                <li className='sidebar-fields__item'>
                    <ul className='sidebar-socials'>
                        {contact.socials.map(s => (
                            <li key={s.name} className='sidebar-socials__item'>
                                <a
                                    href={s.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    title={s.name}
                                    className='sidebar-socials__link'
                                >
                                    <img
                                        src={getIcon(s.name)}
                                        alt={s.name}
                                        className='sidebar-socials__icon'
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className='sidebar-fields__item'>
                    <a
                        href={contact.cvUrl}
                        download='Miguel-Cazorla-Zamora-CV.pdf'
                        className='sidebar-cv'
                    >
                        Download CV
                    </a>
                </li>
            </ul>

            {showImage && (
                <div
                    className='profile-card__overlay'
                    ref={overlayRef}
                    onClick={e => { if (e.target === overlayRef.current) setShowImage(false) }}
                >
                    <div className='profile-card__floating'>
                        <button
                            className='profile-card__floating-close'
                            onClick={() => setShowImage(false)}
                            aria-label='Cerrar'
                        >
                            ✕
                        </button>
                        <img
                            src={`${import.meta.env.BASE_URL}images/hero.jpg`}
                            alt='Miguel Cazorla Zamora'
                            className='profile-card__floating-image'
                        />
                    </div>
                </div>
            )}

        </aside>
    )
}