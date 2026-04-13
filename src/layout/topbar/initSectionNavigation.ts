import { updateContentPanel } from '../content/updateContentPanel'
import { updateSectionSummary } from '../sidebar/updateSectionSummary'
import { moveNavIndicatorToButton, syncIndicatorWithActiveButton } from './navigationIndicator'
import type { SectionDefinition, SectionId } from '../../sections/types'

type InitSectionNavigationParams = {
  sectionById: Record<SectionId, SectionDefinition>
}

const setActiveTopbarButton = (sectionId: SectionId): void => {
  const sectionButtons = document.querySelectorAll<HTMLButtonElement>('.topbar__button')

  sectionButtons.forEach((button) => {
    const isActive = button.dataset.sectionId === sectionId
    button.classList.toggle('is-active', isActive)
    button.setAttribute('aria-pressed', String(isActive))

    if (isActive) {
      moveNavIndicatorToButton(button)
    }
  })
}

export const initSectionNavigation = ({ sectionById }: InitSectionNavigationParams): void => {
  const sectionButtons = document.querySelectorAll<HTMLButtonElement>('.topbar__button')

  sectionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const sectionId = button.dataset.sectionId as SectionId | undefined

      if (!sectionId) {
        return
      }

      const section = sectionById[sectionId]

      if (!section) {
        return
      }

      updateContentPanel(section)
      updateSectionSummary(section)
      setActiveTopbarButton(sectionId)
    })
  })

  syncIndicatorWithActiveButton()

  window.addEventListener('resize', () => {
    syncIndicatorWithActiveButton()
   })
 }
