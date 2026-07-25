export interface Experience {
    title: string
    company: string
    companyUrl?: string
    startDate: string
    endDate: string
    description: string
    technologies: string[]
    projectNames?: string[]
}

export const experiences: Experience[] = [
    {
        title: 'Full-Stack Developer',
        company: 'Wamasol',
        companyUrl: 'https://wamasol.com',
        startDate: 'Apr 2026',
        endDate: 'Present',
        description: 'Delivering frontend and backend features for a tourism-services platform, from booking flows and service catalogs to internal tooling. Collaborating with a distributed team and owning the full lifecycle of the components I ship.',
        technologies: ['TypeScript', 'React', 'CSS', 'FastAPI', 'MongoDB'],
    },
    {
        title: 'Independent Study',
        company: 'University of Havana',
        companyUrl: 'https://uh.cu',
        startDate: 'Jul 2026',
        endDate: 'Aug 2026',
        description: 'Summer break between the 4th and 5th semesters. Building this portfolio (React 19 + Vite) and continuing part-time work at Wamasol.',
        technologies: ['TypeScript', 'React', 'Vite', 'CSS'],
        projectNames: ['portfolio'],
    },
    {
        title: 'BSc CS Semester 4',
        company: 'University of Havana',
        companyUrl: 'https://uh.cu',
        startDate: 'Jan 2026',
        endDate: 'Jun 2026',
        description: 'Coursework in Data Structures & Algorithms II, Discrete Math II, Databases I, Operating Systems, Probability, and an elective. Joined Wamasol as a Full-Stack Developer in April, overlapping the second half of the term.',
        technologies: ['SQL', 'C++', 'C', 'Linux'],
    },
    {
        title: 'BSc CS Semester 3',
        company: 'University of Havana',
        companyUrl: 'https://uh.cu',
        startDate: 'Sep 2025',
        endDate: 'Dec 2025',
        description: 'Coursework in Computer Architecture, Data Structures & Algorithms I, Discrete Math I, ODEs and Numerical Methods. Dedicated study of competitive-programming DSA in C++, with a companion Rust implementation for language mastery. Term projects included a simplified MIPS processor and a numerical ODE solver.',
        technologies: ['C++', 'Rust', 'Python', 'Logisim'],
        projectNames: ['Proyecto-SMIPS-2025-2026', 'ODEs-NumMath-Project', 'data-structures-and-algorithms', 'dsa-with-rust'],
    },
    {
        title: 'Independent Study',
        company: 'University of Havana',
        companyUrl: 'https://uh.cu',
        startDate: 'Jul 2025',
        endDate: 'Aug 2025',
        description: 'Summer break focused on systems programming in Rust: built a multithreaded HTTP server from scratch and a minigrep-style CLI to master ownership, traits and error handling. Also shipped a Python QR-code generator.',
        technologies: ['Rust', 'Python'],
        projectNames: ['web-server', 'minigrep', 'QR-Generator'],
    },
    {
        title: 'BSc CS Semester 2',
        company: 'University of Havana',
        companyUrl: 'https://uh.cu',
        startDate: 'Jan 2025',
        endDate: 'Jun 2025',
        description: 'Coursework in Algebra II, Mathematical Analysis II, Programming, and social-science modules. Built BrushBot-3000, a full lexer/parser/interpreter pipeline for a custom scripting language, and authored a LaTeX paper on the equivalence of Riemann, Darboux and Cauchy integrability with a Python animation of Darboux sums.',
        technologies: ['C#', 'Godot', 'Python', 'TeX'],
        projectNames: ['BrushBot-3000', 'Riemann-Integrable'],
    },
    {
        title: 'BSc CS Semester 1',
        company: 'University of Havana',
        companyUrl: 'https://uh.cu',
        startDate: 'Sep 2024',
        endDate: 'Dec 2024',
        description: 'First term of Computer Science at UH: Logic, Algebra I, Mathematical Analysis I, Programming and Philosophy. Built Mistborn Maze, a real-time 2-player competitive maze game in Godot/C# with procedural DFS generation and six characters featuring unique abilities.',
        technologies: ['C#', 'Godot'],
        projectNames: ['Mistborn Maze'],
    },
]
