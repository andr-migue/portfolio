import cardsTemplate from './cards.html?raw'
import type { SectionBlock } from '../../../sections/types'
import { escapeHtml, renderTemplate } from '../../shared'

type CardsBlock = Extract<SectionBlock, { type: 'cards' }>

const renderCard = (item: CardsBlock['items'][number]): string => {
  const tags = item.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join('')

  return `
    <article class="content-card">
      <h3>${escapeHtml(item.title)}</h3>
      <p class="content-card__subtitle">${escapeHtml(item.subtitle)}</p>
      <p>${escapeHtml(item.description)}</p>
      <ul class="content-card__tags">${tags}</ul>
    </article>
  `
}

export const renderCardsBlock = (block: CardsBlock): string => {
  return renderTemplate(cardsTemplate, {
    TITLE: escapeHtml(block.title),
    CARDS: block.items.map(renderCard).join('')
  })
}
