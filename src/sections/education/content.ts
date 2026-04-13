import type { SectionDefinition } from '../types'

export const educationSection: SectionDefinition = {
  id: 'education',
  label: 'Estudios',
  summaryTitle: 'Estudios',
  summaryDescription: 'Formación académica y aprendizaje continuo.',
  sidebarFields: [
    { label: 'Nivel académico', value: 'Grado / Técnico (placeholder)' },
    { label: 'Certificaciones', value: 'X certificaciones (placeholder)' },
    { label: 'Estado', value: 'Actualizado' }
  ],
  title: 'Formación y estudios',
  blocks: [
    {
      type: 'timeline',
      title: 'Trayectoria formativa',
      items: [
        {
          period: '2023 - 2024',
          title: 'Certificación profesional',
          organization: 'Institución (placeholder)',
          description: 'Contenido clave de la certificación y áreas reforzadas.',
          highlights: ['Arquitectura', 'Buenas prácticas', 'Proyecto final']
        },
        {
          period: '2019 - 2023',
          title: 'Formación principal',
          organization: 'Centro educativo (placeholder)',
          description: 'Base académica técnica y competencias profesionales adquiridas.',
          highlights: ['Fundamentos', 'Trabajo en equipo', 'Resolución de problemas']
        }
      ]
    }
  ]
}
