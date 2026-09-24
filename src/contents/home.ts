export interface SkillGroup {
    label: string
    items: string[]
}

export interface Education {
    degree: string
    institution: string
    institutionUrl?: string
    startDate: string
    endDate: string
    summary?: string
}

export const home = {
    about: "I once told a joke to an interpreter and it threw a SyntaxError, so I wrote my own. I build web applications end to end, from React interfaces to the Python and .NET APIs behind them. I also work with Godot Engine, not only for games but as the graphical layer of an interpreter I built for a custom language. Away from the keyboard, you'll usually find me deep in a fantasy novel.",
    techSkills: [
        { label: 'Languages', items: ['TypeScript', 'Python', 'C#', 'C++'] },
        { label: 'Frontend', items: ['React', 'CSS', 'Vite'] },
        { label: 'Backend & Data', items: ['FastAPI', '.NET', 'PostgreSQL', 'MongoDB'] },
        { label: 'Tools', items: ['Docker', 'Linux', 'Vitest', 'Godot'] },
    ] as SkillGroup[],
    softSkills: ['Problem solving', 'Self-directed learning', 'Teamwork', 'Clear communication', 'Ownership'],
    // Nombres de `projects.ts` que se muestran en Home.
    featuredProjects: ['Shelfie', 'damero', 'Mistborn Maze', 'BrushBot-3000'],
    education: [
        {
            degree: 'BSc in Computer Science',
            institution: 'University of Havana',
            institutionUrl: 'https://uh.cu',
            startDate: 'Sep 2024',
            endDate: 'Present',
            summary: 'Currently in 3rd year, with coursework in algorithms, data structures, databases and operating systems.',
        },
    ] as Education[],
    learning: ['Testing and CI/CD pipelines', 'Backend architecture and API design', 'Containerized deployments with Docker'],
}
