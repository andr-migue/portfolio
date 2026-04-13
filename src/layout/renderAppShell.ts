import type { NavSection, Profile } from '../data/siteContent'

type SectionSummary = {
  title: string
  description: string
}

type RenderAppShellParams = {
  sections: NavSection[]
  profile: Profile
  summary: SectionSummary
}

export const renderAppShell = ({ sections, profile, summary }: RenderAppShellParams): string => {
  const navLinks = sections
    .map((section) => `<a href="#${section.id}">${section.label}</a>`)
    .join('')

  return `
    <div class="app-shell">
      <header class="topbar">
        <nav class="topbar__nav" aria-label="Secciones principales">
          ${navLinks}
        </nav>
        <button class="theme-switch" type="button" aria-label="Cambiar modo oscuro">
          🌙
        </button>
      </header>

      <div class="layout">
        <aside class="sidebar" aria-label="Resumen de sección">
          <div class="profile-card">
            <img
              class="profile-card__image"
              src="${profile.imageSrc}"
              alt="${profile.imageAlt}"
            />
            <h2 class="profile-card__name">${profile.name}</h2>
            <p class="profile-card__role">${profile.role}</p>
          </div>

          <div class="sidebar__section-summary">
            <h2>${summary.title}</h2>
            <p>${summary.description}</p>
          </div>
        </aside>

        <main class="content" id="hero">
          <h1>Portfolio profesional en construcción</h1>
          <p>
            Este es el nuevo punto de entrada base. Desde aquí iremos montando cada sección
            con contenido real y estructura modular.
          </p>
        </main>
      </div>
    </div>
  `
}
