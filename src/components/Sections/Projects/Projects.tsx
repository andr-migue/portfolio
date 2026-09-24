import './Projects.css'
import { projects } from '../../../contents/projects'
import ProjectCard from '../../ProjectCard/ProjectCard'
import { useLanguage } from '../../../i18n/language'

export default function Projects() {
    const { t } = useLanguage()
    const featured = projects.filter(p => p.imageFolder)
    const secondary = projects.filter(p => !p.imageFolder)

    return (
        <section className='projects'>
            <div className='projects__list'>
                {featured.map(project => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
            {secondary.length > 0 && (
                <>
                    <h3 className='projects__secondary-title'>{t.sections.otherProjects}</h3>
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
