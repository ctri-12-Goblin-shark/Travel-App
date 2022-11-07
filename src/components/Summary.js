import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState, useEffect} from 'react';
import { useLocation } from "react-router-dom"
import Select from './Select';
import Axios from "axios";

const Summary = () => {
    const[displayPlane,setDisplayPlane] = useState()
    const[displayHotel, setDisplayHotel] = useState()
    const[displayCar, setDisplayCar] = useState()
    const[displaySavings, setDisplaySavings] = useState()
    const location = useLocation();
    const savings = location.state.budget;

    console.log('destination: ', location.state.destination)
    console.log('budget: ',location.state.budget)
    console.log('location: ',location.state.passengers)
    console.log('idAPI: ',location.state.idAPI)
    console.log('planePreference: ',location.state.planePricePreference)
    console.log('hotelPreference: ',location.state.hotelPreference)
    console.log('cartype: ',location.state.carTypePreference)
    console.log('savings',savings)

    

    //if this doesn't work we do onClick on a button that says CALCULATE!
    // useEffect(() => {
    //     Axios.post('http://localhost:1234/api/', {
    //         destination: location.state.destination,
    //         passengers: location.state.passengers,
    //         budget:location.state.budget,
    //         savings: savings,
    //         idAPI: location.state.idAPI,
    //         planePricePreference: location.state.planePricePreference,
    //         hotelPreference: location.state.hotelPreference,
    //         carTypePreference:location.state.carType,
    //     })
    //     // setDisplayPlane(res.locals.displayPlanePrice)
    // })
    
    
    
    // useEffect(() => {
    //     fetch('/api', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'Application/JSON',
    //         },
    //         body: JSON.stringify({
    //             destination: location.state.destination,
    //             passengers: location.state.passengers,
    //             budget:location.state.budget,
    //             savings: savings,
    //             idAPI: location.state.idAPI,
    //             planePricePreference: location.state.planePricePreference,
    //             hotelPreference: location.state.hotelPreference,
    //             carTypePreference:location.state.carType,
    //         }),
    //       })
    //         .then((res) => {res.json()})
    //         .then((res) => {
    //             setDisplayPlane(res.locals.displayPlanePrice);
    //             setDisplayHotel(res.locals.displayHotelPrice);
    //             setDisplayCar(res.locals.displayCarPrice);
    //             setDisplaySavings(res.locals.savings);
    //         })
    //         .catch((error) => console.log('ERROR: could not post-fetch: ' + error));
      
    //   }, []);
    const handleCalculate= (e) => {
        console.log("carType handleCalculate", location.state.carTypePreference)
        fetch('/api', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'Application/JSON',
                    },
                    body: JSON.stringify({
                        destination: location.state.destination,
                        passengers: location.state.passengers,
                        budget:location.state.budget,
                        savings: savings,
                        idAPI: location.state.idAPI,
                        planePricePreference: location.state.planePricePreference,
                        hotelPreference: location.state.hotelPreference,
                        carTypePreference:location.state.carTypePreference,
                    }),
                  })
                    .then((res) => {res.json()})
                    .then((res) => { console.log({res})
                        setDisplayPlane(res.displayPlanePrice);
                        setDisplayHotel(res.displayHotelPrice);
                        setDisplayCar(res.displayCarPrice);
                        setDisplaySavings(res.savings);
                    })
                    .catch((error) => console.log('ERROR: could not post-fetch: ' + error));
    }

    
    return (
        <div className = "displayPage">
            <button onClick = {handleCalculate} className = "calculate">CALCULATE</button>
            <div className = "displayPlane">{displayPlane}</div>
            <div className = "displayHotel">{displayHotel}</div>
            <div className = "displayCar">{displayCar}</div>
            <div className = "displaySavings">{displaySavings}</div>
        </div>
    )
}

export default Summary;  