import type { SectionDefinition } from '../types'

export const skillsSection: SectionDefinition = {
  id: 'skills',
  label: 'Skills',
  summaryTitle: 'Skills',
  summaryDescription: 'Stack principal y fortalezas técnicas relevantes.',
  sidebarFields: [
    { label: 'Nivel general', value: 'Intermedio/Avanzado (placeholder)' },
    { label: 'Especialidad', value: 'Web moderna' },
    { label: 'Aprendizaje activo', value: 'Continuo' }
  ],
  title: 'Skills técnicas',
  blocks: [
    {
      type: 'cards',
      title: 'Áreas técnicas',
      items: [
        {
          title: 'Frontend',
          subtitle: 'Interfaz y experiencia',
          description: 'Tecnologías para construir interfaces robustas, accesibles y rápidas.',
          tags: ['HTML', 'CSS', 'TypeScript', 'Frameworks']
        },
        {
          title: 'Backend',
          subtitle: 'APIs y lógica',
          description: 'Desarrollo de servicios, validaciones y arquitectura de APIs.',
          tags: ['Node.js', 'REST', 'Auth', 'Testing']
        },
        {
          title: 'Dev Tools',
          subtitle: 'Calidad y entrega',
          description: 'Herramientas para versionado, automatización y despliegue continuo.',
          tags: ['Git', 'CI/CD', 'Linting', 'Observabilidad']
        }
      ]
    }
  ]
}
