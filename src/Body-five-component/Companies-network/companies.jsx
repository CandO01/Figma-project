import React from 'react';
import CompaniesLeft from '../Company-Left/company-network';
import './companies.scss';
import BrandingRight from '../Brands-Right/Brands';

function BrandCompanies(){
  return(
    <div className='brands-and-companies'>
      <CompaniesLeft />
      <BrandingRight />
    </div>
  )
}
export default BrandCompanies