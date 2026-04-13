type Theme = 'light' | 'dark'

const STORAGE_KEY = 'portfolio-theme'
const THEME_ICON_SVG: Record<Theme, string> = {
  light: `
    <svg class="theme-switch__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 3v2.25M12 18.75V21M5.64 5.64l1.59 1.59M16.77 16.77l1.59 1.59M3 12h2.25M18.75 12H21M5.64 18.36l1.59-1.59M16.77 7.23l1.59-1.59" />
      <circle cx="12" cy="12" r="4.2" />
    </svg>
  `,
  dark: `
    <svg class="theme-switch__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20.4 14.9A8.7 8.7 0 1 1 9.1 3.6a7 7 0 1 0 11.3 11.3Z" />
    </svg>
  `
}

const getPreferredTheme = (): Theme => {
  const storedTheme = localStorage.getItem(STORAGE_KEY)

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const applyTheme = (theme: Theme, button?: HTMLButtonElement | null): void => {
  document.documentElement.dataset.theme = theme

  if (!button) {
    return
  }

  const isDark = theme === 'dark'
  button.setAttribute('aria-pressed', String(isDark))
  button.setAttribute('aria-label', isDark ? 'Activar tema claro' : 'Activar tema oscuro')
  button.innerHTML = isDark ? THEME_ICON_SVG.light : THEME_ICON_SVG.dark
}

export const initThemeToggle = (buttonSelector = '.theme-switch'): void => {
  const themeButton = document.querySelector<HTMLButtonElement>(buttonSelector)
  let currentTheme: Theme = getPreferredTheme()

  applyTheme(currentTheme, themeButton)

  themeButton?.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light'
    localStorage.setItem(STORAGE_KEY, currentTheme)
    applyTheme(currentTheme, themeButton)
  })
}
