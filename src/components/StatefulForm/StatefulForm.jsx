import React, { useEffect, useRef } from 'react'
import './Form.css'

export default function StatefulForm() {

  const name = useRef(null); 
  const email = useRef(null); 
  const password = useRef(null); 

  useEffect(()=>{
    name.current.focus();
    // email.current.focus();
  }, [name]); 

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(name.current.value)
    console.log(email.current.value)
    console.log(password.current.value)
    name.current.value = null;
    email.current.value = null; 
    password.current.value = null; 
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" ref = {name} placeholder='Name'/>
            <input type="email" ref= {email} placeholder='Email' />
            <input type="password" ref = {password} placeholder='Password' />
            <button onClick={handleSubmit}> Submit</button>
        </form>
    </div>
  )
}
