import React from 'react';
import { useState } from "react";
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";


function Plane() {
    const [planePricePreference, setPlanePricePreference] = useState("")
    const location = useLocation();

const handlePlanePricePreference = (e) => {
    const planeSelect = e.target.getAttribute('data-value');
    console.log(location.state.destination)
    console.log(location.state.budget)
    console.log(planeSelect)
    setPlanePricePreference(planeSelect);
}
  return (
    <div className = "planeSelect">
        <div onClick = {handlePlanePricePreference} data-value = "fastest">Fastest</div>
        <div onClick = {handlePlanePricePreference} data-value = "cheapest">Cheapest</div>
        <div onClick = {handlePlanePricePreference} data-value = "best">Best</div>

        <Link
       to = "/hotel"
       state = {{
        destination: location.state.destination,
        passengers: location.state.passengers,
        budget:location.state.budget,
        planePricePreference: planePricePreference,
        
       }}
       >
      <button className="next">Next</button>
      </Link>
    </div>
  )
}

export default Plane;
