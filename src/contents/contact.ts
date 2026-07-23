export const contact = {
    toEmail: 'miguelzamora210405@gmail.com',
    location: {
        label: 'Micro X, Alamar, Habana del Este',
        coords: [23.172247013747032, -82.25355615095722] as [number, number],
        zoom: 12,
    },
    availability: {
        status: 'available' as 'available' | 'busy' | 'open',
        label: 'Available',
    },
    meta: {
        timezone: 'UTC-4 (Havana)',
        languages: 'Español - English',
    },
    socials: [
        { name: 'LinkedIn',  url: 'https://www.linkedin.com/in/miguel-zamora-3005523aa/' },
        { name: 'X',         url: 'https://x.com/andr_migue' },
        { name: 'Telegram',  url: 'https://t.me/andr_migue' },
        { name: 'Discord',   url: 'https://discord.com/users/andr_migue' },
        { name: 'Instagram', url: 'https://instagram.com/andr_migue/' },
    ],
    cvUrl: '/cv/miguel-cazorla-cv.pdf',
}
