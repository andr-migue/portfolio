export const escapeHtml = (value: string): string => {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export const renderTemplate = (template: string, tokens: Record<string, string>): string => {
  let output = template

  Object.entries(tokens).forEach(([key, value]) => {
    output = output.split(`{{${key}}}`).join(value)
  })

  return output
}
