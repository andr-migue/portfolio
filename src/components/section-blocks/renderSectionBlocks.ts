import type { SectionBlock } from '../../sections/types'
import { renderCardsBlock } from './cards/cards'
import { renderContactFormBlock } from './contact-form/contactForm'
import { renderListBlock } from './list/list'
import { renderMapBlock } from './map/map'
import { renderParagraphBlock } from './paragraph/paragraph'
import { renderTimelineBlock } from './timeline/timeline'

export const renderSectionBlocks = (blocks: SectionBlock[]): string => {
  return blocks
    .map((block) => {
      if (block.type === 'paragraph') {
        return renderParagraphBlock(block)
      }

      if (block.type === 'list') {
        return renderListBlock(block)
      }

      if (block.type === 'cards') {
        return renderCardsBlock(block)
      }

      if (block.type === 'timeline') {
        return renderTimelineBlock(block)
      }

      if (block.type === 'contactForm') {
        return renderContactFormBlock(block)
      }

      return renderMapBlock(block)
    })
    .join('')
}
