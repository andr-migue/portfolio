import appShellTemplate from './appShell.html?raw'
import type { Profile } from '../../data/profile'
import type { NavSection, SectionDefinition } from '../../sections/types'
import { renderContentPanel } from '../content'
import { renderSidebar } from '../sidebar'
import { renderTemplate } from '../shared'
import { renderTopbar } from '../topbar'

type RenderAppShellParams = {
  sections: NavSection[]
  profile: Profile
  initialSection: SectionDefinition
  activeSectionId: string
}

export const renderAppShell = ({
  sections,
  profile,
  initialSection,
  activeSectionId
}: RenderAppShellParams): string => {
  const sidebar = renderSidebar({
    profile,
    summaryTitle: initialSection.summaryTitle,
    summaryDescription: initialSection.summaryDescription,
    sidebarFields: initialSection.sidebarFields
  })

  const topbar = renderTopbar(sections, activeSectionId)
  const content = renderContentPanel(initialSection)

  return renderTemplate(appShellTemplate, {
    SIDEBAR: sidebar,
    TOPBAR: topbar,
    CONTENT: content
  })
}
