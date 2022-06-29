import { useState } from 'react'
import Swal from 'sweetalert2'
import './Contact.scss'

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sumbitForm = (e) => {
        e.preventDefault();
        if(name.length > 0) {alertOnSubmit()}
        setName("")
        setEmail("")
        setMessage("")
    }

    const alertOnSubmit = () => {
        Swal.fire(`Your Welcome "${name}"`)
    }

  return (
    <div className='contact-container'>
        <p>Let's Talk</p>
        <form onSubmit={sumbitForm}>
            <div>
                <label htmlFor='name'>Name*</label>
                <input value={name} onChange={e => setName(e.target.value)} id='name' type="text" />
            </div>
            <div>
                <label htmlFor='email'>Email*</label>
                <input value={email} onChange={e => setEmail(e.target.value)} id="email" type="email" />
            </div>
            <div>
                <label htmlFor="feedback">Send Your Feedback</label>
                <textarea value={message} onChange={e => setMessage(e.target.value)} id="feedback" />
            </div>
            <button type="submit">send</button>
        </form>
    </div>
  )
}