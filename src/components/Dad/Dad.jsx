import React from 'react'
import MySelf from '../MySelf/MySelf'
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'

export default function Dad() {
  return (
    <div>
        <h2>Dad</h2>
        <section className='flex'>
            <MySelf></MySelf>
            <Brother></Brother>
            <Sister></Sister>
        </section>
    </div>
  )
}
