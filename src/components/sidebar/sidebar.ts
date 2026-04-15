import sidebarTemplate from './sidebar.html?raw'
import type { Profile } from '../../data/profile'
import type { SidebarField } from '../../sections/types'
import { escapeHtml, renderTemplate } from '../shared'

const renderSidebarField = (field: SidebarField): string => {
  return `
    <li class="sidebar-fields__item">
      <span class="sidebar-fields__label">${escapeHtml(field.label)}</span>
      <span class="sidebar-fields__value">${escapeHtml(field.value)}</span>
    </li>
  `
}

type RenderSidebarParams = {
  profile: Profile
  summaryTitle: string
  summaryDescription: string
  sidebarFields: SidebarField[]
}

export const renderSidebar = ({
  profile,
  summaryTitle,
  summaryDescription,
  sidebarFields
}: RenderSidebarParams): string => {
  const fields = sidebarFields.map(renderSidebarField).join('')

  return renderTemplate(sidebarTemplate, {
    PROFILE_IMAGE_SRC: escapeHtml(profile.imageSrc),
    PROFILE_IMAGE_ALT: escapeHtml(profile.imageAlt),
    PROFILE_NAME: escapeHtml(profile.name),
    PROFILE_ROLE: escapeHtml(profile.role),
    SUMMARY_TITLE: escapeHtml(summaryTitle),
    SUMMARY_DESCRIPTION: escapeHtml(summaryDescription),
    SIDEBAR_FIELDS: fields
  })
}
