import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from "react";
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";


const Hotel = () => {
    const [hotelPreference, setHotelPreference] = useState("");
    const location = useLocation();


const handleHotelPreference = (e) => {
    e.target.style.backgroundColor = '#78F8A1';
    e.target.style.color = "black";
    const hotelPrefer = e.target.getAttribute("data-value");
    setHotelPreference(hotelPrefer);
}


return(
    <div>
    <p className = "instruction">Select Hotel Preference</p>
    <div className = "hotelSelect">
        <div className = "hotel" onClick = {handleHotelPreference} data-value = "high" >High-End</div>
        <div className = "hotel" onClick = {handleHotelPreference} data-value = "best" >Best</div>
        <div className = "hotel" onClick = {handleHotelPreference} data-value = "cheap" >Cheapest</div>
    </div>
    <div className = "nextContainer">
        <Link
       to = "/car"
       state = {{
        destination: location.state.destination,
        passengers: location.state.passengers,
        budget:location.state.budget,
        idAPI: location.state.idAPI,
        planePricePreference: location.state.planePricePreference,
        hotelPreference: hotelPreference,
        
       }}
       >
      <button className="next">Next</button>
      </Link>
      </div>
    </div>


)

}

export default Hotel;
