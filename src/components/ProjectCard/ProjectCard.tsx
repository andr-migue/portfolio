import './ProjectCard.css'
import type { Project } from '../../contents/projects'
import { getIcon } from '../../contents/icons'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const languageIcon = getIcon(project.language)

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
                    <li
                        className={`project-card__language${languageIcon ? ' project-card__language--icon' : ''}`}
                        title={project.language}
                    >
                        {languageIcon ? (
                            <img src={languageIcon} alt={project.language} className='project-card__language-icon' />
                        ) : (
                            project.language
                        )}
                    </li>
                    {project.tags.map(tag => {
                        const tagIcon = getIcon(tag)
                        return (
                            <li
                                key={tag}
                                className={`project-card__tag${tagIcon ? ' project-card__tag--icon' : ''}`}
                                title={tag}
                            >
                                {tagIcon ? (
                                    <img src={tagIcon} alt={tag} className='project-card__tag-icon' />
                                ) : (
                                    tag
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>
            {project.image ? (
                <div className='project-card__image-wrapper'>
                    <img
                        src={project.image}
                        alt={project.name}
                        className='project-card__image'
                    />
                </div>
            ) : (
                <div className='project-card__image-wrapper project-card__image-wrapper--placeholder'>
                    <svg
                        className='project-card__image-placeholder-icon'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        aria-hidden='true'
                    >
                        <rect x='3' y='3' width='18' height='18' rx='2' />
                        <circle cx='8.5' cy='8.5' r='1.5' />
                        <path d='M21 15l-5-5L5 21' />
                    </svg>
                </div>
            )}
        </article>
    )
}
