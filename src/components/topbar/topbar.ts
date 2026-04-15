import topbarTemplate from './topbar.html?raw'
import type { NavSection } from '../../sections/types'
import { escapeHtml, renderTemplate } from '../shared'

const renderTopbarButton = (section: NavSection, activeSectionId: string): string => {
  const isActive = section.id === activeSectionId

  return `
    <button
      type="button"
      class="topbar__button${isActive ? ' is-active' : ''}"
      data-section-id="${escapeHtml(section.id)}"
      aria-pressed="${String(isActive)}"
    >
      <span class="topbar__button-label">${escapeHtml(section.label)}</span>
    </button>
  `
}

export const renderTopbar = (sections: NavSection[], activeSectionId: string): string => {
  const navButtons = sections.map((section) => renderTopbarButton(section, activeSectionId)).join('')

  return renderTemplate(topbarTemplate, {
    NAV_BUTTONS: navButtons
  })
}
