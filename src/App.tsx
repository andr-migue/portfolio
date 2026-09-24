import { useState, useEffect } from 'react'
import DefaultPage from './pages/DefaultPage'
import LanguageProvider from './i18n/LanguageProvider'

export default function App() {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

    return (
        <LanguageProvider>
            <DefaultPage theme={theme} toggleTheme={toggleTheme} />
        </LanguageProvider>
    )
}