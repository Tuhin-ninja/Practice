import { useState } from "react";
import Aunty from "../Aunty/Aunty";
import { AssetContext } from "../Context/DiamondContext";
import { MoneyContext } from "../Context/MoneyContext";
import Dad from "../Dad/Dad"
import Uncle from "../Uncle/Uncle";
import './GrandPa.css'

export default function GrandPa() {
  const asset = 'diamond';
  const [money,setMoney] = useState(1000);
  return (
    <div className="grandpa">
        <h2>GrandPa</h2>
        <p>Money : {money}</p>
        <MoneyContext.Provider value={[money,setMoney]}>
        <AssetContext.Provider value={asset}>
        <div className="flex">
           <Dad></Dad>
           <Uncle></Uncle>
           <Aunty></Aunty>
        </div>
        </AssetContext.Provider>
        </MoneyContext.Provider>
       
    </div>
  )
}

/**
 * 1. create a context 
 */
