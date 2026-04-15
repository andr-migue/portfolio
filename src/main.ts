import './styles/main.css'
import { initSectionNavigation, renderAppShell } from './components'
import { profile } from './data/profile'
import { initialSectionId, navSections, sectionById } from './sections'
import { initContactMailForm } from './utils/contactForm'
import { initThemeToggle } from './utils/theme'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('No se encontró el contenedor #app')
}

app.innerHTML = renderAppShell({
  sections: navSections,
  profile,
  initialSection: sectionById[initialSectionId],
  activeSectionId: initialSectionId
})

initSectionNavigation({ sectionById })

initThemeToggle()
initContactMailForm()