import React from 'react'
import Cousin from '../Cousin/Cousin'

export default function Uncle({asset}) {
  return (
    <div>
        <h2>Uncle</h2>
        <section className='flex'>
          <Cousin name={'Maria'} asset={asset}></Cousin>
          <Cousin name={'Nabil'}></Cousin>
        </section>
    </div>
  )
}
