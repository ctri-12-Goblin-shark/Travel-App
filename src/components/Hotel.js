import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from "react";
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";


const Hotel = () => {
    const [hotelPreference, setHotelPreference] = useState("");
    const location = useLocation();


const handleHotelPreference = (e) => {
    const hotelPrefer = e.target.getAttribute("data-value");
    setHotelPreference(hotelPrefer);
}


return(
    <div className = "hotelSelect">
        <div onClick = {handleHotelPreference} data-value = "high" >High-End</div>
        <div onClick = {handleHotelPreference} data-value = "best" >Best</div>
        <div onClick = {handleHotelPreference} data-value = "cheap" >Cheapest</div>

        <Link
       to = "/car"
       state = {{
        destination: location.state.destination,
        passengers: location.state.passengers,
        budget:location.state.budget,
        planePricePreference: location.state.planePricePreference,
        hotelPreference: hotelPreference,
        
       }}
       >
      <button className="next">Next</button>
      </Link>
    </div>


)

}

export default Hotel;
