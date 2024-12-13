import React from "react";
import OilAndGas from "../Rowone/Oilandgas/Oil";
import HealthCare from "../Rowone/Health/Health";
import Education from "../Rowone/Education/Education";
import Account from "../Rowone/Accounting/Accounting";
import Design from "../Rowtwo/Design/Design";
import Technology from "../Rowtwo/Technology/Technology";
import Security from "../Rowtwo/Security/Security";
import DataInfo from "../Rowtwo/Data/Data";
import './popular.scss'

function PopularCategory(){
  return(
    <div className="popular-category">
        <h1>Popular Categories</h1>
        <div className="overall">
            <OilAndGas />
            <HealthCare />
            <Education />
            <Account />
            <Design />
            <Technology />
            <Security />
            <DataInfo />
        </div>
    </div>
  )
}
export default PopularCategory