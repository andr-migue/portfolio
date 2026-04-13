type Theme = 'light' | 'dark'

const STORAGE_KEY = 'portfolio-theme'

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
  button.textContent = isDark ? '☀️' : '🌙'
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
