import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from "react";
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";

const Car = () => {
    const [carType,setCarType] = useState("")
    const [carPricePreference,setCarPricePreference] = useState("")
    const location = useLocation();

const handleCarType = (e) => {
    const carTypePrefer = e.target.getAttribute("data-value")
    setCarType(carTypePrefer);
}
const handleCarPrice = (e) => {
    const carPricePrefer = e.target.getAttribute("data-value")
    setCarPricePreference(carPricePrefer);
}
return (
    <div className = "carSelect">
        <div className = "carTypeSelect">
        <div onClick = {handleCarType} data-value = "bmw">BMW</div>
        <div onClick = {handleCarType} data-value = "audi" >AUDI</div>
        <div onClick = {handleCarType} data-value = "volkswagen">VW</div>
        </div>
        <div className = "carPriceSelect">
        <div onClick = {handleCarPrice} data-value = "high">High-End</div>
        <div onClick = {handleCarPrice} data-value = "best">Best</div>
        <div onClick = {handleCarPrice} data-value = "cheap">Chepest</div>
        </div>

        <Link
       to = "/summary"
       state = {{
        destination: location.state.destination,
        passengers: location.state.passengers,
        budget:location.state.budget,
        planePricePreference: location.state.planePricePreference,
        hotelPreference: location.state.hotelPreference,
        carTypePreference:carType,
        carPricePreference:carPricePreference,
        
       }}
       >
      <button className="next">Next</button>
      </Link>
    </div>

)
}

export default Car;
