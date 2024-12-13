import React from 'react';
import paystackimage from './paystack.png';
import './paystack.scss';

function PayStack(){
  return(
    <div className='brand-container'>
      <p className='full-time'>Full time</p>
      <div className="first-part">
        <img className='brand-stack-img' src={paystackimage} alt="" />
        <p>QA Engineer</p>
      </div>
      <hr />
      <div className="second-part">
        <h5>Paystack</h5>
        <div className="location">
        <i className="fas fa-map-marker-alt"></i>
        <p>Lagos, Nigeria</p>
        <p className='apply'>Apply now</p>
        </div>
      </div>
    </div>
  )
}
export default PayStack