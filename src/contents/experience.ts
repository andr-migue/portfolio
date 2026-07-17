export interface Experience {
    title: string
    company: string
    companyUrl?: string
    startDate: string
    endDate: string
    description: string
    technologies: string[]
    projectName?: string
}

export const experiences: Experience[] = [
    {
        title: 'Frontend Developer',
        company: 'Example Corp',
        companyUrl: 'https://example.com',
        startDate: 'Ene 2024',
        endDate: 'Presente',
        description: 'Desarrollo de interfaces de usuario con React y TypeScript. Implementación de sistemas de diseño y optimización de rendimiento.',
        technologies: ['TypeScript', 'React', 'CSS', 'Vite'],
        projectName: 'portfolio',
    },
    {
        title: 'Backend Developer',
        company: 'Startup XYZ',
        startDate: 'Mar 2023',
        endDate: 'Dic 2023',
        description: 'Construcción de APIs REST y servicios en Rust. Enfoque en performance y seguridad de sistemas.',
        technologies: ['Rust'],
        projectName: 'web-server',
    },
    {
        title: 'Game Developer',
        company: 'Indie Studio',
        startDate: 'Jun 2022',
        endDate: 'Feb 2023',
        description: 'Desarrollo de videojuegos con generación procedural y mecánicas multijugador.',
        technologies: ['C#', 'Godot'],
        projectName: 'Mistborn-Maze',
    },
    {
        title: 'Systems Programmer',
        company: 'Low Level Labs',
        startDate: 'Ene 2022',
        endDate: 'May 2022',
        description: 'Implementación de estructuras de datos y algoritmos clásicos en C++ y Rust con foco en eficiencia de memoria.',
        technologies: ['C++', 'Rust'],
        projectName: 'data-structures-and-algorithms',
    },
    {
        title: 'Automation Engineer',
        company: 'DataOps Co',
        companyUrl: 'https://example.com',
        startDate: 'Ago 2021',
        endDate: 'Dic 2021',
        description: 'Scripts de automatización y generación de reportes con Python. Integración con APIs externas y procesamiento de datos.',
        technologies: ['Python'],
        projectName: 'QR-Generator',
    },
    {
        title: 'Research Assistant',
        company: 'Universidad',
        startDate: 'Mar 2021',
        endDate: 'Jul 2021',
        description: 'Redacción de documentación técnica y papers matemáticos. Análisis de integrabilidad de Riemann y formalización en LaTeX.',
        technologies: ['TeX'],
        projectName: 'Riemann-Integrable',
    },
    {
        title: 'Simulation Developer',
        company: 'Academic Lab',
        startDate: 'Sep 2020',
        endDate: 'Feb 2021',
        description: 'Modelado y simulación de sistemas para análisis de rendimiento. Proyecto académico de investigación aplicada.',
        technologies: ['Python'],
        projectName: 'Proyecto-SMIPS-2025-2026',
    },
    {
        title: 'Junior Developer',
        company: 'Tech Bootcamp',
        startDate: 'Ene 2020',
        endDate: 'Ago 2020',
        description: 'Primeros pasos en desarrollo web y algoritmos. Aprendizaje de fundamentos de programación y estructuras de datos con Rust.',
        technologies: ['Rust'],
        projectName: 'dsa-with-rust',
    },
]
