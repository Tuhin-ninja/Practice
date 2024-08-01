import React from 'react'

export default function ReusableForm() {
  const handleSubmit = event => {
    event.preventDefault();
  }
  return (
    <div>
        <h2>Sign Up!</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input type="submit" value = 'Submit' />
        </form>
    </div>
  )
}
