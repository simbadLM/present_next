'use client'
import { FormEvent, useState } from 'react'
 
export default function Contact() {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Data', name, surname, mail, message)
  }

 
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24 bg-gray'>
      
      <form onSubmit={onSubmit}>
                <label>Nom : </label> 
                  <input 
                    required 
                    type="text" 
                    placeholder="Durand"
                    value={name}
                    onChange={(e) => setName(e.target.value)}>
                    </input>

                <label>Prénom : </label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Jean"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}>
                  </input>
                  
                <label>Mél: </label>
                  <input 
                    required 
                    type="email"
                    placeholder="jean.durand@mail.com" 
                    name="mail"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}>
                  </input>

                <label>Votre message : </label>
                  <textarea 
                    required
                    placeholder='Votre message ici'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}> 
                    </textarea>
                <button 
                  type="submit" 
                  value="Envoyer">Envoyer
                </button>
            </form>
        </main>
    )
}

