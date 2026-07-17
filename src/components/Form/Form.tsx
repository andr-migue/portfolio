import { useState } from 'react'
import './Form.css'
import { contact } from '../../contents/contact'

export default function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const body = `De: ${name} <${email}>\n\n${message}`
        const href = `mailto:${contact.toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.location.href = href
    }

    return (
        <form className='form' onSubmit={handleSubmit}>

            <div className='form__field'>
                <label className='form__label' htmlFor='form-email'>Email</label>
                <input
                    id='form-email'
                    className='form__input'
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className='form__field'>
                <label className='form__label' htmlFor='form-subject'>Asunto</label>
                <input
                    id='form-subject'
                    className='form__input'
                    type='text'
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    required
                />
            </div>

            <div className='form__field'>
                <label className='form__label' htmlFor='form-message'>Mensaje</label>
                <textarea
                    id='form-message'
                    className='form__textarea'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    rows={6}
                    required
                />
            </div>

            <button type='submit' className='form__submit'>Enviar</button>
        </form>
    )
}
