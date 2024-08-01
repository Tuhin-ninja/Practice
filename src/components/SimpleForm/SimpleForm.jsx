import React from 'react'

export default function SimpleForm() {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted');
    console.log(event.target.name.value);
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name'></input><br/>
            <input type="submit" value="submit"></input>
        </form>
    </div>
  )
}
