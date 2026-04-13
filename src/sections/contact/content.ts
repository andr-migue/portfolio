import type { SectionDefinition } from '../types'

export const contactSection: SectionDefinition = {
  id: 'contact',
  label: 'Contacto',
  summaryTitle: 'Contacto',
  summaryDescription: 'Canales directos para oportunidades profesionales.',
  sidebarFields: [
    {
      label: 'Email',
      value:
        '<a href="mailto:miguelzamora210405@gmail.com">miguelzamora210405@gmail.com</a>'
    },
    {
      label: 'GitHub',
      value: '<a href="https://github.com/andr-migue" target="_blank" rel="noreferrer">github.com/andr-migue</a>'
    },
    {
      label: 'X',
      value: '<a href="https://x.com/andr_migue" target="_blank" rel="noreferrer">@andr_migue</a>'
    }
  ],
  title: 'Contacto',
  blocks: [
    {
      type: 'map',
      title: 'Ubicación',
      locationLabel: 'La Habana del Este, Cuba',
      embedUrl:
        'https://www.openstreetmap.org/export/embed.html?bbox=-82.35%2C23.10%2C-82.20%2C23.21&layer=mapnik&marker=23.159%2C-82.295',
      note: 'Ubicación por defecto.'
    },
    {
      type: 'contactForm',
      title: 'Envíame un mensaje',
      recipientEmail: 'miguelzamora210405@gmail.com',
      accountLabel: 'Cuenta de la persona',
      subjectLabel: 'Asunto',
      bodyLabel: 'Body del mail',
      submitLabel: 'Enviar mensaje'
    }
  ]
}
