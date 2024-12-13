import './figma.scss';
import NavBar from './header-component/header';
import FirstBoxLeft from './Body-one-component/Left-container/firstBody-component';
import FirstBoxRight from './Body-one-component/Right-container/firstBody-component2';
import Jobs from './Body-two-component/recommended';
import HowItWorks from './Body-three-component/How-it-works-container/container';
import PopularCategory from './Body-four-component/Popular-category/popular';
import BrandCompanies from './Body-five-component/Companies-network/companies';
import Feedback from './Body-six-component/customer-feedback/Feedback';
import CustomerSupport from './Body-seven-component/CustomerRep';


function FigmaApp() {
  return (
     <div className = 'container'>

        <NavBar />

        <div className='content-one'>
          <FirstBoxLeft />
          <FirstBoxRight />
        </div>
        <Jobs />
        <div>
          <HowItWorks />
        </div>

        <PopularCategory />
        <BrandCompanies />
        <Feedback />
        <CustomerSupport />
     </div>
  )
}

export default FigmaApp;
