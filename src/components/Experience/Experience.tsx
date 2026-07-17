import './Experience.css'
import { experiences } from '../../contents/experience'
import { projects } from '../../contents/projects'
import TimeLineCard from '../TimeLineCard/TimeLineCard'

export default function Experience() {
    const rows: typeof experiences[] = []
    for (let i = 0; i < experiences.length; i += 3) {
        rows.push(experiences.slice(i, i + 3))
    }

    return (
        <section className='experience'>
            <div className='experience__timeline'>
                {rows.map((row, rowIndex) => {
                    const isReversed = rowIndex % 2 === 1
                    const orderedRow = isReversed ? [...row].reverse() : row
                    const isLast = rowIndex === rows.length - 1
                    const dropClass = isLast
                        ? ''
                        : isReversed
                            ? ' experience__row-wrapper--drops-left'
                            : ' experience__row-wrapper--drops-right'

                    return (
                        <div key={rowIndex} className={`experience__row-wrapper${dropClass}`}>
                            <div className={`experience__row${isReversed ? ' experience__row--reversed' : ''}`}>
                                {orderedRow.map((exp) => {
                                    const related = exp.projectName
                                        ? projects.find(p => p.name === exp.projectName)
                                        : undefined
                                    return (
                                        <TimeLineCard
                                            key={exp.title + exp.company}
                                            experience={exp}
                                            relatedProject={related}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
