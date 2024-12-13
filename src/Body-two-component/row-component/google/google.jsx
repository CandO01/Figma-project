import React from 'react';
import googleimage from './google.png'

function Google(){
  return(
    <div className='brand-container'>
        <p className='full-time'>Full time</p>
        <div className="first-part">
              <img className='brand-img' src={googleimage} alt="" />
              <p>Product Analyst</p>
        </div>
        <hr />
        <div className="second-part">
              <h5>Google</h5>
            <div className="location">
            <i className="fas fa-map-marker-alt"></i>
              <p>Lagos, Nigeria</p>
              <p className='apply1'>Apply now</p>
            </div>
        </div>
     </div>
  )
}
export default Google