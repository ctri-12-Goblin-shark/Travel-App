import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from "react";
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
import toyota from '../img/TOYOTA.png';
import vw from '../img/vw.png';
import audi from '../img/audi.png'


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
        <div className = "car" onClick = {handleCarType} data-value = "toyota"><img className="city-logo" src={toyota}></img><p>TOYOTA</p></div>
        <div className = "car" onClick = {handleCarType} data-value = "audi" ><img className="city-logo" id="audi" src={audi}></img><p>AUDI</p></div>
        <div className = "car" onClick = {handleCarType} data-value = "volkswagen"><img className="city-logo" src={vw}></img><p>VW</p></div>
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
