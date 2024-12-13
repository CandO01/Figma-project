import React from "react";
import InputTag from "./input-tag";
import Logo from "./logos";
import './firstboxleft.scss';


  
  
function FirstBoxLeft(){
  return(
    <div className="left-container">
      <h3>Find a <span>job</span> easily</h3>
      <p>With verified, up-to-date job listings directly from employer websites, we create a premium experience for job seekers, employers, and data seekers alike.</p>

      <InputTag />
      <Logo />
    </div>
  )
}
export default FirstBoxLeft