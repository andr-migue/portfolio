import type { SectionDefinition } from '../../sections/types'
import { initContactMailForm } from '../../utils/contactForm'
import { renderSectionBlocks } from '../section-blocks'

export const updateContentPanel = (section: SectionDefinition): void => {
  const contentPanel = document.querySelector<HTMLElement>('#content-panel')
  const contentTitle = document.querySelector<HTMLHeadingElement>('#content-title')
  const contentBody = document.querySelector<HTMLDivElement>('#content-body')

  if (!contentPanel || !contentTitle || !contentBody) {
    return
  }

  contentPanel.dataset.sectionId = section.id
  contentTitle.textContent = section.title
  contentBody.innerHTML = renderSectionBlocks(section.blocks)
  contentPanel.scrollTop = 0
  initContactMailForm()
}
