import './styles/main.css'
import { initialSectionSummary, navSections, profile } from './data/siteContent'
import { renderAppShell } from './layout/renderAppShell'
import { initThemeToggle } from './utils/theme'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('No se encontró el contenedor #app')
}

app.innerHTML = renderAppShell({
  sections: navSections,
  profile,
  summary: initialSectionSummary
})

initThemeToggle()