import type { SectionBlock } from '../../sections/types'

const renderParagraphBlock = (block: Extract<SectionBlock, { type: 'paragraph' }>): string => {
  return `<p class="section-paragraph">${block.text}</p>`
}

const renderListBlock = (block: Extract<SectionBlock, { type: 'list' }>): string => {
  const items = block.items.map((item) => `<li>${item}</li>`).join('')

  return `
    <section class="content-block">
      <h2 class="content-block__title">${block.title}</h2>
      <ul class="content-list">${items}</ul>
    </section>
  `
}

const renderCardsBlock = (block: Extract<SectionBlock, { type: 'cards' }>): string => {
  const cards = block.items
    .map(
      (item) => `
        <article class="content-card">
          <h3>${item.title}</h3>
          <p class="content-card__subtitle">${item.subtitle}</p>
          <p>${item.description}</p>
          <ul class="content-card__tags">${item.tags.map((tag) => `<li>${tag}</li>`).join('')}</ul>
        </article>
      `
    )
    .join('')

  return `
    <section class="content-block">
      <h2 class="content-block__title">${block.title}</h2>
      <div class="cards-grid">${cards}</div>
    </section>
  `
}

const renderTimelineBlock = (block: Extract<SectionBlock, { type: 'timeline' }>): string => {
  const items = block.items
    .map(
      (item) => `
        <article class="timeline-item">
          <p class="timeline-item__period">${item.period}</p>
          <h3>${item.title}</h3>
          <p class="timeline-item__org">${item.organization}</p>
          <p>${item.description}</p>
          <ul class="timeline-item__highlights">${item.highlights.map((highlight) => `<li>${highlight}</li>`).join('')}</ul>
        </article>
      `
    )
    .join('')

  return `
    <section class="content-block">
      <h2 class="content-block__title">${block.title}</h2>
      <div class="timeline">${items}</div>
    </section>
  `
}

const renderMapBlock = (block: Extract<SectionBlock, { type: 'map' }>): string => {
  return `
    <section class="content-block">
      <h2 class="content-block__title">${block.title}</h2>
      <div class="map-card">
        <div class="map-card__header">
          <strong>${block.locationLabel}</strong>
          <span>${block.note}</span>
        </div>
        <iframe
          class="map-card__frame"
          src="${block.embedUrl}"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Mapa de ubicación"
        ></iframe>
      </div>
    </section>
  `
}

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

      return renderMapBlock(block)
    })
    .join('')
}
