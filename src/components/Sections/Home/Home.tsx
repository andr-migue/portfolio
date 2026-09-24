import './Home.css'
import ProjectCard from '../../ProjectCard/ProjectCard'
import { home } from '../../../contents/home'
import { experiences } from '../../../contents/experience'
import { projects } from '../../../contents/projects'
import { getIcon } from '../../../contents/icons'
import { useLanguage } from '../../../i18n/language'

interface HomeProps {
    onNavigate: (i: number) => void
}

const PROJECTS_TAB = 1
const TIMELINE_TAB = 2

// Solo la experiencia laboral: la formación tiene su propio bloque y el
// recorrido completo está en TimeLine.
const work = experiences.filter(e => e.kind === 'work')

function Tags({ items }: { items: string[] }) {
    const { tag } = useLanguage()
    return (
        <ul className='project-card__tags'>
            {items.map(item => {
                const icon = getIcon(item)
                return (
                    <li
                        key={item}
                        className={`project-card__tag${icon ? ' project-card__tag--icon' : ''}`}
                        title={tag(item)}
                    >
                        {icon ? <img src={icon} alt={item} className='project-card__tag-icon' /> : tag(item)}
                    </li>
                )
            })}
        </ul>
    )
}

export default function Home({ onNavigate }: HomeProps) {
    const { t, l, period } = useLanguage()
    const featured = home.featuredProjects
        .map(name => projects.find(p => p.name === name))
        .filter((p): p is typeof projects[number] => Boolean(p))

    return (
        <section className='home'>
            <section className='home__block'>
                <h2 className='home__title'>{t.sections.about}</h2>
                <p className='home__lead'>{l(home.about)}</p>
            </section>

            <div className='home__grid'>
                <section className='home__block'>
                    <h2 className='home__title'>{t.sections.techSkills}</h2>
                    <dl className='home__skills'>
                        {home.techSkills.map(group => (
                            <div key={group.label.en} className='home__skill-group'>
                                <dt className='home__label'>{l(group.label)}</dt>
                                <dd><Tags items={group.items} /></dd>
                            </div>
                        ))}
                    </dl>
                </section>

                <div className='home__column'>
                    <section className='home__block'>
                        <div className='home__heading'>
                            <h2 className='home__title'>{t.sections.experience}</h2>
                            <button type='button' className='home__more' onClick={() => onNavigate(TIMELINE_TAB)}>
                                {t.fullTimeline}
                            </button>
                        </div>
                        <ul className='home__list'>
                            {work.map(exp => (
                                <li key={exp.startDate + exp.title.en} className='home__card'>
                                    <div className='home__card-header'>
                                        <h3 className='home__card-title'>
                                            {l(exp.title)} <span className='home__card-prep'>{exp.prep ? l(exp.prep) : t.at}</span>{' '}
                                            {exp.companyUrl ? (
                                                <a href={exp.companyUrl} target='_blank' rel='noopener noreferrer' className='home__card-link'>
                                                    {l(exp.company)}
                                                </a>
                                            ) : (
                                                <span className='home__card-link home__card-link--plain'>{l(exp.company)}</span>
                                            )}
                                        </h3>
                                        <span className='home__card-meta'>{period(exp.startDate, exp.endDate)}</span>
                                    </div>
                                    {exp.summary && <p className='home__card-text'>{l(exp.summary)}</p>}
                                    <Tags items={exp.technologies} />
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className='home__block'>
                        <h2 className='home__title'>{t.sections.education}</h2>
                        <ul className='home__list'>
                            {home.education.map(ed => (
                                <li key={ed.degree.en} className='home__card'>
                                    <div className='home__card-header'>
                                        <h3 className='home__card-title'>
                                            {l(ed.degree)} <span className='home__card-prep'>{t.at}</span>{' '}
                                            {ed.institutionUrl ? (
                                                <a href={ed.institutionUrl} target='_blank' rel='noopener noreferrer' className='home__card-link'>
                                                    {l(ed.institution)}
                                                </a>
                                            ) : (
                                                <span className='home__card-link home__card-link--plain'>{l(ed.institution)}</span>
                                            )}
                                        </h3>
                                        <span className='home__card-meta'>{period(ed.startDate, ed.endDate)}</span>
                                    </div>
                                    {ed.summary && <p className='home__card-text'>{l(ed.summary)}</p>}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className='home__block'>
                        <h2 className='home__title'>{t.sections.learning}</h2>
                        <ul className='home__bullets'>
                            {home.learning.map(item => <li key={item.en}>{l(item)}</li>)}
                        </ul>
                    </section>
                </div>
            </div>

            <section className='home__block'>
                <div className='home__heading'>
                    <h2 className='home__title'>{t.sections.relevantProjects}</h2>
                    <button type='button' className='home__more' onClick={() => onNavigate(PROJECTS_TAB)}>
                        {t.allProjects}
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
