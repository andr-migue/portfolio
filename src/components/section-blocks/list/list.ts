import listTemplate from './list.html?raw'
import type { SectionBlock } from '../../../sections/types'
import { escapeHtml, renderTemplate } from '../../shared'

type ListBlock = Extract<SectionBlock, { type: 'list' }>

const renderListItem = (item: string): string => `<li>${escapeHtml(item)}</li>`

export const renderListBlock = (block: ListBlock): string => {
  return renderTemplate(listTemplate, {
    TITLE: escapeHtml(block.title),
    ITEMS: block.items.map(renderListItem).join('')
  })
}
