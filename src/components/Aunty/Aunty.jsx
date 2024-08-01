import React from 'react'
import Cousin from '../Cousin/Cousin'

export default function Aunty() {
  return (
    <div>
        <h2>Aunty</h2>
        <section className='flex'>
          <Cousin name={'Mamshad'}></Cousin>
          <Cousin name={'Rubaba'}></Cousin>
        </section>
    </div>
  )
}
