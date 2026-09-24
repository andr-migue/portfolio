import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import './ProjectCard.css'
import type { Project } from '../../contents/projects'
import { getIcon } from '../../contents/icons'
import { getProjectImages } from '../../contents/projectImages'
import { useLanguage } from '../../i18n/language'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const { t, l, tag } = useLanguage()
    const languageIcon = getIcon(project.language)
    const images = project.imageFolder ? getProjectImages(project.imageFolder) : []
    const hasImages = images.length > 0

    const [showCarousel, setShowCarousel] = useState(false)
    const [index, setIndex] = useState(0)
    const overlayRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!showCarousel) return
        function handleKey(e: KeyboardEvent) {
            if (e.key === 'Escape') setShowCarousel(false)
            if (e.key === 'ArrowRight') setIndex(i => (i + 1) % images.length)
            if (e.key === 'ArrowLeft') setIndex(i => (i - 1 + images.length) % images.length)
        }
        document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [showCarousel, images.length])

    function openCarousel() {
        setIndex(0)
        setShowCarousel(true)
    }

    return (
        <>
        <article className={`project-card${hasImages ? '' : ' project-card--no-image'}`}>
            <div className='project-card__info'>
                <div className='project-card__header'>
                    {project.repos ? (
                        <span className='project-card__name'>
                            {project.name}
                        </span>
                    ) : (
                        <a
                            href={project.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='project-card__name'
                        >
                            {project.name}
                        </a>
                    )}
                    <div className='project-card__meta'>
                        <span className='project-card__stat'>
                            <img src={`${import.meta.env.BASE_URL}icons/star.svg`} alt={t.stars} title={t.stars} className='project-card__stat-icon' />
                            {project.stars}
                        </span>
                        <span className='project-card__stat'>
                            <img src={`${import.meta.env.BASE_URL}icons/fork.svg`} alt={t.forks} title={t.forks} className='project-card__stat-icon' />
                            {project.forks}
                        </span>
                    </div>
                </div>
                {project.repos && (
                    <ul className='project-card__repos'>
                        {project.repos.map(repo => (
                            <li key={repo.url}>
                                <a
                                    href={repo.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='project-card__repo-link'
                                >
                                    <img src={getIcon('GitHub')} alt='' aria-hidden='true' className='project-card__repo-icon' />
                                    {repo.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
                <p className='project-card__description'>{l(project.description)}</p>
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
                    {project.tags.map(name => {
                        const tagIcon = getIcon(name)
                        return (
                            <li
                                key={name}
                                className={`project-card__tag${tagIcon ? ' project-card__tag--icon' : ''}`}
                                title={tag(name)}
                            >
                                {tagIcon ? (
                                    <img src={tagIcon} alt={name} className='project-card__tag-icon' />
                                ) : (
                                    tag(name)
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>
            {hasImages && (
                <button
                    type='button'
                    className='project-card__image-button'
                    onClick={openCarousel}
                    aria-label={t.viewImages(project.name)}
                >
                    <img
                        src={images[0]}
                        alt={project.name}
                        className='project-card__image'
                    />
                    {images.length > 1 && (
                        <span className='project-card__image-count'>{images.length}</span>
                    )}
                </button>
            )}
        </article>
        {showCarousel && hasImages && createPortal(
            <div
                className='project-card__overlay'
                ref={overlayRef}
                onClick={e => { if (e.target === overlayRef.current) setShowCarousel(false) }}
            >
                <div className='project-card__floating'>
                    <button
                        className='project-card__floating-close'
                        onClick={() => setShowCarousel(false)}
                        aria-label={t.close}
                    >
                        ✕
                    </button>
                    <img
                        src={images[index]}
                        alt={t.imageOf(project.name, index + 1, images.length)}
                        className='project-card__floating-image'
                    />
                    {images.length > 1 && (
                        <>
                            <button
                                className='project-card__carousel-prev'
                                onClick={() => setIndex(i => (i - 1 + images.length) % images.length)}
                                aria-label={t.previous}
                            >
                                ‹
                            </button>
                            <button
                                className='project-card__carousel-next'
                                onClick={() => setIndex(i => (i + 1) % images.length)}
                                aria-label={t.next}
                            >
                                ›
                            </button>
                            <div className='project-card__carousel-dots'>
                                {images.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`project-card__carousel-dot${i === index ? ' project-card__carousel-dot--active' : ''}`}
                                        onClick={() => setIndex(i)}
                                        aria-label={t.image(i + 1)}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>,
            document.body
        )}
        </>
    )
}
