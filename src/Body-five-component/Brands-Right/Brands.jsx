import React from 'react';
import uber from './uber.png';
import google from './google-1.png';
import flutter from './flutterwave.png';
import zapie from './zapier.png';
import accent from './accenture.png';
import mobile from './9mobile.png';
import airtel from './airtel.png';
import mckins from './mckinsey.png';
import brandlogo from './Logos.png';
import './Brands.scss'

function BrandingRight(){
  return(
      <img className='brandlogo1' src= {brandlogo} alt="" />
      // <div className="branding-icons">
      //   <div className="uber-container">
      //       <img src={uber} />
      //       <img src={google} />
      //       <img src={flutter} />
      //   </div>

      //   <div className="Zapier-container">
      //       <img src={zapie} />
      //       <img src={accent} />
      //   </div>

      //   <div className="mobile-container">
      //       <img src={mobile} />
      //       <img src={airtel} />
      //       <img src={mckins} />
      //   </div>
      // </div>
  )
}
export default BrandingRight