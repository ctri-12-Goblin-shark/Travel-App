import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from "react";

const Select = () => {
    const [budget, setBudget] = useState("")
    const [destination,setDestination] = useState("")
    const [bags, setBag] = useState("")
    const [travelers, setTravelers] = useState("")
    const [pickupDate, setPickup] = useState("")
    const [planePrice, setPlanePrice] = useState("")
    const [departureDate, setDepartureDate] = useState("")
    const [arrivalDate, setArrivalDate] = useState("")



    


const formSubmission = (e) => {
    e.preventDefault();
    
    fetch('/api/plane', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON',
        },
        body: JSON.stringify({ destination:destination, travelers:travelers, departureDate: departureDate, arrivalDate:arrivalDate}),
      })
        .then((res) => {res.json()})
        .then((res) => {
            setPlanePrice(res.locals.planePrice)
        })
        .catch((error) => console.log('ERROR: could not post-fetch: ' + error));
    }

    return (
        <div className = "container-selection">
            <form onSubmit={formSubmission}>
            <select className="destination"
            onChange={e => {
                const selectedDestination = e.target.value
                setDestination(selectedDestination)
            }}
            >
            <option value="BER">Berlin</option>
            <option value="LAX">Los Angeles</option>
            <option value="ATL">Atlanta</option>
            </select>

            <select className="travelers-number"
            onChange={e => {
                const travelerCount = e.target.value;
                setTravelers(travelerCount) 
            }}
            >
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>

            </select>

            </form>
            <button className = "next">Next</button>
        </div>




    )
}

export default Select;