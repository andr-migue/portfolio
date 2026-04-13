export type SectionId =
  | 'hero'
  | 'about'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'education'
  | 'contact'

export type SidebarField = {
  label: string
  value: string
}

export type SectionCard = {
  title: string
  subtitle: string
  description: string
  tags: string[]
}

export type TimelineEntry = {
  period: string
  title: string
  organization: string
  description: string
  highlights: string[]
}

export type SectionBlock =
  | {
      type: 'paragraph'
      text: string
    }
  | {
      type: 'list'
      title: string
      items: string[]
    }
  | {
      type: 'cards'
      title: string
      items: SectionCard[]
    }
  | {
      type: 'timeline'
      title: string
      items: TimelineEntry[]
    }
  | {
      type: 'map'
      title: string
      locationLabel: string
      embedUrl: string
      note: string
    }
  | {
      type: 'contactForm'
      title: string
      recipientEmail: string
      accountLabel: string
      subjectLabel: string
      bodyLabel: string
      submitLabel: string
    }

export type SectionDefinition = {
  id: SectionId
  label: string
  summaryTitle: string
  summaryDescription: string
  sidebarFields: SidebarField[]
  title: string
  blocks: SectionBlock[]
}

export type NavSection = Pick<SectionDefinition, 'id' | 'label'>
