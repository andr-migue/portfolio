import type { SectionDefinition } from '../types'

export const projectsSection: SectionDefinition = {
  id: 'projects',
  label: 'Proyectos',
  summaryTitle: 'Proyectos',
  summaryDescription: 'Selección de trabajos con impacto y contexto.',
  sidebarFields: [
    { label: 'Proyectos destacados', value: '3 (placeholder)' },
    { label: 'Tipo', value: 'Web / Producto digital' },
    { label: 'Stack común', value: 'TS + API + DB' }
  ],
  title: 'Proyectos destacados',
  blocks: [
    {
      type: 'cards',
      title: 'Casos de trabajo',
      items: [
        {
          title: 'Proyecto A',
          subtitle: 'Producto web',
          description: 'Describe el problema, la solución técnica implementada y el resultado medible.',
          tags: ['UI', 'API', 'Performance']
        },
        {
          title: 'Proyecto B',
          subtitle: 'Dashboard interno',
          description: 'Incluye decisiones de arquitectura y mejoras en procesos de negocio.',
          tags: ['Data', 'UX', 'Escalabilidad']
        },
        {
          title: 'Proyecto C',
          subtitle: 'Automatización',
          description: 'Muestra cómo redujiste tiempos operativos o errores mediante software.',
          tags: ['Automatización', 'Calidad', 'Entrega']
        }
      ]
    }
  ]
}
