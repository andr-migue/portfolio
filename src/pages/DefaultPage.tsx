import { useState, useEffect, useRef } from 'react'
import './DefaultPage.css'
import SideBar from '../components/SideBar/SideBar'
import Home from '../components/Sections/Home/Home'
import Projects from '../components/Sections/Projects/Projects'
import TimeLine from '../components/Sections/TimeLine/TimeLine'

interface DefaultPageProps {
    theme: 'light' | 'dark'
    toggleTheme: () => void
}

export default function DefaultPage({theme, toggleTheme}: DefaultPageProps) {
    const [activeSection, setActiveSection] = useState(0)
    const contentRef = useRef<HTMLDivElement>(null)

    // Cada sección empieza arriba, venga del menú o de un enlace de Home.
    useEffect(() => {
        contentRef.current?.scrollTo({ top: 0 })
    }, [activeSection])

    const sections = [<Home onNavigate={setActiveSection} />, <Projects />, <TimeLine />]

    return (
        <div className='page'>
            <SideBar active={activeSection} onSelect={setActiveSection} theme={theme} toggleTheme={toggleTheme} />
            <main className='content' ref={contentRef}>
                {sections[activeSection]}
            </main>
        </div>
    )
}
