import type { Localized } from '../i18n/language'

export interface Experience {
    // 'work' se muestra en Home; todo aparece en TimeLine.
    kind: 'work' | 'study'
    title: Localized
    // Sustituye a 'at'/'en' cuando `company` no es una organización.
    prep?: Localized
    company: Localized
    companyUrl?: string
    // 'YYYY-MM'. Sin endDate, la etapa sigue en curso.
    startDate: string
    endDate?: string
    description: Localized
    // Versión corta de la descripción para la card de Home.
    summary?: Localized
    technologies: string[]
    projectNames?: string[]
}

export const experiences: Experience[] = [
    {
        kind: 'work',
        title: { en: 'Full-Stack Developer', es: 'Desarrollador Full-Stack' },
        company: { en: 'Wamasol', es: 'Wamasol' },
        companyUrl: 'https://wamasol.com',
        startDate: '2026-04',
        description: {
            en: 'Delivering frontend and backend features for a tourism-services platform, from booking flows and service catalogs to internal tooling such as role and permission systems. Collaborating with a distributed team and owning the full lifecycle of the components I ship.',
            es: 'Desarrollo funcionalidades de frontend y backend para una plataforma de servicios turísticos, desde flujos de reserva y catálogos de servicios hasta herramientas internas como sistemas de roles y permisos. Colaboro con un equipo distribuido y me encargo del ciclo de vida completo de los componentes que entrego.',
        },
        summary: {
            en: 'Building frontend and backend features for a tourism-services platform, from booking flows to internal tooling such as role and permission systems.',
            es: 'Desarrollo funcionalidades de frontend y backend para una plataforma de servicios turísticos, desde flujos de reserva hasta herramientas internas como sistemas de roles y permisos.',
        },
        technologies: ['TypeScript', 'Python', 'React', 'CSS', 'FastAPI', 'MongoDB'],
    },
    {
        kind: 'study',
        title: { en: 'Independent Study', es: 'Estudio independiente' },
        prep: { en: 'during', es: 'durante las' },
        company: { en: 'Summer Break', es: 'Vacaciones de Verano' },
        startDate: '2026-07',
        endDate: '2026-08',
        description: {
            en: 'Summer break between the 4th and 5th semesters. Built this portfolio (React 19 + Vite), a full-stack to-do app pairing a .NET 10 minimal API over PostgreSQL with a React frontend, and damero, a fully client-side QR code generator with logo composition. Continued part-time work at Wamasol throughout.',
            es: 'Vacaciones de verano entre el 4to y el 5to semestre. Construí este portafolio (React 19 + Vite), una app de tareas full-stack que combina una API mínima en .NET 10 sobre PostgreSQL con un frontend en React, y damero, un generador de códigos QR totalmente en el cliente con composición de logo. Seguí trabajando a tiempo parcial en Wamasol durante todo el periodo.',
        },
        technologies: ['TypeScript', 'React', 'Vite', 'CSS', '.NET', 'PostgreSQL', 'Docker'],
        projectNames: ['portfolio', 'damero', 'ToDo', 'Shelfie'],
    },
    {
        kind: 'study',
        title: { en: 'BSc CS 4th Semester', es: 'Lic. en CC, 4to semestre' },
        company: { en: 'University of Havana', es: 'Universidad de La Habana' },
        companyUrl: 'https://uh.cu',
        startDate: '2026-01',
        endDate: '2026-06',
        description: {
            en: 'Coursework in Data Structures & Algorithms II, Discrete Math II, Databases I, Operating Systems, Probability, and an elective. Joined Wamasol as a Full-Stack Developer in April, overlapping the second half of the term.',
            es: 'Asignaturas: Estructuras de Datos y Algoritmos II, Matemática Discreta II, Bases de Datos I, Sistemas Operativos, Probabilidades y una optativa. En abril me incorporé a Wamasol como desarrollador full-stack, en paralelo con la segunda mitad del semestre.',
        },
        technologies: ['SQL', 'C++', 'C', 'Linux'],
    },
    {
        kind: 'study',
        title: { en: 'BSc CS 3rd Semester', es: 'Lic. en CC, 3er semestre' },
        company: { en: 'University of Havana', es: 'Universidad de La Habana' },
        companyUrl: 'https://uh.cu',
        startDate: '2025-09',
        endDate: '2025-12',
        description: {
            en: 'Coursework in Computer Architecture, Data Structures & Algorithms I, Discrete Math I, ODEs and Numerical Methods. Dedicated study of competitive-programming DSA in C++, with a companion Rust implementation for language mastery. Term projects included a simplified MIPS processor and a numerical ODE solver.',
            es: 'Asignaturas: Arquitectura de Computadoras, Estructuras de Datos y Algoritmos I, Matemática Discreta I, Ecuaciones Diferenciales Ordinarias y Métodos Numéricos. Estudio dedicado de estructuras de datos y algoritmos de programación competitiva en C++, con una implementación paralela en Rust para dominar el lenguaje. Los proyectos del semestre incluyeron un procesador MIPS simplificado y un solucionador numérico de EDO.',
        },
        technologies: ['C++', 'Rust', 'Python', 'Logisim'],
        projectNames: ['Proyecto-SMIPS-2025-2026', 'ODEs-NumMath-Project', 'data-structures-and-algorithms', 'dsa-with-rust'],
    },
    {
        kind: 'study',
        title: { en: 'Independent Study', es: 'Estudio independiente' },
        prep: { en: 'during', es: 'durante las' },
        company: { en: 'Summer Break', es: 'Vacaciones de Verano' },
        startDate: '2025-07',
        endDate: '2025-08',
        description: {
            en: 'Summer break focused on systems programming in Rust: built a multithreaded HTTP server from scratch and a minigrep-style CLI to master ownership, traits and error handling. Also shipped a Python QR-code generator.',
            es: 'Verano dedicado a la programación de sistemas en Rust: construí desde cero un servidor HTTP multihilo y una CLI al estilo de minigrep para dominar ownership, traits y manejo de errores. También publiqué un generador de códigos QR en Python.',
        },
        technologies: ['Rust', 'Python'],
        projectNames: ['web-server', 'minigrep', 'QR-Generator'],
    },
    {
        kind: 'study',
        title: { en: 'BSc CS 2nd Semester', es: 'Lic. en CC, 2do semestre' },
        company: { en: 'University of Havana', es: 'Universidad de La Habana' },
        companyUrl: 'https://uh.cu',
        startDate: '2025-01',
        endDate: '2025-06',
        description: {
            en: 'Coursework in Algebra II, Mathematical Analysis II, Programming, and social-science modules. Built BrushBot-3000, a full lexer/parser/interpreter pipeline for a custom language, and authored a LaTeX paper on the equivalence of Riemann, Darboux and Cauchy integrability with a Python animation of Darboux sums.',
            es: 'Asignaturas: Álgebra II, Análisis Matemático II, Programación y módulos de ciencias sociales. Construí BrushBot-3000, un pipeline completo de lexer, parser e intérprete para un lenguaje de dominio específico, y escribí en LaTeX un artículo sobre la equivalencia de la integrabilidad de Riemann, Darboux y Cauchy, con una animación en Python de las sumas de Darboux.',
        },
        technologies: ['C#', 'Godot', 'Python', 'TeX'],
        projectNames: ['BrushBot-3000', 'Riemann-Integrable'],
    },
    {
        kind: 'study',
        title: { en: 'BSc CS 1st Semester', es: 'Lic. en CC, 1er semestre' },
        company: { en: 'University of Havana', es: 'Universidad de La Habana' },
        companyUrl: 'https://uh.cu',
        startDate: '2024-09',
        endDate: '2024-12',
        description: {
            en: 'First term of Computer Science at UH: Logic, Algebra I, Mathematical Analysis I, Programming and Philosophy. Built Mistborn Maze, a real-time 2-player competitive maze game in Godot/C# with procedural DFS generation and six characters featuring unique abilities.',
            es: 'Primer semestre de Ciencia de la Computación en la UH: Lógica, Álgebra I, Análisis Matemático I, Programación y Filosofía. Construí Mistborn Maze, un juego de laberinto competitivo para 2 jugadores en tiempo real en Godot/C#, con generación procedural mediante DFS y seis personajes con habilidades únicas.',
        },
        technologies: ['C#', 'Godot'],
        projectNames: ['Mistborn Maze'],
    },
]
