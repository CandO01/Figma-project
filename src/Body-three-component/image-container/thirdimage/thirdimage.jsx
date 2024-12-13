import React from 'react'
import image1 from './man-1.png'

function ImageThree(){
  return(
    <div className='image-one'>
        <img className='img-one' src={image1} alt="" />
        <p>Product Analyst <span className='span-one'>&#64; Paystack</span></p>
    </div>
  )
}
export default ImageThree