import { useState, useEffect, useRef } from 'react'
import './TimeLineCard.css'
import type { Experience } from '../../contents/experience'
import type { Project } from '../../contents/projects'
import { getIcon } from '../../contents/icons'
import ProjectCard from '../ProjectCard/ProjectCard'

interface TimeLineCardProps {
    experience: Experience
    relatedProjects?: Project[]
}

export default function TimeLineCard({ experience, relatedProjects }: TimeLineCardProps) {
    const [activeProject, setActiveProject] = useState<Project | null>(null)
    const overlayRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!activeProject) return
        function handleKey(e: KeyboardEvent) {
            if (e.key === 'Escape') setActiveProject(null)
        }
        document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [activeProject])

    return (
        <article className='timeline-card'>
            <div className='timeline-card__node' aria-hidden='true' />
            <div className='timeline-card__body'>
                <div className='timeline-card__header'>
                    <h3 className='timeline-card__title'>
                        {experience.title} <span className='timeline-card__prep'>at</span>{' '}
                        {experience.companyUrl ? (
                            <a
                                href={experience.companyUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='timeline-card__company'
                            >
                                {experience.company}
                            </a>
                        ) : (
                            <span className='timeline-card__company'>{experience.company}</span>
                        )}
                    </h3>
                    <span className='timeline-card__dates'>
                        {experience.startDate} – {experience.endDate}
                    </span>
                </div>

                <p className='timeline-card__description'>{experience.description}</p>

                <ul className='timeline-card__tech'>
                    {experience.technologies.map(tech => {
                        const icon = getIcon(tech)
                        return (
                            <li key={tech} className='timeline-card__tech-item' title={tech}>
                                {icon ? (
                                    <img src={icon} alt={tech} className='timeline-card__tech-icon' />
                                ) : (
                                    <span className='timeline-card__tech-label'>{tech}</span>
                                )}
                            </li>
                        )
                    })}
                </ul>

                {relatedProjects && relatedProjects.length > 0 && (
                    <div className='timeline-card__project'>
                        {relatedProjects.map(project => (
                            <button
                                key={project.name}
                                className='timeline-card__project-trigger'
                                onClick={() => setActiveProject(project)}
                            >
                                {project.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {activeProject && (
                <div
                    className='timeline-card__overlay'
                    ref={overlayRef}
                    onClick={e => { if (e.target === overlayRef.current) setActiveProject(null) }}
                >
                    <div className='timeline-card__floating'>
                        <button
                            className='timeline-card__floating-close'
                            onClick={() => setActiveProject(null)}
                            aria-label='Cerrar'
                        >
                            ✕
                        </button>
                        <ProjectCard project={activeProject} />
                    </div>
                </div>
            )}
        </article>
    )
}
