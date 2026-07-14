import { useState } from 'react'
import './default-page.css'
import SideBar from '../components/Sidebar/SideBar'
import About from '../components/contents/About/About'
import Skills from '../components/contents/Skills/Skills'
import Experience from '../components/contents/Experience/Experience'
import Projects from '../components/contents/Projects/Projects'
import Contact from '../components/contents/Contact/Contact'

const sections = [<About />, <Skills />, <Experience />, <Projects />, <Contact />]

interface DefaultPageProps {
    theme: 'light' | 'dark'
    toggleTheme: () => void
}

export default function DefaultPage({theme, toggleTheme}: DefaultPageProps) {
    const [activeSection, setActiveSection] = useState(0)

    return (
        <div className='page'>
            <SideBar active={activeSection} onSelect={setActiveSection} theme={theme} toggleTheme={toggleTheme} />
            <div className='content'>
                {sections[activeSection]}
            </div>
        </div>
    )
}