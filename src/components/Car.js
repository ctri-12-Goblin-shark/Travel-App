import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from "react";
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";

const Car = () => {
    const [carType,setCarType] = useState("")
    const location = useLocation();

const handleCarType = (e) => {
    const carTypePrefer = e.target.getAttribute("data-value")
    setCarType(carTypePrefer);
}
return (
    <div className = "carSelect">
        <div className = "carTypeSelect">
        <div onClick = {handleCarType} data-value = "bmw">BMW</div>
        <div onClick = {handleCarType} data-value = "audi" >AUDI</div>
        <div onClick = {handleCarType} data-value = "volkswagen">VW</div>
        </div>

        <Link
       to = "/summary"
       state = {{
        destination: location.state.destination,
        passengers: location.state.passengers,
        budget:location.state.budget,
        idAPI: location.state.idAPI,
        planePricePreference: location.state.planePricePreference,
        hotelPreference: location.state.hotelPreference,
        carTypePreference:carType,
        
       }}
       >
      <button className="next">Next</button>
      </Link>
    </div>

)
}

export default Car;
