import './styles/main.css'
import { profile } from './data/profile'
import { renderAppShell } from './layout/renderAppShell'
import { initSectionNavigation } from './layout/topbar/initSectionNavigation'
import { initialSectionId, navSections, sectionById } from './sections'
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