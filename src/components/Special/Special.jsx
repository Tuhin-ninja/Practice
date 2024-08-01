import React, { useContext } from 'react'
import { AssetContext } from '../Context/DiamondContext';

export default function Special() {
  const asset = useContext(AssetContext);
  console.log(asset)
  return (
    <div>
        <h2>Special</h2>
        <p>{asset} recieved from Grandpa</p>
        
    </div>
  )
}
