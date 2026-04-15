import contentPanelTemplate from './contentPanel.html?raw'
import type { SectionDefinition } from '../../sections/types'
import { renderSectionBlocks } from '../section-blocks'
import { escapeHtml, renderTemplate } from '../shared'

export const renderContentPanel = (section: SectionDefinition): string => {
  return renderTemplate(contentPanelTemplate, {
    SECTION_ID: escapeHtml(section.id),
    CONTENT_TITLE: escapeHtml(section.title),
    CONTENT_BLOCKS: renderSectionBlocks(section.blocks)
  })
}
