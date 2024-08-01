import React from 'react'
import './Form.css'
import useInputState from '../../hooks/useInputState';

export default function HookForm() {

const [name,handleNameChange] = useInputState('') 
const handleSubmit = event =>{
    console.log('form data',name)
    event.preventDefault();
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' onChange={handleNameChange}></input>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}
