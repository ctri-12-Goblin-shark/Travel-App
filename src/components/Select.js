import React from "react";
import { useState } from "react";
import Datepicker from 'react-datepicker'
//import { DateRangePicker } from 'rsuite'


const Select = () => {
    const [budget, setBudget] = useState("")
    const [destination,setDestination] = useState("")
    const [bags, setBag] = useState("")
    const [travelers, setTravelers] = useState("")
    const [planePrice, setPlanePrice] = useState("")
    const [departureDate, setDepartureDate] = useState("")
    const [returnDate, setReturnDate] = useState("")
    const [pickupDate, setPickup] = useState("")

    const idApi = {
        "ATL": "Atl ID",
        "LAX": "LAX ID",
        "BER": "BER ID",
        "SEA": "SEA ID",
        "BLC": "BLC ID",
        "SIN": "SIN ID",
        "JFK": "JFK ID",
        "ONT": "ONT ID",
    }


const formSubmission = (e) => {
    e.preventDefault();
    setBudget(e.target.value);
    setTravelers(e.target.value);
    //const idNum = idApi.destination
    //console.log(idApi["BLC"])
    const reqObj = {destination,travelers,id: idApi[destination], budget}
    // setApiObj({"destination":{destination},"travelers":"dd"})
    console.log("destination", {destination});
    //console.log("travelers", {travelers});
    //console.log("budget", {budget})
    console.log({reqObj})


    // fetch('/api/plane', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'Application/JSON',
    //     },
    //     body: JSON.stringify({ destination:destination, travelers:travelers, departureDate: departureDate, returnDate:returnDate}),
    //   })
    //     .then((res) => {res.json()})
    //     .then((res) => {
    //         setPlanePrice(res.locals.planePrice)
    //     })
        // .catch((error) => console.log('ERROR: could not post-fetch: ' + error));
    }

    const dateRange = (e) => {
        
        console.log(departureDate)
        console.log(returnDate)
    }

    return (
        <div className = "container-selection">
            
            <form onSubmit={formSubmission}>
                <div> Select Destination
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
            </div>
<div> Enter Number of Travelers
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
            </div>
            <div>Enter Budget
            <input type='number' 
            placeholder='Enter Budget' 
            className='Budget-input'
            value={budget} 
            onChange={e => {
                const budgetAmount = e.target.value
                setBudget(budgetAmount)  
            }}
            />
             </div>
             
            <button className="next">Next</button>
            </form>
            {/* <Datepicker
            
              controls={['calendar']}
              select="range"
              display="inline"
              
              
          />

          
          <div>{departureDate} - {returnDate}</div> */}
        </div>




    )
}

export default Select;