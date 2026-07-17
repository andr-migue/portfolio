import { useState, useEffect, useRef } from 'react'
import './SideBar.css'
import NavBar from '../NavBar/NavBar'

const sections = ['About', 'Experience', 'Projects', 'Contact']

interface SideBarProps {
    active: number
    onSelect: (i: number) => void
    theme: 'light' | 'dark'
    toggleTheme: () => void
}

export default function SideBar({ active, onSelect, theme, toggleTheme }: SideBarProps) {
    const [showImage, setShowImage] = useState(false)
    const overlayRef = useRef<HTMLDivElement>(null)

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
                        src={theme === 'light' ? '/icons/moon.svg' : '/icons/sun.svg'}
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
                    <img src='images/hero.jpg' alt='Profile Image' className='profile-card__image'/>
                </button>
                <h2 className='profile-card__name'>Miguel Cazorla Zamora</h2>
                <p className='profile-card__role'>Fullstack Software Developer</p>
            </div>

            <NavBar sections={sections} active={active} onSelect={onSelect} vertical />

            <ul className='sidebar-fields'>
                <li className='sidebar-fields__item'>
                    <span className='sidebar-fields__name'>Email: </span>
                    <span className='sidebar-fields__value'>
                        <a href='mailto: miguelzamora210405@gmail.com'>miguelzamora210405@gmail.com</a>
                    </span>
                </li>
                <li className='sidebar-fields__item'>
                    <span className='sidebar-fields__name'>Phone: </span>
                    <span className='sidebar-fields__value'>+53 56860394</span>
                </li> 
                <li className='sidebar-fields__item'>
                    <span className='sidebar-fields__name'>GitHub: </span>
                    <span className='sidebar-fields__value'>
                        <a href='https://github.com/andr-migue'>andr-migue</a>
                    </span>
                </li> 
                <li className='sidebar-fields__item'>
                    <span className='sidebar-fields__name'>Location: </span>
                    <span className='sidebar-fields__value'>Havana, Cuba</span>
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
                            src='images/hero.jpg'
                            alt='Profile Image'
                            className='profile-card__floating-image'
                        />
                    </div>
                </div>
            )}

        </aside>
    )
}