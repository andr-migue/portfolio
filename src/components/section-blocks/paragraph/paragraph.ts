import paragraphTemplate from './paragraph.html?raw'
import type { SectionBlock } from '../../../sections/types'
import { escapeHtml, renderTemplate } from '../../shared'

type ParagraphBlock = Extract<SectionBlock, { type: 'paragraph' }>

export const renderParagraphBlock = (block: ParagraphBlock): string => {
  return renderTemplate(paragraphTemplate, {
    TEXT: escapeHtml(block.text)
  })
}
