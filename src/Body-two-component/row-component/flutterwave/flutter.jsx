import React from 'react';
import flutterimage from './flutterwave.png'

function FlutterWave(){
  return(
    <div className='brand-container'>
      <p className='full-time'>Full time</p>
      <div className="first-part">
        <img className='brand-img' src={flutterimage} alt="" />
        <p>HR Manager</p>
      </div>
      <hr />
      <div className="second-part">
        <h5>Flutterwave</h5>
        <div className="location">
        <i className="fas fa-map-marker-alt"></i>
        <p>Lagos, Nigeria</p>
        <p className='apply'>Apply now</p>
        </div>
      </div>
    </div>
  )
}
export default FlutterWave