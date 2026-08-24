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

        if (!nav || !indicator) return

        function syncIndicator() {
            const button = buttonRef.current[active]
            if (!nav || !indicator || !button) return

            // offsetLeft/offsetTop son relativos al nav (position: relative) y no
            // dependen del scroll, a diferencia de getBoundingClientRect.
            indicator.style.width = `${button.offsetWidth}px`
            indicator.style.height = `${button.offsetHeight}px`
            indicator.style.transform = `translate(${button.offsetLeft}px, ${button.offsetTop}px)`
        }

        syncIndicator()

        // El nav pasa de vertical a horizontal según el ancho del viewport:
        // el indicador debe recolocarse cuando cambia el layout.
        const observer = new ResizeObserver(syncIndicator)
        observer.observe(nav)

        return () => observer.disconnect()
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
