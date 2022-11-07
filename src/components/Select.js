import React from "react";
import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Plane from "./Plane.js";
import {dateParse} from '../dateParser.js'
//import { DateRangePicker } from 'rsuite'
import 'react-datepicker/dist/react-datepicker.css';

const Select = () => {
  const [budget, setBudget] = useState();
  const [destination,setDestination] = useState("");
  const [passengers, setPassengers] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [idAPI, setIdAPI] = useState();



  let parisID = 95565041;
  let singaporeID = 95673375;
  let nycID = 95565058;
  let laID = 95673368;
  let seaID = 95673694;
  let atlID = 95673800;
  let baliID = 95673809;
  let berlinID = 95673383;

  const idAPIobj = {
    "ATL": atlID,
    "LAX": laID,
    "BER": berlinID,
    "CDG": parisID,
    "SIN": singaporeID,
    "JFK": nycID,
    "DPS": baliID,
    "SEA": seaID
  };
 



  const handleDestination = (e) => {
    const destinationSelect = e.target.getAttribute('data-value');
    setDestination(destinationSelect);
    setIdAPI(idAPIobj[destinationSelect])

  };
  const handlePassengers = (e) => {
    const passengerSelect = e.target.getAttribute('data-value');
    console.log(e.target.getAttribute('data-value'));
    setPassengers(passengerSelect);
  };



  //date stuff
  // const handleDepartureDate = (date) => {
  //   console.log(dateParse(date.toString()));
  //   // const departure = 
  // }
  // const handleReturnDate = (date) => {
  //   console.log(dateParse(date.toString()))
  //   // const returnDate = e.target.get;
  // }

//   const Example = () => {
//     const [startDate, setStartDate] = useState(new Date());
//     return (
//       <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
//     );
//   };





//api options object
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bb4fb94ff1msh97b362efb2e3b6cp11ba3ajsn2104da1b763a',
    'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
  }
};

//fetch airport
// fetch request for best flight plane
// fetch('https://skyscanner44.p.rapidapi.com/search?adults=1&origin=MUC&destination=SIN&departureDate=2022-11-11&returnDate=2022-11-18', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));



//query id info from api
  // fetch('https://skyscanner44.p.rapidapi.com/autocomplete-rentacar?query=berlin', options)
	// .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));

//fetch hotel
// fetch(`https://skyscanner44.p.rapidapi.com/search-hotel?locationId=${baliID}&adults=1&rooms=1&checkin=2022-11-11&checkout=2022-11-18`, options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


//fetch car
// fetch(`https://skyscanner44.p.rapidapi.com/search-rentacar?pickupId=${baliID}&pickupDate=2022-11-11&pickupTime=10%3A00&returnDate=2022-11-18&returnTime=10%3A00`, options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
  





  return (
    <div className = "initialSelect">
      <input onChange={(event) => setBudget(event.target.value)} className = "budget"></input>
      <div className = "destinationSelect">
        <div onClick = {handleDestination} data-value= "ATL" className = "destination">Atlanta</div>
        <div onClick = {handleDestination} data-value= "LAX" className = "destination">Los Angeles</div>
        <div onClick = {handleDestination} data-value = "BER" className = "destination">Berlin</div>
        <div onClick = {handleDestination} data-value = "SEA" className = "destination">Seattle</div>
        <div onClick = {handleDestination} data-value = "CDG" className = "destination">Paris</div>
        <div onClick = {handleDestination} data-value = "SIN" className = "destination">Singapore</div>
        <div onClick = {handleDestination} data-value = "JFK" className = "destination">New York City</div>
        <div onClick = {handleDestination} data-value = "DPS" className = "destination">Bali</div>
      </div>

      <div className = "passengerSelect">
        <div onClick = {handlePassengers} data-value = "1" className = "passengers">1</div>
        <div onClick = {handlePassengers} data-value = "2" className = "passengers">2</div>
        <div onClick = {handlePassengers} data-value = "3" className = "passengers">3</div>
        <div onClick = {handlePassengers} data-value = "4" className = "passengers">4</div>
        <div onClick = {handlePassengers} data-value = "5" className = "passengers">5</div>
        <div onClick = {handlePassengers} data-value = "6" className = "passengers">6</div>
        <div onClick = {handlePassengers} data-value = "7" className = "passengers">7</div>
        <div onClick = {handlePassengers} data-value = "8" className = "passengers">8</div>
        <div onClick = {handlePassengers} data-value = "9" className = "passengers">9</div>
      </div>

    {/* <div id="departure-date-picker" className="datePicker">
        <h4>Select Departure Date</h4>
        <DatePicker className="date" selected = {departureDate} onChange={(date) => {setDepartureDate(date); handleDepartureDate}} />
    </div>

    <div id="return-date-picker" className="datePicker">
        <h4> Select Return Date </h4>
        <DatePicker selected = {returnDate} onChange={(date) => {setReturnDate(date); handleReturnDate}} />
    </div> */}
{/* 
    <div>
        <DatePicker selected={returnDate} onChange={(date) => setReturnDate(date)} />
    </div> */}

      <Link
       to = "/plane"
       state = {{
        destination: destination,
        passengers: passengers,
        budget: budget,
        idAPI: idAPI
       }}
       >
      <button className="next">Next</button>
      </Link>
    </div>

  );
};

export default Select;