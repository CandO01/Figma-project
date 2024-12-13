import React from "react";
import image1 from './paystack-1.png';
import image2 from './google-1.png';
import image3 from './kmpg.png';
import './logos.scss';
function Logo(){
  return(
    <div>
      <h5>Trusted by:</h5>
      <div className="logo-icon">
        <img className="logo-image1" src={image1} alt="" />
        <img className="logo-image" src={image2} alt="" />
        <img className="logo-image" src={image3} alt="" />
      </div>
    </div>
  )
}
export default Logo