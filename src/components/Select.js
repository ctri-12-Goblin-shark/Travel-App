import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from "react";
import {parse} from '../dateParser.js';


const Select = () => {
    const [budget, setBudget] = useState("")
    const [destination,setDestination] = useState("")
    const [bags, setBag] = useState("")
    const [travelers, setTravelers] = useState("")
    const [pickupDate, setPickup] = useState("")
    const [planePrice, setPlanePrice] = useState("")
    const [departureDate, setDepartureDate] = useState("")
    const [arrivalDate, setArrivalDate] = useState("")
    


const budgetSubmission = (e) => {
    e.preventDefault()

}


const formSubmission = (e) => {
    e.preventDefault();
    setBudget(e.target.value);
    setTravelers(e.target.value);
    setBudget(e.target.value);
    console.log("destination", destination);
    console.log("travelers", {travelers});
    console.log("budget", budget)

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
            <option value="SEA">Seattle</option>
            <option value="BLC">Bali</option>
            <option value="SIN">Singaopore</option>
            <option value="JFK">New York</option>
            <option value="ONT">Ontario</option>
            
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
            <option value="4"> 4 </option>
            <option value="5"> 5 </option>
            <option value="6"> 6 </option>
            
            </select>
            <input type='number' 
            placeholder='Enter number of traveler' 
            className='traveler-input'
            value={budget} 
            onChange={e => {
                const budgetAmount = e.target.value
                setBudget(budgetAmount)  
            }}
            />
             <DatePicker
              onChange={e => {
                const date = e.target.value
                setDepartureDate(date)
              } }
              value={departureDate}
              name="startDate"
              dateFormat="MM/dd/yyyy"
          />

            </form>
            <button className = "next">Next</button>
        </div>




    )
}

export default Select;