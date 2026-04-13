import type { SectionDefinition } from '../types'

export const aboutSection: SectionDefinition = {
  id: 'about',
  label: 'Sobre mí',
  summaryTitle: 'Sobre mí',
  summaryDescription: 'Resumen personal, forma de trabajo y enfoque técnico.',
  sidebarFields: [
    { label: 'Años de experiencia', value: 'X+ años (placeholder)' },
    { label: 'Idioma principal', value: 'Español' },
    { label: 'Idioma secundario', value: 'Inglés (placeholder)' }
  ],
  title: 'Sobre mí',
  blocks: [
    {
      type: 'paragraph',
      text: 'Aquí contarás quién eres como profesional, qué te diferencia y cómo abordas los proyectos.'
    },
    {
      type: 'list',
      title: 'Enfoque de trabajo',
      items: [
        'Entender el problema de negocio antes de implementar.',
        'Construir soluciones mantenibles y escalables.',
        'Comunicar avances de forma clara con el equipo y stakeholders.'
      ]
    }
  ]
}
