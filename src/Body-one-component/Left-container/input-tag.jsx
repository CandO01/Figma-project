import React from "react";
import './input-tag.scss'
function InputTag(){
  return(
    <div className="textbox">
      <input 
        type="text" 
        placeholder="Enter keywords, skill, employer"
      />
      <span className="inline-vertical-line"></span>
      <div className="icon-div">
        <i className="fas fa-map-marker-alt"></i>
        <p>Location</p>
        <i className="fas fa-search"></i>
      </div>
    </div>
  )
}
export default InputTag