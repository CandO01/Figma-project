import React from 'react';
import PayStack from './row-component/paystack/paystack';
import Google from './row-component/google/google';
import FlutterWave from './row-component/flutterwave/flutter';
import AccessBank from './row-component/accessbank/accessbank';
import './recommended.scss';

function Jobs(){
  return(
    <div className="recommended-div">
      <h2 className='jobs'>
        Recommended Jobs
      </h2>
      <div className="brand-div">
          <PayStack />
          <Google />
          <FlutterWave />
          <AccessBank />
      </div>
    </div>
  )
}
export default Jobs