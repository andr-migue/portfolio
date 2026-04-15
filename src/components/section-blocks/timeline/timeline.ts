import timelineTemplate from './timeline.html?raw'
import type { SectionBlock } from '../../../sections/types'
import { escapeHtml, renderTemplate } from '../../shared'

type TimelineBlock = Extract<SectionBlock, { type: 'timeline' }>

const renderTimelineItem = (item: TimelineBlock['items'][number]): string => {
  const highlights = item.highlights.map((highlight) => `<li>${escapeHtml(highlight)}</li>`).join('')

  return `
    <article class="timeline-item">
      <p class="timeline-item__period">${escapeHtml(item.period)}</p>
      <h3>${escapeHtml(item.title)}</h3>
      <p class="timeline-item__org">${escapeHtml(item.organization)}</p>
      <p>${escapeHtml(item.description)}</p>
      <ul class="timeline-item__highlights">${highlights}</ul>
    </article>
  `
}

export const renderTimelineBlock = (block: TimelineBlock): string => {
  return renderTemplate(timelineTemplate, {
    TITLE: escapeHtml(block.title),
    ITEMS: block.items.map(renderTimelineItem).join('')
  })
}
