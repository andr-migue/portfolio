import './Projects.css'
import { projects } from '../../contents/projects'
import ProjectCard from '../ProjectCard/ProjectCard'

export default function Projects() {
    return (
        <section className='projects'>
            {projects.map(project => (
                <ProjectCard key={project.name} project={project} />
            ))}
        </section>
    )
}
