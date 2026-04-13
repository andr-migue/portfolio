const getTopbarElements = (): {
  nav: HTMLElement | null
  indicator: HTMLElement | null
} => {
  const nav = document.querySelector<HTMLElement>('.topbar__nav')
  const indicator = document.querySelector<HTMLElement>('.topbar__indicator')

  return { nav, indicator }
}

const INDICATOR_BOTTOM_TRIM_PX = 3

export const moveNavIndicatorToButton = (button: HTMLButtonElement): void => {
  const { nav, indicator } = getTopbarElements()

  if (!nav || !indicator) {
    return
  }

  const navRect = nav.getBoundingClientRect()
  const buttonRect = button.getBoundingClientRect()
  const x = buttonRect.left - navRect.left
  const y = buttonRect.top - navRect.top
  const indicatorHeight = Math.max(0, buttonRect.height - INDICATOR_BOTTOM_TRIM_PX)

  indicator.style.width = `${buttonRect.width}px`
  indicator.style.height = `${indicatorHeight}px`
  indicator.style.transform = `translate(${x}px, ${y}px)`
}

export const syncIndicatorWithActiveButton = (): void => {
  const activeButton = document.querySelector<HTMLButtonElement>('.topbar__button.is-active')

  if (!activeButton) {
    return
  }

  moveNavIndicatorToButton(activeButton)
}
