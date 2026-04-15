import contactFormTemplate from './contactForm.html?raw'
import type { SectionBlock } from '../../../sections/types'
import { escapeHtml, renderTemplate } from '../../shared'

type ContactFormBlock = Extract<SectionBlock, { type: 'contactForm' }>

export const renderContactFormBlock = (block: ContactFormBlock): string => {
  return renderTemplate(contactFormTemplate, {
    TITLE: escapeHtml(block.title),
    RECIPIENT_EMAIL: escapeHtml(block.recipientEmail),
    ACCOUNT_LABEL: escapeHtml(block.accountLabel),
    SUBJECT_LABEL: escapeHtml(block.subjectLabel),
    BODY_LABEL: escapeHtml(block.bodyLabel),
    SUBMIT_LABEL: escapeHtml(block.submitLabel)
  })
}
