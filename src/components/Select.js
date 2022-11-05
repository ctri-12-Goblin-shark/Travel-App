import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from "react";

const Select = () => {
    const [budget, setBudget] = useState("")
    const [destination,setDestination] = useState("")
    const [bags, setBag] = useState("")
    const [travelers, setTravelers] = useState("")
    const [pickupDate, setPickup] = useState("")



    


const formSubmission = (e) => {
    e.preventDefault();
    
    fetch(`https://skyscanner44.p.rapidapi.com/search-rentacar?pickupId=95673383&pickupDate=${pickupDate}&pickupTime=${pickupTime}&returnDate=${returnDate}2022-11-11&returnTime=${retTime}&currency=EUR`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
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
        </div>




    )
}