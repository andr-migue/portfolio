import type { SectionDefinition } from '../types'

export const heroSection: SectionDefinition = {
  id: 'hero',
  label: 'Inicio',
  summaryTitle: 'Inicio',
  summaryDescription: 'Presentación rápida de perfil y propuesta de valor profesional.',
  sidebarFields: [
    { label: 'Rol objetivo', value: 'Frontend / Fullstack' },
    { label: 'Disponibilidad', value: 'Abierto a oportunidades' },
    { label: 'Ubicación', value: 'Remoto / Híbrido' }
  ],
  title: 'Portfolio profesional en construcción',
  blocks: [
    {
      type: 'paragraph',
      text: 'Este espacio presentará de forma clara tu propuesta de valor: qué haces, para quién y con qué impacto.'
    },
    {
      type: 'cards',
      title: 'Bloques de destaque',
      items: [
        {
          title: 'Especialidad',
          subtitle: 'Área principal',
          description: 'Describe aquí tu foco técnico principal y el tipo de problemas que resuelves mejor.',
          tags: ['Frontend', 'Arquitectura', 'UX']
        },
        {
          title: 'Valor entregado',
          subtitle: 'Resultado',
          description: 'Incluye métricas de impacto (rendimiento, conversión, tiempos, calidad).',
          tags: ['Impacto', 'Métricas', 'Calidad']
        }
      ]
    }
  ]
}
