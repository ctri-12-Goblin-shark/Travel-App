import React from 'react';
import { useState } from "react";
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";


function Plane() {
    const [planePricePreference, setPlanePricePreference] = useState("")
    const location = useLocation();

const handlePlanePricePreference = (e) => {
    const planeSelect = e.target.getAttribute('data-value');
    console.log(planeSelect)
    setPlanePricePreference(planeSelect);
}
  return (
    <div className = "planeSelect">
        <div onClick = {handlePlanePricePreference} data-value = "1">Fastest</div>
        <div onClick = {handlePlanePricePreference} data-value = "2">Cheapest</div>
        <div onClick = {handlePlanePricePreference} data-value = "0">Best</div>

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
  )
}

export default Plane;
