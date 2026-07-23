import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import './ProjectCard.css'
import type { Project } from '../../contents/projects'
import { getIcon } from '../../contents/icons'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const languageIcon = getIcon(project.language)
    const [showImage, setShowImage] = useState(false)
    const overlayRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!showImage) return
        function handleKey(e: KeyboardEvent) {
            if (e.key === 'Escape') setShowImage(false)
        }
        document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [showImage])

    return (
        <>
        <article className={`project-card${project.image ? '' : ' project-card--no-image'}`}>
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
            {project.image && (
                <button
                    type='button'
                    className='project-card__image-button'
                    onClick={() => setShowImage(true)}
                    aria-label={`Ver imagen de ${project.name} en grande`}
                >
                    <img
                        src={project.image}
                        alt={project.name}
                        className='project-card__image'
                    />
                </button>
            )}
        </article>
        {showImage && project.image && createPortal(
            <div
                className='project-card__overlay'
                ref={overlayRef}
                onClick={e => { if (e.target === overlayRef.current) setShowImage(false) }}
            >
                <div className='project-card__floating'>
                    <button
                        className='project-card__floating-close'
                        onClick={() => setShowImage(false)}
                        aria-label='Cerrar'
                    >
                        ✕
                    </button>
                    <img
                        src={project.image}
                        alt={project.name}
                        className='project-card__floating-image'
                    />
                </div>
            </div>,
            document.body
        )}
        </>
    )
}
