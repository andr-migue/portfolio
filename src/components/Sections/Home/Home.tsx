import './Home.css'
import ProjectCard from '../../ProjectCard/ProjectCard'
import { home } from '../../../contents/home'
import { experiences } from '../../../contents/experience'
import { projects } from '../../../contents/projects'
import { getIcon } from '../../../contents/icons'

interface HomeProps {
    onNavigate: (i: number) => void
}

const PROJECTS_TAB = 1
const TIMELINE_TAB = 2

// Solo la experiencia laboral: la formación tiene su propio bloque y el
// recorrido completo está en TimeLine.
const work = experiences.filter(e => e.company !== 'University of Havana')

function Tags({ items }: { items: string[] }) {
    return (
        <ul className='project-card__tags'>
            {items.map(item => {
                const icon = getIcon(item)
                return (
                    <li
                        key={item}
                        className={`project-card__tag${icon ? ' project-card__tag--icon' : ''}`}
                        title={item}
                    >
                        {icon ? <img src={icon} alt={item} className='project-card__tag-icon' /> : item}
                    </li>
                )
            })}
        </ul>
    )
}

export default function Home({ onNavigate }: HomeProps) {
    const featured = home.featuredProjects
        .map(name => projects.find(p => p.name === name))
        .filter((p): p is typeof projects[number] => Boolean(p))

    return (
        <section className='home'>
            <section className='home__block'>
                <h2 className='home__title'>About me</h2>
                <p className='home__lead'>{home.about}</p>
            </section>

            <div className='home__grid'>
                <section className='home__block'>
                    <h2 className='home__title'>Tech Skills</h2>
                    <dl className='home__skills'>
                        {home.techSkills.map(group => (
                            <div key={group.label} className='home__skill-group'>
                                <dt className='home__label'>{group.label}</dt>
                                <dd><Tags items={group.items} /></dd>
                            </div>
                        ))}
                    </dl>
                </section>

                <div className='home__column'>
                    <section className='home__block'>
                        <div className='home__heading'>
                            <h2 className='home__title'>Experience</h2>
                            <button type='button' className='home__more' onClick={() => onNavigate(TIMELINE_TAB)}>
                                Full timeline →
                            </button>
                        </div>
                        <ul className='home__list'>
                            {work.map(exp => (
                                <li key={exp.title + exp.company} className='home__card'>
                                    <div className='home__card-header'>
                                        <h3 className='home__card-title'>
                                            {exp.title} <span className='home__card-prep'>at</span>{' '}
                                            {exp.companyUrl ? (
                                                <a href={exp.companyUrl} target='_blank' rel='noopener noreferrer' className='home__card-link'>
                                                    {exp.company}
                                                </a>
                                            ) : (
                                                <span className='home__card-link'>{exp.company}</span>
                                            )}
                                        </h3>
                                        <span className='home__card-meta'>{exp.startDate} – {exp.endDate}</span>
                                    </div>
                                    {exp.summary && <p className='home__card-text'>{exp.summary}</p>}
                                    <Tags items={exp.technologies} />
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className='home__block'>
                        <h2 className='home__title'>Education</h2>
                        <ul className='home__list'>
                            {home.education.map(ed => (
                                <li key={ed.degree} className='home__card'>
                                    <div className='home__card-header'>
                                        <h3 className='home__card-title'>
                                            {ed.degree} <span className='home__card-prep'>at</span>{' '}
                                            {ed.institutionUrl ? (
                                                <a href={ed.institutionUrl} target='_blank' rel='noopener noreferrer' className='home__card-link'>
                                                    {ed.institution}
                                                </a>
                                            ) : (
                                                <span className='home__card-link'>{ed.institution}</span>
                                            )}
                                        </h3>
                                        <span className='home__card-meta'>{ed.startDate} – {ed.endDate}</span>
                                    </div>
                                    {ed.summary && <p className='home__card-text'>{ed.summary}</p>}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className='home__block'>
                        <h2 className='home__title'>Currently learning</h2>
                        <ul className='home__bullets'>
                            {home.learning.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </section>
                </div>
            </div>

            <section className='home__block'>
                <div className='home__heading'>
                    <h2 className='home__title'>Relevant Projects</h2>
                    <button type='button' className='home__more' onClick={() => onNavigate(PROJECTS_TAB)}>
                        All projects →
                    </button>
                </div>
                <div className='home__list'>
                    {featured.map(project => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </section>
        </section>
    )
}
