import type { SectionDefinition } from '../types'

export const heroSection: SectionDefinition = {
  id: 'hero',
  label: 'Inicio',
  summaryTitle: 'Inicio',
  summaryDescription: 'Resumen rápido con highlights de proyectos, skills, experiencia y formación.',
  sidebarFields: [
    { label: 'Proyecto destacado', value: '1 caso principal' },
    { label: 'Skills clave', value: 'Frontend + Backend + Dev Tools' },
    { label: 'Última formación', value: '2023 - 2024' }
  ],
  title: 'Resumen principal del perfil',
  blocks: [
    {
      type: 'paragraph',
      text: 'Aquí puedes ver en una sola vista lo más importante del perfil: un proyecto con impacto, fortalezas técnicas, experiencia reciente y formación relevante.'
    },
    {
      type: 'cards',
      title: 'Proyecto destacado',
      items: [
        {
          title: 'Proyecto A',
          subtitle: 'Producto web',
          description: 'Caso principal donde se resolvió un problema de producto con mejoras medibles en rendimiento y experiencia de usuario.',
          tags: ['UI', 'API', 'Performance']
        }
      ]
    },
    {
      type: 'cards',
      title: 'Skills clave',
      items: [
        {
          title: 'Frontend',
          subtitle: 'Interfaz y experiencia',
          description: 'Construcción de interfaces modernas, accesibles y optimizadas para entornos de producción.',
          tags: ['HTML', 'CSS', 'TypeScript', 'Frameworks']
        },
        {
          title: 'Backend',
          subtitle: 'APIs y lógica',
          description: 'Diseño y desarrollo de servicios para soportar reglas de negocio y escalabilidad.',
          tags: ['Node.js', 'REST', 'Auth', 'Testing']
        }
      ]
    },
    {
      type: 'cards',
      title: 'Experiencia reciente',
      items: [
        {
          title: 'Rol principal reciente',
          subtitle: 'Equipo de producto',
          description: 'Implementación de funcionalidades end-to-end con foco en calidad de entrega, mantenibilidad y colaboración con diseño y negocio.',
          tags: ['Producto', 'Entrega', 'Calidad']
        }
      ]
    },
    {
      type: 'timeline',
      title: 'Educación y formación',
      items: [
        {
          period: '2023 - 2024',
          title: 'Certificación profesional',
          organization: 'Institución (placeholder)',
          description: 'Actualización técnica con foco en arquitectura, buenas prácticas y desarrollo aplicado.',
          highlights: ['Arquitectura', 'Buenas prácticas', 'Proyecto final']
        }
      ]
    }
  ]
}
