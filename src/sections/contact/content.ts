import type { SectionDefinition } from '../types'

export const contactSection: SectionDefinition = {
  id: 'contact',
  label: 'Contacto',
  summaryTitle: 'Contacto',
  summaryDescription: 'Canales directos para oportunidades profesionales.',
  sidebarFields: [
    { label: 'Email', value: 'tu-correo@dominio.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/tu-perfil' },
    { label: 'GitHub', value: 'github.com/tu-usuario' }
  ],
  title: 'Contacto',
  blocks: [
    {
      type: 'list',
      title: 'Canales de contacto',
      items: [
        'Correo profesional: tu-correo@dominio.com',
        'LinkedIn: linkedin.com/in/tu-perfil',
        'GitHub: github.com/tu-usuario',
        'Horario de respuesta: 24-48h (placeholder)'
      ]
    },
    {
      type: 'map',
      title: 'Ubicación',
      locationLabel: 'Zona de trabajo (referencial)',
      embedUrl:
        'https://www.openstreetmap.org/export/embed.html?bbox=-3.726%2C40.39%2C-3.67%2C40.44&layer=mapnik',
      note: 'Mapa referencial, reemplaza por tu ubicación profesional.'
    }
  ]
}
