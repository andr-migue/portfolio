import type { SectionDefinition } from '../../sections/types'
import { renderSectionBlocks } from './renderSectionBlocks'

export const updateContentPanel = (section: SectionDefinition): void => {
  const contentTitle = document.querySelector<HTMLHeadingElement>('#content-title')
  const contentBody = document.querySelector<HTMLDivElement>('#content-body')

  if (!contentTitle || !contentBody) {
    return
  }

  contentTitle.textContent = section.title
  contentBody.innerHTML = renderSectionBlocks(section.blocks)
}
