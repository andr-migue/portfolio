export interface Project {
    name: string
    description: string
    url: string
    language: string
    stars: number
    forks: number
    tags: string[]
    imageFolder?: string
}

export const projects: Project[] = [
    {
        name: 'portfolio',
        description: 'Personal developer portfolio built with React 19, TypeScript and Vite, featuring an interactive map powered by Leaflet and a component-based architecture with typed content files.',
        url: 'https://github.com/andr-migue/portfolio',
        language: 'TypeScript',
        stars: 0,
        forks: 0,
        tags: ['React', 'CSS', 'Vite'],
    },
    {
        name: 'damero',
        description: 'Client-side QR code generator built with React 19, TypeScript and Vite: renders styled QR codes through qr-code-styling, composes raster or SVG logos over the PNG and SVG exports, and keeps a FIFO localStorage history. Fully static, with no backend and no network calls, so the user\'s logo never leaves the browser.',
        url: 'https://github.com/andr-migue/damero',
        language: 'TypeScript',
        stars: 0,
        forks: 0,
        tags: ['React', 'Vite', 'CSS', 'Vitest'],
    },
    {
        name: 'ToDo',
        description: 'Full-stack to-do application with a .NET 10 minimal-API backend that queries PostgreSQL directly through Npgsql, a React 19 + TypeScript frontend consuming it via a typed API client, and a Dockerized database, covering full CRUD over the task list.',
        url: 'https://github.com/andr-migue/ToDo',
        language: 'TypeScript',
        stars: 0,
        forks: 0,
        tags: ['React', '.NET', 'PostgreSQL', 'Docker'],
    },
    {
        name: 'Mistborn Maze',
        description: 'Real-time 2-player competitive maze game in Godot 4 and C# with procedural generation via DFS, 6 characters with unique abilities, sensor-based enemy AI, and a complete game loop including traps, scoring, and an original soundtrack.',
        url: 'https://github.com/andr-migue/Mistborn-Maze',
        language: 'C#',
        stars: 3,
        forks: 0,
        tags: ['Godot', 'Procedural Generation', 'Multiplayer', 'Game Dev'],
        imageFolder: 'Mistborn Maze'
    },
    {
        name: 'BrushBot-3000',
        description: 'Educational pixel-art tool built in Godot and C# that implements a full interpreter pipeline (lexer, parser, semantic analyzer and tree-walking interpreter) for BrushScript, a custom scripting language that controls a bot drawing live on a canvas.',
        url: 'https://github.com/andr-migue/BrushBot-3000',
        language: 'C#',
        stars: 4,
        forks: 0,
        tags: ['Godot', 'Interpreter', 'Compiler Design', 'Custom Language'],
        imageFolder: 'BrushBot-3000'
    },
    {
        name: 'Proyecto-SMIPS-2025-2026',
        description: 'Simplified MIPS processor (S-MIPS) implemented in Logisim, validated by a Python-based test harness with an assembler, test runner and cost evaluator that checks correctness.',
        url: 'https://github.com/andr-migue/Proyecto-SMIPS-2025-2026',
        language: 'Python',
        stars: 1,
        forks: 0,
        tags: ['Computer Architecture', 'MIPS', 'Logisim', 'Digital Circuits'],
        imageFolder: 'SMIPS'
    },
    {
        name: 'data-structures-and-algorithms',
        description: 'Competitive-programming C++ library implementing advanced structures (segment trees, binary trie, DSU) and graph algorithms including Dijkstra, Floyd-Warshall, Ford-Fulkerson, Tarjan, KMP and more.',
        url: 'https://github.com/andr-migue/data-structures-and-algorithms',
        language: 'C++',
        stars: 1,
        forks: 0,
        tags: ['Algorithms', 'Data Structures', 'Competitive Programming'],
    },
    {
        name: 'dsa-with-rust',
        description: 'Rust library crate implementing DSU, Trie, Segment Tree and graph structures (adjacency list and matrix) with algorithms including BFS, DFS and KMP, O(log n) range queries, and full rustdoc documentation with comprehensive doc-tests.',
        url: 'https://github.com/andr-migue/dsa-with-rust',
        language: 'Rust',
        stars: 0,
        forks: 0,
        tags: ['Data Structures', 'Algorithms'],
    },
    {
        name: 'web-server',
        description: 'Multithreaded HTTP/1.1 web server built from scratch in Rust using only the standard library (TcpListener, TcpStream and a custom thread pool) capable of serving static files and handling concurrent connections.',
        url: 'https://github.com/andr-migue/web-server',
        language: 'Rust',
        stars: 0,
        forks: 0,
        tags: ['HTTP', 'TCP', 'Multithreading', 'Systems Programming'],
    },
    {
        name: 'QR-Generator',
        description: 'Python CLI tool that generates customized QR codes using qrcode and Pillow, embedding a centered logo via LANCZOS resampling and ERROR_CORRECT_H error correction to preserve scannability despite the image overlay.',
        url: 'https://github.com/andr-migue/QR-Generator',
        language: 'Python',
        stars: 1,
        forks: 0,
        tags: ['QR Code', 'Pillow', 'Image Processing', 'CLI'],
    },
    {
        name: 'Riemann-Integrable',
        description: 'Academic LaTeX paper proving the equivalence of Riemann, Darboux and Cauchy integrability with formal epsilon-delta proofs, accompanied by a Python visualization (NumPy, Matplotlib, SymPy) that animates Darboux sums in real time with configurable functions and partition counts.',
        url: 'https://github.com/andr-migue/Riemann-Integrable',
        language: 'TeX',
        stars: 1,
        forks: 0,
        tags: ['Matplotlib', 'SymPy', 'Numerical Analysis'],
    },
    {
        name: 'minigrep',
        description: 'Command-line grep-like tool built in Rust that searches for a query string within a file, supporting case-sensitive and case-insensitive matching via an environment variable flag. Covers error handling with Result, trait-based abstraction, and unit testing, implemented without external dependencies.',
        url: 'https://github.com/andr-migue/minigrep',
        language: 'Rust',
        stars: 0,
        forks: 0,
        tags: ['CLI', 'Systems Programming', 'File I/O'],
    },
    {
        name: 'ODEs-NumMath-Project',
        description: 'Numerical mathematics project implementing ODE solvers and phase plane analysis using Python\'s scientific stack (NumPy, SciPy, Matplotlib and SymPy) with interactive Jupyter notebooks for visualizing solution trajectories and stability regions.',
        url: 'https://github.com/andr-migue/ODEs-NumMath-Project',
        language: 'Python',
        stars: 1,
        forks: 0,
        tags: ['Jupyter','Numerical Methods', 'SciPy', 'Matplotlib'],
    },
]
