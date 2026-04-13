const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const getTrimmedFieldValue = (formData: FormData, field: 'account' | 'subject' | 'body'): string => {
  const value = formData.get(field)

  return typeof value === 'string' ? value.trim() : ''
}

const setStatus = (statusElement: HTMLElement | null, message: string): void => {
  if (!statusElement) {
    return
  }

  statusElement.textContent = message
}

export const initContactMailForm = (selector = '.contact-mail-form'): void => {
  const form = document.querySelector<HTMLFormElement>(selector)

  if (!form) {
    return
  }

  const statusElement = form.querySelector<HTMLElement>('.contact-mail-form__status')

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const recipient = form.dataset.recipientEmail?.trim()

    if (!recipient || !EMAIL_REGEX.test(recipient)) {
      setStatus(statusElement, 'No se pudo preparar el correo. Intenta más tarde.')
      return
    }

    const formData = new FormData(form)
    const account = getTrimmedFieldValue(formData, 'account')
    const subject = getTrimmedFieldValue(formData, 'subject')
    const body = getTrimmedFieldValue(formData, 'body')

    if (!EMAIL_REGEX.test(account)) {
      setStatus(statusElement, 'La cuenta debe ser un correo válido.')
      return
    }

    if (!subject) {
      setStatus(statusElement, 'El asunto es obligatorio.')
      return
    }

    if (!body) {
      setStatus(statusElement, 'El mensaje no puede estar vacío.')
      return
    }

    const mailSubject = encodeURIComponent(subject)
    const mailBody = encodeURIComponent(`Cuenta: ${account}\n\n${body}`)

    setStatus(statusElement, 'Abriendo tu cliente de correo...')
    window.location.href = `mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`
  })
}
