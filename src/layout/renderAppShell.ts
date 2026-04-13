import type { Profile } from '../data/profile'
import type { NavSection, SectionDefinition } from '../sections/types'
import { renderSectionBlocks } from './content/renderSectionBlocks'

type RenderAppShellParams = {
  sections: NavSection[]
  profile: Profile
  initialSection: SectionDefinition
  activeSectionId: string
}

export const renderAppShell = ({
  sections,
  profile,
  initialSection,
  activeSectionId
}: RenderAppShellParams): string => {
  const navLinks = sections
    .map(
      (section) => `
        <button
          type="button"
          class="topbar__button${section.id === activeSectionId ? ' is-active' : ''}"
          data-section-id="${section.id}"
        >
          ${section.label}
        </button>
      `
    )
    .join('')

  const sectionBlocks = renderSectionBlocks(initialSection.blocks)
  const sidebarFields = initialSection.sidebarFields
    .map(
      (field) => `
        <li class="sidebar-fields__item">
          <span class="sidebar-fields__label">${field.label}</span>
          <span class="sidebar-fields__value">${field.value}</span>
        </li>
      `
    )
    .join('')

  return `
    <div class="app-shell">
      <header class="topbar">
        <nav class="topbar__nav" aria-label="Secciones principales">
          <span class="topbar__indicator" aria-hidden="true"></span>
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
            <h2 id="section-summary-title">${initialSection.summaryTitle}</h2>
            <p id="section-summary-description">${initialSection.summaryDescription}</p>
            <ul class="sidebar-fields" id="section-sidebar-fields">
              ${sidebarFields}
            </ul>
          </div>
        </aside>

        <main class="content" id="content-panel">
          <h1 id="content-title">${initialSection.title}</h1>
          <div id="content-body">${sectionBlocks}</div>
        </main>
      </div>
    </div>
  `
}
