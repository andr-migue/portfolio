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
        name: 'Mistborn Maze',
        description: 'Multiplayer procedural maze game built in Godot Engine. Players navigate through dynamically generated mazes in real time filled with traps and enemies, competing to escape.',
        url: 'https://github.com/andr-migue/Mistborn-Maze',
        language: 'C#',
        stars: 3,
        forks: 0,
        tags: ['Godot', '2 - Players', 'Procedural Generation', 'Game Dev'],
        image: '/public/images/Mistborn Maze.png'
    },
    {
        name: 'BrushBot-3000',
        description: 'Aplicación desarrollada en Godot Engine que te permite programar para crear dibujos y arte pixelado. Mediante un lenguaje de scripting personalizado y un interprete creado puramente en C#. Es una herramienta fantástica y educativa para sumergirse en los conceptos básicos de la programación y desatar tu creatividad gráfica.',
        url: 'https://github.com/andr-migue/BrushBot-3000',
        language: 'C#',
        stars: 4,
        forks: 0,
        tags: ['Godot', 'Interpreter', 'Compiler', 'Code Editor'],
        image: '/public/images/BrushBot-3000.png'
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
        description: 'Academic simulation project for  Arquitectura de Computadoras. Recreacion de un microprocesador de 32 bits usando la herramienta Logisim.',
        url: 'https://github.com/andr-migue/Proyecto-SMIPS-2025-2026',
        language: 'Python',
        stars: 1,
        forks: 0,
        tags: ['Simulation', 'Academic', 'Micro'],
        image: '/public/images/SMIPS.png'
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
