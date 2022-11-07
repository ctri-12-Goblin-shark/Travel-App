import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from "react";
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";

const Car = () => {
    const [carType,setCarType] = useState("")
    const location = useLocation();

const handleCarType = (e) => {
    e.target.style.backgroundColor = '#78F8A1';
    e.target.style.color = "black";
    const carTypePrefer = e.target.getAttribute("data-value")
    setCarType(carTypePrefer);
}
return (
    <div className = "carSelect">
        <p className = "instruction">Select Car Type</p>
        <div className = "carTypeSelect">
        <div className = "car" onClick = {handleCarType} data-value = "toyota">TOYOTA</div>
        <div className = "car" onClick = {handleCarType} data-value = "audi" >AUDI</div>
        <div className = "car" onClick = {handleCarType} data-value = "volkswagen">VW</div>
        </div>
    <div className = "nextContainer">
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
    </div>

)
}

export default Car;
