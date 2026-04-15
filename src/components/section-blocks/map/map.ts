import mapTemplate from './map.html?raw'
import type { SectionBlock } from '../../../sections/types'
import { escapeHtml, renderTemplate } from '../../shared'

type MapBlock = Extract<SectionBlock, { type: 'map' }>

export const renderMapBlock = (block: MapBlock): string => {
  return renderTemplate(mapTemplate, {
    TITLE: escapeHtml(block.title),
    LOCATION_LABEL: escapeHtml(block.locationLabel),
    NOTE: escapeHtml(block.note),
    EMBED_URL: escapeHtml(block.embedUrl)
  })
}
