export type NavSection = {
  id: string
  label: string
}

export type Profile = {
  name: string
  role: string
  imageSrc: string
  imageAlt: string
}

export const navSections: NavSection[] = [
  { id: 'hero', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'education', label: 'Estudios' },
  { id: 'contact', label: 'Contacto' }
]

export const profile: Profile = {
  name: 'Miguel',
  role: 'Desarrollador de Software',
  imageSrc: '/assets/images/profile-placeholder.svg',
  imageAlt: 'Foto de perfil de Miguel'
}

export const initialSectionSummary = {
  title: 'Inicio',
  description: 'Aquí irá el contexto breve de la sección activa: objetivo, enfoque y puntos clave.'
}
