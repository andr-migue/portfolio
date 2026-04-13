import type { SectionDefinition } from '../../sections/types'
import { renderSectionBlocks } from './renderSectionBlocks'

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
}
