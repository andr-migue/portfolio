import './About.css'

export default function About() {
    return (
        <section className='about'>
            <article className='about__content'>
                <h1 className='about__title'>Sobre mí</h1>

                <p className='about__lead'>
                    Escribe aquí un párrafo introductorio con más peso visual — una o dos frases
                    que resuman quién eres y qué haces.
                </p>

                <p>
                    Este es un párrafo normal. Puedes usar <strong>texto en negrita</strong>,{' '}
                    <em>texto en cursiva</em>, o <a href='#'>enlaces</a> dentro del flujo.
                </p>

                <h2>Un subtítulo</h2>
                <p>Otro párrafo para desarrollar una idea.</p>

                <h3>Un sub-subtítulo</h3>
                <ul>
                    <li>Elemento de lista uno</li>
                    <li>Elemento de lista dos</li>
                    <li>Elemento de lista tres</li>
                </ul>

                <ol>
                    <li>Lista ordenada uno</li>
                    <li>Lista ordenada dos</li>
                </ol>

                <blockquote>
                    Una cita destacada para dar énfasis a una frase importante.
                </blockquote>

                <p>
                    También puedes usar <code>código en línea</code> cuando lo necesites.
                </p>
            </article>
        </section>
    )
}
