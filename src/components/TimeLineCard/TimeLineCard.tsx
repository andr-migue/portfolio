import { useState, useEffect, useRef } from 'react'
import './TimeLineCard.css'
import type { Experience } from '../../contents/experience'
import type { Project } from '../../contents/projects'
import { getIcon } from '../../contents/icons'
import ProjectCard from '../ProjectCard/ProjectCard'

interface TimeLineCardProps {
    experience: Experience
    relatedProject?: Project
}

export default function TimeLineCard({ experience, relatedProject }: TimeLineCardProps) {
    const [showProject, setShowProject] = useState(false)
    const overlayRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!showProject) return
        function handleKey(e: KeyboardEvent) {
            if (e.key === 'Escape') setShowProject(false)
        }
        document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [showProject])

    return (
        <article className='timeline-card'>
            <div className='timeline-card__node' aria-hidden='true' />
            <div className='timeline-card__body'>
                <div className='timeline-card__header'>
                    <div className='timeline-card__title-group'>
                        <h3 className='timeline-card__title'>{experience.title}</h3>
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
                    </div>
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

                {relatedProject && (
                    <div className='timeline-card__project'>
                        <button
                            className='timeline-card__project-trigger'
                            onClick={() => setShowProject(true)}
                        >
                            {relatedProject.name}
                        </button>
                    </div>
                )}
            </div>

            {showProject && relatedProject && (
                <div
                    className='timeline-card__overlay'
                    ref={overlayRef}
                    onClick={e => { if (e.target === overlayRef.current) setShowProject(false) }}
                >
                    <div className='timeline-card__floating'>
                        <button
                            className='timeline-card__floating-close'
                            onClick={() => setShowProject(false)}
                            aria-label='Cerrar'
                        >
                            ✕
                        </button>
                        <ProjectCard project={relatedProject} />
                    </div>
                </div>
            )}
        </article>
    )
}
