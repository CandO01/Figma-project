import React from "react";
import Oil from './Oil.png';
import './oilandgas.scss'

function OilAndGas(){
  return(
    <div className="oil-and-gas">
      <img src={Oil} />
      <p>Oil and gas</p>
      <p>(20 new jobs)</p>
    </div>
  )
}
export default OilAndGas