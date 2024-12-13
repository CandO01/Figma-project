import React from 'react'
import image3 from './woman1.png'
import './firstimage.scss'

function ImageOne(){
  return(
    <div className='image-one'>
        <img className='img-one' src={image3} alt="" />
        <p>Product Analyst <span className='span-one'>&#64; Paystack</span></p>
    </div>
  )
}
export default ImageOne