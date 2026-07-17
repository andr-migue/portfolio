// Skill/brand icons are stored locally in `public/icons/` so the site works offline
// and every icon shares the same visual style.
//
// Source: https://go-skill-icons.vercel.app/api/icons?i=<slug>
// To add a new icon:
//   1. Pick a slug from https://go-skill-icons.vercel.app (e.g. `docker`, `figma`).
//   2. Download the SVG to `public/icons/<slug>.svg`:
//        curl -sL "https://go-skill-icons.vercel.app/api/icons?i=<slug>" \
//             -o public/icons/<slug>.svg
//   3. Add an entry below mapping the display name to the slug.

const iconSlugs: Record<string, string> = {
    TypeScript: 'typescript',
    'C#': 'cs',
    'C++': 'cpp',
    Rust: 'rust',
    Python: 'python',
    TeX: 'latex',
    React: 'react',
    Vite: 'vite',
    CSS: 'css',
    Godot: 'godot',
    LinkedIn: 'linkedin',
    X: 'twitter',
    Telegram: 'telegram',
    Discord: 'discord',
    Instagram: 'instagram',
}

export function getIcon(name: string): string | undefined {
    const slug = iconSlugs[name]
    return slug ? `/icons/${slug}.svg` : undefined
}
