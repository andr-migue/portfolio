import type { Localized } from '../i18n/language'

export interface SkillGroup {
    label: Localized
    items: string[]
}

export interface Education {
    degree: Localized
    institution: Localized
    institutionUrl?: string
    // 'YYYY-MM'. Sin endDate, sigue en curso.
    startDate: string
    endDate?: string
    summary?: Localized
}

export const home = {
    about: {
        en: "I once told a joke to an interpreter and it threw a SyntaxError, so I created my own. I build web applications, from React interfaces to APIs in Python with FastAPI and in C# with .NET. I also work with Godot Engine, not only for games but as the graphical layer of my own interpreter. Away from the keyboard, you'll usually find me deep in a fantasy novel.",
        es: 'Una vez le conté un chiste a un intérprete y me lanzó un SyntaxError, así que creé el mío. Desarrollo aplicaciones web, desde interfaces en React hasta APIs en Python con FastAPI y en C# con .NET. También trabajo con Godot Engine, no solo para videojuegos sino como capa gráfica de mi propio intérprete. Lejos del teclado, lo normal es encontrarme metido en una novela de fantasía.',
    } as Localized,
    techSkills: [
        { label: { en: 'Languages', es: 'Lenguajes' }, items: ['TypeScript', 'Python', 'C#', 'C++'] },
        { label: { en: 'Frontend', es: 'Frontend' }, items: ['React', 'CSS', 'Vite'] },
        { label: { en: 'Backend & Databases', es: 'Backend y Bases de Datos' }, items: ['FastAPI', '.NET', 'PostgreSQL', 'MongoDB'] },
        { label: { en: 'Tools', es: 'Herramientas' }, items: ['Docker', 'Linux', 'Vitest', 'Godot'] },
    ] as SkillGroup[],
    softSkills: [
        { en: 'Problem solving', es: 'Resolución de problemas' },
        { en: 'Self-directed learning', es: 'Aprendizaje autónomo' },
        { en: 'Teamwork', es: 'Trabajo en equipo' },
        { en: 'Clear communication', es: 'Comunicación clara' },
        { en: 'Ownership', es: 'Responsabilidad' },
    ] as Localized[],
    // Nombres de `projects.ts` que se muestran en Home.
    featuredProjects: ['Shelfie', 'BrushBot-3000','ToDo', 'Mistborn Maze'],
    education: [
        {
            degree: { en: 'BSc in Computer Science', es: 'Licenciatura en Ciencia de la Computación' },
            institution: { en: 'University of Havana', es: 'Universidad de La Habana' },
            institutionUrl: 'https://uh.cu',
            startDate: '2024-09',
            summary: {
                en: 'Currently in 3rd year (5th semester), with coursework in algorithms, data structures, databases and operating systems.',
                es: 'Actualmente en 3er año (5to semestre), con asignaturas de algoritmos, estructuras de datos, bases de datos y sistemas operativos.',
            },
        },
    ] as Education[],
    learning: [
        { en: 'Testing and CI/CD pipelines', es: 'Testing y pipelines de CI/CD' },
        { en: 'Backend architecture and API design', es: 'Arquitectura backend y diseño de APIs' },
        { en: 'Containerized deployments with Docker', es: 'Despliegues en contenedores con Docker' },
    ] as Localized[],
}
