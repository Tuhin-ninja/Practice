import React, { useContext, useRef } from 'react'
import Special from '../Special/Special'
import { MoneyContext } from '../Context/MoneyContext'

export default function MySelf() {
  const taka = useRef(10);
  const [money,setMoney] = useContext(MoneyContext)
  const handleMoney = e =>{
    e.preventDefault();
    const amount = Number(taka.current.value);
    setMoney(money+amount)
    console.log(taka.current.value)
  }
  return (
    <div>
        <h2>MySelf</h2>
        <form>
          <input type='number' placeholder='Add Money' ref={taka} />
          <button onClick={handleMoney}>ADD</button>
        </form>
        <section className='flex'>
          <Special></Special>
        </section>
    </div>
  )
}
