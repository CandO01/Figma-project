import React from 'react'
import ImageOne from '../image-container/firstimage/firstimage'
import ImageTwo from '../image-container/secondimage/secondimage'
import ImageThree from '../image-container/thirdimage/thirdimage'
import Text from '../text-container/text';
import './container.scss';

function HowItWorks(){
  return(
    <div className='how-it-works'>
        <div className='subimage-container'>
          <ImageOne />
          <ImageTwo />
        </div>
        <div className="image-three">
          <ImageThree />
        </div>
        <div className="text-container-one">
          <Text />
        </div>
    </div>
  )
}
export default HowItWorks