const SKILL_ICONS_BASE = 'https://go-skill-icons.vercel.app/api/icons?i='

const techIconSlugs: Record<string, string> = {
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
}

export function getIcon(name: string): string | undefined {
    const slug = techIconSlugs[name]
    return slug ? `${SKILL_ICONS_BASE}${slug}` : undefined
}
