import type { Localized } from '../i18n/language'

export interface Repo {
    label: string
    url: string
}

export interface Project {
    name: string
    description: Localized
    url?: string
    repos?: Repo[]
    language: string
    stars: number
    forks: number
    tags: string[]
    imageFolder?: string
}

export const projects: Project[] = [
    {
        name: 'portfolio',
        description: {
            en: 'Personal developer portfolio built with React 19, TypeScript and Vite, with a component-based architecture, typed content files, light/dark theming and English/Spanish support.',
            es: 'Portafolio personal construido con React 19, TypeScript y Vite, con una arquitectura basada en componentes, archivos de contenido tipados, tema claro/oscuro y soporte en inglés y español.',
        },
        url: 'https://github.com/andr-migue/portfolio',
        language: 'TypeScript',
        stars: 0,
        forks: 0,
        tags: ['React', 'CSS', 'Vite'],
    },
    {
        name: 'damero',
        description: {
            en: 'Client-side QR code generator built with React 19, TypeScript and Vite: renders styled QR codes through qr-code-styling, composes raster or SVG logos over the PNG and SVG exports, and keeps a FIFO localStorage history. Fully static, with no backend and no network calls, so the user\'s logo never leaves the browser.',
            es: 'Generador de códigos QR en el cliente construido con React 19, TypeScript y Vite: genera códigos QR con estilo mediante qr-code-styling, compone logos raster o SVG sobre las exportaciones PNG y SVG, y guarda un historial FIFO en localStorage. Totalmente estático, sin backend ni llamadas de red, así que el logo del usuario nunca sale del navegador.',
        },
        url: 'https://github.com/andr-migue/damero',
        language: 'TypeScript',
        stars: 0,
        forks: 0,
        tags: ['React', 'Vite', 'CSS', 'Vitest'],
        imageFolder: 'Damero'
    },
    {
        name: 'ToDo',
        description: {
            en: 'Full-stack to-do application with a .NET 10 minimal-API backend that queries PostgreSQL directly through Npgsql, a React 19 + TypeScript frontend consuming it via a typed API client, and a Dockerized database, covering full CRUD over the task list.',
            es: 'Aplicación de tareas full-stack con un backend de API mínima en .NET 10 que consulta PostgreSQL directamente mediante Npgsql, un frontend en React 19 + TypeScript que la consume a través de un cliente de API tipado y una base de datos en Docker, con CRUD completo sobre la lista de tareas.',
        },
        url: 'https://github.com/andr-migue/ToDo',
        language: 'C#',
        stars: 0,
        forks: 0,
        tags: ['.NET', 'PostgreSQL', 'TypeScript', 'CSS','Docker'],
    },
    {
        name: 'Shelfie',
        description: {
            en: 'Full-stack personal library manager built end to end to practice FastAPI and Beanie: a Python backend that searches and normalizes books from the Open Library API into MongoDB, paired with a React 19 + TypeScript frontend, shipped as two independent repositories.',
            es: 'Gestor de biblioteca personal full-stack construido de principio a fin para practicar FastAPI y Beanie: un backend en Python que busca y normaliza libros de la API de Open Library en MongoDB, junto a un frontend en React 19 + TypeScript, publicado como dos repositorios independientes.',
        },
        repos: [
            { label: 'Backend', url: 'https://github.com/andr-migue/shelfie-backend' },
            { label: 'Frontend', url: 'https://github.com/andr-migue/shelfie-frontend' },
        ],
        language: 'Python',
        stars: 0,
        forks: 0,
        tags: ['FastAPI', 'MongoDB', 'TypeScript','React', 'CSS','Docker'],
        imageFolder: 'Shelfie'
    },
    {
        name: 'Mistborn Maze',
        description: {
            en: 'Real-time 2-player competitive maze game in Godot 4 and C# with procedural generation via DFS, 6 characters with unique abilities, sensor-based enemy AI, and a complete game loop including traps, scoring, and an original soundtrack.',
            es: 'Juego de laberinto competitivo para 2 jugadores en tiempo real, hecho en Godot 4 y C#, con generación procedural mediante DFS, 6 personajes con habilidades únicas, IA enemiga basada en sensores y un ciclo de juego completo con trampas, puntuación y banda sonora original.',
        },
        url: 'https://github.com/andr-migue/Mistborn-Maze',
        language: 'C#',
        stars: 3,
        forks: 0,
        tags: ['Godot', 'Procedural Generation', 'Multiplayer', 'Game Dev'],
        imageFolder: 'Mistborn Maze'
    },
    {
        name: 'BrushBot-3000',
        description: {
            en: 'Educational pixel-art tool built in Godot and C# that implements a full interpreter pipeline (lexer, parser, semantic analyzer and tree-walking interpreter) for a custom language that controls a bot drawing live on a canvas.',
            es: 'Herramienta educativa de pixel art construida en Godot y C# que implementa un pipeline de intérprete completo (lexer, parser, analizador semántico e intérprete tree-walking) para un lenguaje de dominio específico que controla un bot que dibuja en vivo sobre un lienzo.',
        },
        url: 'https://github.com/andr-migue/BrushBot-3000',
        language: 'C#',
        stars: 4,
        forks: 0,
        tags: ['Godot', 'Interpreter', 'Compiler Design', 'Custom Language'],
        imageFolder: 'BrushBot-3000'
    },
    {
        name: 'Proyecto-SMIPS-2025-2026',
        description: {
            en: 'Simplified MIPS processor (S-MIPS) implemented in Logisim, validated by a Python-based test harness with an assembler, test runner and cost evaluator that checks correctness.',
            es: 'Procesador MIPS simplificado (S-MIPS) implementado en Logisim y validado con un arnés de pruebas en Python que incluye ensamblador, ejecutor de pruebas y evaluador de coste para comprobar su corrección.',
        },
        url: 'https://github.com/andr-migue/Proyecto-SMIPS-2025-2026',
        language: 'Python',
        stars: 1,
        forks: 0,
        tags: ['Computer Architecture', 'MIPS', 'Logisim', 'Digital Circuits'],
        imageFolder: 'SMIPS'
    },
    {
        name: 'data-structures-and-algorithms',
        description: {
            en: 'Competitive-programming C++ library implementing advanced structures (segment trees, binary trie, DSU) and graph algorithms including Dijkstra, Floyd-Warshall, Ford-Fulkerson, Tarjan, KMP and more.',
            es: 'Biblioteca de programación competitiva en C++ que implementa estructuras avanzadas (segment trees, binary trie, DSU) y algoritmos de grafos como Dijkstra, Floyd-Warshall, Ford-Fulkerson, Tarjan, KMP y más.',
        },
        url: 'https://github.com/andr-migue/data-structures-and-algorithms',
        language: 'C++',
        stars: 1,
        forks: 0,
        tags: ['Algorithms', 'Data Structures', 'Competitive Programming'],
    },
    {
        name: 'dsa-with-rust',
        description: {
            en: 'Rust library crate implementing DSU, Trie, Segment Tree and graph structures (adjacency list and matrix) with algorithms including BFS, DFS and KMP, O(log n) range queries, and full rustdoc documentation with comprehensive doc-tests.',
            es: 'Crate de biblioteca en Rust que implementa DSU, Trie, Segment Tree y estructuras de grafos (lista y matriz de adyacencia) con algoritmos como BFS, DFS y KMP, consultas de rango en O(log n) y documentación completa con rustdoc y doc-tests exhaustivos.',
        },
        url: 'https://github.com/andr-migue/dsa-with-rust',
        language: 'Rust',
        stars: 0,
        forks: 0,
        tags: ['Data Structures', 'Algorithms'],
    },
    {
        name: 'web-server',
        description: {
            en: 'Multithreaded HTTP/1.1 web server built from scratch in Rust using only the standard library (TcpListener, TcpStream and a custom thread pool) capable of serving static files and handling concurrent connections.',
            es: 'Servidor web HTTP/1.1 multihilo construido desde cero en Rust usando solo la biblioteca estándar (TcpListener, TcpStream y un pool de hilos propio), capaz de servir archivos estáticos y atender conexiones concurrentes.',
        },
        url: 'https://github.com/andr-migue/web-server',
        language: 'Rust',
        stars: 0,
        forks: 0,
        tags: ['HTTP', 'TCP', 'Multithreading', 'Systems Programming'],
    },
    {
        name: 'QR-Generator',
        description: {
            en: 'Python CLI tool that generates customized QR codes using qrcode and Pillow, embedding a centered logo via LANCZOS resampling and ERROR_CORRECT_H error correction to preserve scannability despite the image overlay.',
            es: 'Herramienta CLI en Python que genera códigos QR personalizados con qrcode y Pillow, incrustando un logo centrado mediante remuestreo LANCZOS y corrección de errores ERROR_CORRECT_H para mantener la legibilidad pese a la imagen superpuesta.',
        },
        url: 'https://github.com/andr-migue/QR-Generator',
        language: 'Python',
        stars: 1,
        forks: 0,
        tags: ['QR Code', 'Pillow', 'Image Processing', 'CLI'],
    },
    {
        name: 'Riemann-Integrable',
        description: {
            en: 'Academic LaTeX paper proving the equivalence of Riemann, Darboux and Cauchy integrability with formal epsilon-delta proofs, accompanied by a Python visualization (NumPy, Matplotlib, SymPy) that animates Darboux sums in real time with configurable functions and partition counts.',
            es: 'Artículo académico en LaTeX que demuestra la equivalencia de la integrabilidad de Riemann, Darboux y Cauchy con demostraciones formales épsilon-delta, acompañado de una visualización en Python (NumPy, Matplotlib, SymPy) que anima las sumas de Darboux en tiempo real con funciones y número de particiones configurables.',
        },
        url: 'https://github.com/andr-migue/Riemann-Integrable',
        language: 'TeX',
        stars: 1,
        forks: 0,
        tags: ['Matplotlib', 'SymPy', 'Numerical Analysis'],
    },
    {
        name: 'minigrep',
        description: {
            en: 'Command-line grep-like tool built in Rust that searches for a query string within a file, supporting case-sensitive and case-insensitive matching via an environment variable flag. Covers error handling with Result, trait-based abstraction, and unit testing, implemented without external dependencies.',
            es: 'Herramienta de línea de comandos al estilo de grep construida en Rust que busca una cadena dentro de un archivo, con búsqueda sensible o insensible a mayúsculas mediante una variable de entorno. Cubre manejo de errores con Result, abstracción mediante traits y pruebas unitarias, sin dependencias externas.',
        },
        url: 'https://github.com/andr-migue/minigrep',
        language: 'Rust',
        stars: 0,
        forks: 0,
        tags: ['CLI', 'Systems Programming', 'File I/O'],
    },
    {
        name: 'ODEs-NumMath-Project',
        description: {
            en: 'Numerical mathematics project implementing ODE solvers and phase plane analysis using Python\'s scientific stack (NumPy, SciPy, Matplotlib and SymPy) with interactive Jupyter notebooks for visualizing solution trajectories and stability regions.',
            es: 'Proyecto de matemática numérica que implementa solucionadores de EDO y análisis de plano de fase con el stack científico de Python (NumPy, SciPy, Matplotlib y SymPy), con notebooks interactivos de Jupyter para visualizar trayectorias de soluciones y regiones de estabilidad.',
        },
        url: 'https://github.com/andr-migue/ODEs-NumMath-Project',
        language: 'Python',
        stars: 1,
        forks: 0,
        tags: ['Jupyter','Numerical Methods', 'SciPy', 'Matplotlib'],
    },
]
