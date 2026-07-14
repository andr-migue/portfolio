import './ProjectCard.css'
import type { Project } from '../../contents/projects'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className='project-card'>
            <div className='project-card__info'>
                <div className='project-card__header'>
                    <a
                        href={project.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='project-card__name'
                    >
                        {project.name}
                    </a>
                    <div className='project-card__meta'>
                        <span className='project-card__language'>{project.language}</span>
                        <span className='project-card__stat'>
                            <img src='/icons/star.svg' alt='stars' className='project-card__stat-icon' />
                            {project.stars}
                        </span>
                        <span className='project-card__stat'>
                            <img src='/icons/fork.svg' alt='forks' className='project-card__stat-icon' />
                            {project.forks}
                        </span>
                    </div>
                </div>
                <p className='project-card__description'>{project.description}</p>
                <ul className='project-card__tags'>
                    {project.tags.map(tag => (
                        <li key={tag} className='project-card__tag'>{tag}</li>
                    ))}
                </ul>
            </div>
            {project.image && (
                <div className='project-card__image-wrapper'>
                    <img
                        src={project.image}
                        alt={project.name}
                        className='project-card__image'
                    />
                </div>
            )}
        </article>
    )
}
