import React from 'react';
import customer from './customer.jpeg';
import './Feedback.scss'

function Feedback(){
  return(
    <div className='feedback'>
      <h1>What are our customers saying</h1>
      <div className="customer-image-text">
        <div className="image-customer FirstBoxRight1">
          <img className='office-man1' src={customer} />
        </div>
        <div className="customer-msg">
          <div className="arrow">
            <i className='fas fa-arrow-left'></i>
            <i className='fas fa-arrow-right'></i>
          </div>
          <div className="customer-quote">
            <div className="message-one">
              <i className="fas fa-quote-left"></i>
              <p className='platform'>The platform is really convenient to reach out to companies & I have managed to secure 2 interviews already! I can also track my application status instead of wondering whether the company has seen or shortlisted me</p>
            </div>

            <div className="name-of-customer">
              <p className='i-black'>Irman Black</p>
              <p className='manager-hr'>HR Manager at MasterCard</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
export default Feedback