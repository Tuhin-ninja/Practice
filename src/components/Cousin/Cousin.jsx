import React from 'react'
import Special from '../Special/Special'

export default function Cousin({name}) {
  return (
    <div>
        <h2>Cousin</h2>
        <p>{name}</p>
        <section>
          <Special></Special>
        </section>
    </div>
  )
}
