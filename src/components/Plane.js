import React from 'react';
import { useState } from "react";
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
import Best from '../img/best.png';
import CHEAP from '../img/CHEAP.png';
import SPEED from '../img/SPEED.png';





function Plane() {
    const [planePricePreference, setPlanePricePreference] = useState("")
    const location = useLocation();

const handlePlanePricePreference = (e) => {
    e.target.style.backgroundColor = '#78F8A1';
    e.target.style.color = "black";
    const planeSelect = e.target.getAttribute('data-value');
    //console.log(planeSelect)
    setPlanePricePreference(planeSelect);
}
  return (
    <div>
    <p className = "instruction">Select Flight Preference</p>
    <div className = "planeSelect">
        <div className = "plane" onClick = {handlePlanePricePreference} data-value = "1"><img className="city-logo" src={SPEED}></img><p>Fastest</p></div>
        <div className = "plane" onClick = {handlePlanePricePreference} data-value = "2"><img className="city-logo" src={CHEAP}></img><p>Cheapest</p></div>
        <div className = "plane" onClick = {handlePlanePricePreference} data-value = "0"><img className="city-logo" src={Best}></img><p>Best</p></div>
      </div>
      <div className = "nextContainer">
        <Link
       to = "/hotel"
       state = {{
        destination: location.state.destination,
        passengers: location.state.passengers,
        budget:location.state.budget,
        idAPI: location.state.idAPI,
        planePricePreference: planePricePreference,
        
       }}
       >
      <button className="next">Next</button>
      </Link>
      </div>
    </div>
  )
}

export default Plane;
