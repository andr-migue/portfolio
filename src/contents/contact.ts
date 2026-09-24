import type { Localized } from '../i18n/language'

export const contact = {
    email: 'miguelzamora210405@gmail.com',
    phone: '+53 56860394',
    location: { en: 'Havana, Cuba', es: 'La Habana, Cuba' } as Localized,
    // TODO: sustituir por el CV real.
    cvUrl: `${import.meta.env.BASE_URL}cv/sample.pdf`,
    socials: [
        { name: 'GitHub',    url: 'https://github.com/andr-migue' },
        { name: 'LinkedIn',  url: 'https://www.linkedin.com/in/miguel-zamora-3005523aa/' },
        { name: 'Telegram',  url: 'https://t.me/andr_migue' },
        { name: 'Discord',   url: 'https://discord.com/users/andr_migue' },
    ],
}
