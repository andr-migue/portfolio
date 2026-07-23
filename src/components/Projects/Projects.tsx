import './Projects.css'
import { projects } from '../../contents/projects'
import ProjectCard from '../ProjectCard/ProjectCard'

export default function Projects() {
    const featured = projects.filter(p => p.image)
    const secondary = projects.filter(p => !p.image)

    return (
        <section className='projects'>
            <div className='projects__list'>
                {featured.map(project => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
            {secondary.length > 0 && (
                <>
                    <h3 className='projects__secondary-title'>Other projects</h3>
                    <div className='projects__grid'>
                        {secondary.map(project => (
                            <ProjectCard key={project.name} project={project} />
                        ))}
                    </div>
                </>
            )}
        </section>
    )
}
