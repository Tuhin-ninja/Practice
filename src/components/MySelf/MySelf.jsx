import React from 'react'
import Special from '../Special/Special'

export default function MySelf({asset}) {
  return (
    <div>
        <h2>MySelf</h2>
        <section className='flex'>
          <Special asset={asset}></Special>
        </section>
    </div>
  )
}
