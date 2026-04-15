import type { SectionDefinition } from '../types'

export const experienceSection: SectionDefinition = {
  id: 'experience',
  label: 'Trayectoria',
  summaryTitle: 'Trayectoria',
  summaryDescription: 'Resumen de experiencia profesional y formación.',
  sidebarFields: [
    { label: 'Último rol', value: 'Frontend Developer (placeholder)' },
    { label: 'Formación', value: 'Grado / Certificaciones (placeholder)' },
    { label: 'Estado', value: 'Actualizado' }
  ],
  title: 'Trayectoria profesional y académica',
  blocks: [
    {
      type: 'timeline',
      title: 'Línea de tiempo (experiencia + estudios)',
      items: [
        {
          period: '2024 - Actualidad',
          title: 'Rol actual',
          organization: 'Empresa / Cliente (placeholder)',
          description: 'Resumen del alcance, responsabilidades y objetivos principales del rol.',
          highlights: ['Liderazgo técnico', 'Entrega de features', 'Mejoras de rendimiento']
        },
        {
          period: '2022 - 2024',
          title: 'Rol previo',
          organization: 'Empresa / Cliente (placeholder)',
          description: 'Contexto del equipo y aportes clave al producto o plataforma.',
          highlights: ['Refactor de módulos', 'Automatización', 'Calidad de código']
        },
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
