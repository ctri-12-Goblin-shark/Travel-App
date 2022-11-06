import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from "react";
import {parse} from '../dateParser.js';


const Car = () => {
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
    const [carType, setCarTypePreference] = useState("")
    const [carPrice, setCarPrice] = useState("")
    const [carTypePreference, setCarPricePreference] = useState("")


    const formSubmission = (e) => {
        e.preventDefault();
        
        fetch('/api/car', {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/JSON',
            },
            body: JSON.stringify({ destination:destination, travelers:travelers, departureDate: departureDate, arrivalDate:arrivalDate, carTypePreference: carTypePreference}),
          })
            .then((res) => {res.json()})
            .then((res) => {
                setCarPrice(res.locals.carPrice)
            })
            .catch((error) => console.log('ERROR: could not post-fetch: ' + error));
        }
    
        return (
            <div className = "container-selection">
                <form onSubmit={formSubmission}>
                <select className="car-price-preference"
                onChange={e => {
                    const carTypePrefer = e.target.value;
                    setCarTypePreference(carTypePrefer)
                }}
                >
                <option value="bmw"> BMW </option>
                <option value="audi"> Audi </option>
                <option value="vw"> Volkswagen </option>
    
                </select>
    
                </form>
                <button className = "next">Next</button>
            </div>
    
    
    
    
        )
}

export default Car;
