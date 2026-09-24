import './TimeLine.css'
import { experiences } from '../../../contents/experience'
import { projects } from '../../../contents/projects'
import TimeLineCard from '../../TimeLineCard/TimeLineCard'

export default function TimeLine() {
    const rows: typeof experiences[] = []
    for (let i = 0; i < experiences.length; i += 3) {
        rows.push(experiences.slice(i, i + 3))
    }

    return (
        <section className='timeline'>
            <div className='timeline__track'>
                {rows.map((row, rowIndex) => {
                    const isReversed = rowIndex % 2 === 1
                    const orderedRow = row
                    const isLast = rowIndex === rows.length - 1
                    const dropClass = isLast
                        ? ''
                        : isReversed
                            ? ' timeline__row-wrapper--drops-left'
                            : ' timeline__row-wrapper--drops-right'

                    return (
                        <div key={rowIndex} className={`timeline__row-wrapper${dropClass}`}>
                            <div className={`timeline__row${isReversed ? ' timeline__row--reversed' : ''}`}>
                                {orderedRow.map((exp) => {
                                    const related = exp.projectNames
                                        ?.map(name => projects.find(p => p.name === name))
                                        .filter((p): p is typeof projects[number] => Boolean(p))
                                    return (
                                        <TimeLineCard
                                            key={exp.startDate + exp.title.en}
                                            experience={exp}
                                            relatedProjects={related}
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
