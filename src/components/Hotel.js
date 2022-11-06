import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from "react";

const Hotel = () => {
    const [budget, setBudget] = useState("")
    const [destination,setDestination] = useState("")
    const [bags, setBag] = useState("")
    const [travelers, setTravelers] = useState("")
    const [pickupDate, setPickup] = useState("")
    const [planePrice, setPlanePrice] = useState("")
    const [departureDate, setDepartureDate] = useState("")
    const [arrivalDate, setArrivalDate] = useState("")
    const [hotelPrice, setHotelPrice] = useState("")
    const [hotelPricePreference, setHotelPricePreference] = useState("")


    const formSubmission = (e) => {
        e.preventDefault();
        
        fetch('/api/hotel', {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/JSON',
            },
            body: JSON.stringify({ destination:destination, travelers:travelers, departureDate: departureDate, arrivalDate:arrivalDate, hotelPricePreference: hotelPricePreference}),
          })
            .then((res) => {res.json()})
            .then((res) => {
                setHotelPrice(res.locals.hotelPrice)
            })
            .catch((error) => console.log('ERROR: could not post-fetch: ' + error));
        }
    
        return (
            <div className = "container-selection">
                <form onSubmit={formSubmission}>
                <select className="hotel-price-preference"
                onChange={e => {
                    const hotelPricePrefer = e.target.value;
                    setHotelPricePreference(hotelPricePrefer)
                }}
                >
                <option value="Low"> Low </option>
                <option value="Medium"> Medium </option>
                <option value="High"> High </option>
    
                </select>
    
                </form>
                <button className = "next">Next</button>
            </div>
    
    
    
    
        )
}

export default Hotel;
