import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState, useEffect} from 'react';
import { useLocation } from "react-router-dom"
import Select from './Select';

const Summary = () => {
    const[displayPlane,setDisplayPlane] = useState()
    const[displayHotel, setDisplayHotel] = useState()
    const[displayCar, setDisplayCar] = useState()
    const[displaySavings, setDisplaySavings] = useState()
    const location = useLocation();

    useEffect(() => {
        fetch('/api', {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/JSON',
            },
            body: JSON.stringify({
                destination: location.state.destination,
                passengers: location.state.passengers,
                budget:location.state.budget,
                planePricePreference: location.state.planePricePreference,
                hotelPreference: location.state.hotelPreference,
                carTypePreference:location.state.carType,
                carPricePreference:location.state.carPricePreference,
                
            }),
          })
            .then((res) => {res.json()})
            .then((res) => {
                setDisplayPlane(res.locals.plane);
                setDisplayHotel(res.locals.hotel);
                setDisplayCar(res.locals.car);
                setDisplaySavings(res.locals.savings);
            })
            .catch((error) => console.log('ERROR: could not post-fetch: ' + error));
      
      });
    return (
        <div className = "displayPage">
            <div className = "displayPlane">{displayPlane}</div>
            <div className = "displayHotel">{displayHotel}</div>
            <div className = "displayCar">{displayCar}</div>
            <div className = "displaySavings">{displaySavings}</div>
        </div>
    )
}

export default Summary;