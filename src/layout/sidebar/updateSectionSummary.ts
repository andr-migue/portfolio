import type { SectionDefinition } from '../../sections/types'

export const updateSectionSummary = (section: SectionDefinition): void => {
  const summaryTitle = document.querySelector<HTMLHeadingElement>('#section-summary-title')
  const summaryDescription = document.querySelector<HTMLParagraphElement>('#section-summary-description')
  const sidebarFields = document.querySelector<HTMLUListElement>('#section-sidebar-fields')

  if (!summaryTitle || !summaryDescription || !sidebarFields) {
    return
  }

  summaryTitle.textContent = section.summaryTitle
  summaryDescription.textContent = section.summaryDescription
  sidebarFields.innerHTML = section.sidebarFields
    .map(
      (field) => `
        <li class="sidebar-fields__item">
          <span class="sidebar-fields__label">${field.label}</span>
          <span class="sidebar-fields__value">${field.value}</span>
        </li>
      `
    )
    .join('')
}
