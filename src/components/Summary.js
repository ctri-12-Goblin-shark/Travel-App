import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from "react";

const Summary = () => {
    const [budget, setBudget] = useState("")
    const [destination,setDestination] = useState("")
    const [bags, setBag] = useState("")
    const [travelers, setTravelers] = useState("")
    const [pickupDate, setPickup] = useState("")
    const [planePrice, setPlanePrice] = useState("")
    const [departureDate, setDepartureDate] = useState("")
    const [arrivalDate, setArrivalDate] = useState("")



    


// const formSubmission = (e) => {
//     e.preventDefault();
    
//     fetch('/api/plane', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'Application/JSON',
//         },
//         body: JSON.stringify({ destination:destination, travelers:travelers, departureDate: departureDate, arrivalDate:arrivalDate}),
//       })
//         .then((res) => {res.json()})
//         .then((res) => {
//             setPlanePrice(res.locals.planePrice)
//         })
//         .catch((error) => console.log('ERROR: could not post-fetch: ' + error));
//     }

    return (
        <div className = "summary">
            <h1>Trip Summary</h1>
            <div className = "planeDisplay">
                $2000
            </div>
            <div className = "hotelDisplay">
                $1000
            </div>
            <div className = "carDisplay">
                $2000
            </div>
        </div>




    )
}

export default Select;