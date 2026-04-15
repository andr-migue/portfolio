import { aboutSection } from './about/content'
import { contactSection } from './contact/content'
import { experienceSection } from './experience/content'
import { heroSection } from './hero/content'
import { projectsSection } from './projects/content'
import { skillsSection } from './skills/content'
import type { NavSection, SectionDefinition, SectionId } from './types'

export const sections: SectionDefinition[] = [
  heroSection,
  aboutSection,
  skillsSection,
  projectsSection,
  experienceSection,
  contactSection
]

export const sectionById: Record<SectionId, SectionDefinition> = {
  hero: heroSection,
  about: aboutSection,
  skills: skillsSection,
  projects: projectsSection,
  experience: experienceSection,
  contact: contactSection
}

export const navSections: NavSection[] = sections.map(({ id, label }) => ({ id, label }))
export const initialSectionId: SectionId = 'hero'
