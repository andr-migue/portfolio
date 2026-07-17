const SKILL_ICONS_BASE = 'https://go-skill-icons.vercel.app/api/icons?i='

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
    return slug ? `${SKILL_ICONS_BASE}${slug}` : undefined
}
