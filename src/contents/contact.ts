import type { Localized } from '../i18n/language'

export const contact = {
    email: 'ancaza.dev@gmail.com',
    phone: '+53 56860394',
    location: { en: 'Havana, Cuba', es: 'La Habana, Cuba' } as Localized,
    // PDFs generados desde cv/ con `make` (fuente LaTeX por idioma).
    cvUrl: {
        en: `${import.meta.env.BASE_URL}cv/cv-en.pdf`,
        es: `${import.meta.env.BASE_URL}cv/cv-es.pdf`,
    } as Localized,
    socials: [
        { name: 'GitHub',    url: 'https://github.com/andr-migue' },
        { name: 'LinkedIn',  url: 'https://www.linkedin.com/in/miguel-zamora-3005523aa/' },
        { name: 'Telegram',  url: 'https://t.me/andr_migue' },
        { name: 'Discord',   url: 'https://discord.com/users/andr_migue' },
    ],
}
