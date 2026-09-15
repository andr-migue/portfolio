import { useState } from 'react'
import './DefaultPage.css'
import SideBar from '../components/SideBar/SideBar'
import Experience from '../components/Sections/Experience/Experience'
import Projects from '../components/Sections/Projects/Projects'
import Contact from '../components/Sections/Contact/Contact'

const sections = [<Projects />, <Experience />,<Contact />]

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