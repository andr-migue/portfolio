import type { SectionDefinition } from '../types'

export const experienceSection: SectionDefinition = {
  id: 'experience',
  label: 'Experiencia',
  summaryTitle: 'Experiencia',
  summaryDescription: 'Trayectoria profesional y responsabilidades clave.',
  sidebarFields: [
    { label: 'Último rol', value: 'Frontend Developer (placeholder)' },
    { label: 'Sector', value: 'Tecnología / Producto' },
    { label: 'Modelo', value: 'Remoto / Híbrido' }
  ],
  title: 'Experiencia profesional',
  blocks: [
    {
      type: 'timeline',
      title: 'Línea de tiempo profesional',
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
        }
      ]
    }
  ]
}
