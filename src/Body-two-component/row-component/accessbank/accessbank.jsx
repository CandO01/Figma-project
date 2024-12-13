import React from 'react';
import accessimage from './access-logo.png'

function AccessBank(){
  return(
    <div className='brand-container'>
      <p className='full-time'>Full time</p>
      <div className="first-part">
        <img className='brand-access-img' src={accessimage} alt="" />
        <p>QA Engineer</p>
      </div>
      <hr />
      <div className="second-part">
        <h5>Access Bank</h5>
        <div className="location">
        <i className="fas fa-map-marker-alt"></i>
        <p>Lagos, Nigeria</p>
        <p className='apply'>Apply now</p>
        </div>
      </div>
    </div>
  )
}
export default AccessBank