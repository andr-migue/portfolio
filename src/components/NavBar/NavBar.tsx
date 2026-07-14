import { useRef, useEffect } from "react"
import './NavBar.css'

interface NavbarProps {
    sections: string[]
    active: number
    onSelect: (i: number) => void
    vertical?: boolean
}

export default function NavBar({ sections, active, onSelect, vertical = false }: NavbarProps) {
    const navRef = useRef<HTMLElement>(null)
    const indicatorRef = useRef<HTMLSpanElement>(null)
    const buttonRef = useRef<(HTMLButtonElement | null)[]>([])

    useEffect(() => {
        const nav = navRef.current
        const indicator = indicatorRef.current
        const button = buttonRef.current[active]

        if (!nav || !indicator || !button) return

        const navRect = nav.getBoundingClientRect()
        const buttonRect = button.getBoundingClientRect()

        indicator.style.width = `${buttonRect.width}px`
        indicator.style.height = `${buttonRect.height}px`
        indicator.style.transform = `translate(${buttonRect.left - navRect.left}px, ${buttonRect.top - navRect.top}px)`
    }, [active])

    return (
        <header className={`navbar${vertical ? '-vertical' : ''}`}>
            <nav className='navbar__nav' ref={navRef}>
                <span className="navbar__indicator" ref={indicatorRef} aria-hidden="true" />
                {sections.map((section, i) => (
                    <button
                        key={section}
                        ref={el => { buttonRef.current[i] = el }}
                        className={`navbar__button${active === i ? ' is-active' : ''}`}
                        onClick={() => onSelect(i)}
                    >
                        {section}
                    </button>
                ))}
            </nav>
        </header>
    )
}
