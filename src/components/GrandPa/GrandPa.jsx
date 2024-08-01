import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad"
import Uncle from "../Uncle/Uncle";
import './GrandPa.css'

export default function GrandPa() {
  const asset = 'diamond';
  return (
    <div className="grandpa">
        <h2>GrandPa</h2>
        <div className="flex">
           <Dad asset={asset}></Dad>
           <Uncle asset={asset}></Uncle>
           <Aunty></Aunty>
        </div>
    </div>
  )
}
