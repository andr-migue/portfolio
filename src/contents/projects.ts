export interface Project {
    name: string
    description: string
    url: string
    language: string
    stars: number
    forks: number
    tags: string[]
    image?: string
}

export const projects: Project[] = [
    {
        name: 'portfolio',
        description: 'Personal developer portfolio built with React, TypeScript and Vite. Features light/dark mode, animated sidebar navigation, and a clean component-based architecture.',
        url: 'https://github.com/andr-migue/portfolio',
        language: 'TypeScript',
        stars: 0,
        forks: 0,
        tags: ['React', 'Vite', 'CSS'],
    },
    {
        name: 'Mistborn-Maze',
        description: 'Multiplayer procedural maze game built in Unity. Players navigate through dynamically generated mazes in real-time.',
        url: 'https://github.com/andr-migue/Mistborn-Maze',
        language: 'C#',
        stars: 3,
        forks: 0,
        tags: ['Godot', 'Multiplayer', 'Procedural Generation', 'Game Dev'],
    },
    {
        name: 'BrushBot-3000',
        description: 'Autonomous robot simulation with brush mechanics built in C#.',
        url: 'https://github.com/andr-migue/BrushBot-3000',
        language: 'C#',
        stars: 4,
        forks: 0,
        tags: ['Godot', 'Simulation'],
    },
    {
        name: 'data-structures-and-algorithms',
        description: 'Implementation of classic data structures and algorithms in C++. Covers trees, graphs, sorting, and more.',
        url: 'https://github.com/andr-migue/data-structures-and-algorithms',
        language: 'C++',
        stars: 1,
        forks: 0,
        tags: ['Algorithms', 'Data Structures'],
    },
    {
        name: 'dsa-with-rust',
        description: 'Data structures and algorithms implemented in Rust, exploring ownership and performance.',
        url: 'https://github.com/andr-migue/dsa-with-rust',
        language: 'Rust',
        stars: 0,
        forks: 0,
        tags: ['Algorithms', 'Data Structures'],
    },
    {
        name: 'web-server',
        description: 'Lightweight HTTP web server built from scratch in Rust.',
        url: 'https://github.com/andr-migue/web-server',
        language: 'Rust',
        stars: 0,
        forks: 0,
        tags: ['HTTP', 'Networking'],
    },
    {
        name: 'QR-Generator',
        description: 'Python tool to generate QR codes from text or URLs.',
        url: 'https://github.com/andr-migue/QR-Generator',
        language: 'Python',
        stars: 1,
        forks: 0,
        tags: ['QR Code', 'CLI'],
    },
    {
        name: 'Proyecto-SMIPS-2025-2026',
        description: 'Academic simulation project for systems modeling and performance analysis.',
        url: 'https://github.com/andr-migue/Proyecto-SMIPS-2025-2026',
        language: 'Python',
        stars: 1,
        forks: 0,
        tags: ['Simulation', 'Academic'],
    },
    {
        name: 'Riemann-Integrable',
        description: 'Mathematical paper on Riemann integrability written in LaTeX.',
        url: 'https://github.com/andr-migue/Riemann-Integrable',
        language: 'TeX',
        stars: 1,
        forks: 0,
        tags: ['Mathematics', 'Analysis'],
    },
]
