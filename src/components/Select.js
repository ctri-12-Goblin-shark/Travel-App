import React from "react";
import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Plane from "./Plane.js";
import {dateParse} from '../dateParser.js'
//import { DateRangePicker } from 'rsuite'
import 'react-datepicker/dist/react-datepicker.css';
import ATL from '../img/ATL.png';
import BALI from '../img/Bali.png';
import BER from '../img/BER.png';
import LAX from '../img/LAX.png';
import NYC from '../img/NYC.png';
import PAR from '../img/PAR.png';
import SEA from '../img/SEA.png';
import SIN from '../img/SIN.png';

const Select = () => {
  const [budget, setBudget] = useState('');
  const [destination,setDestination] = useState('');
  const [passengers, setPassengers] = useState('');
  // const [departureDate, setDepartureDate] = useState("");
  // const [returnDate, setReturnDate] = useState("");
  const [idAPI, setIdAPI] = useState('');

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
    e.target.style.backgroundColor = '#78F8A1';
    e.target.style.color = "black";
    const destinationSelect = e.target.getAttribute('data-value');
    setDestination(destinationSelect);
    setIdAPI(idAPIobj[destinationSelect])

  };
  const handlePassengers = (e) => {
    e.target.style.backgroundColor = '#78F8A1';
    e.target.style.color = "black";
    const passengerSelect = e.target.getAttribute('data-value');
   // console.log(e.target.getAttribute('data-value'));
    setPassengers(passengerSelect);
  };

  return (
    <div className = "initialSelect">
      <h1>Welcome to <span>PURPLE</span> traveler!</h1>
      <p className = "instruction">Input Budget</p>
      <input onChange={(event) => setBudget(event.target.value)} className = "budget"></input>
      <div id="destination-instruction-div">
        <p className = "instruction">Select a Destination</p>
      </div>
      <div className = "destinationSelect">
        <div onClick = {handleDestination} data-value= "ATL" className = "destination"><img className="city-logo" src={ATL}></img><p className="city-name">Atlanta</p></div>
        <div onClick = {handleDestination} data-value= "LAX" className = "destination"><img className="city-logo" src={LAX}></img><p className="city-name">Los Angeles</p></div>
        <div onClick = {handleDestination} data-value = "BER" className = "destination"><img className="city-logo" src={BER}></img><p className="city-name">Berlin</p></div>
        <div onClick = {handleDestination} data-value = "SEA" className = "destination"><img className="city-logo" src={SEA}></img><p className="city-name">Seattle</p></div>
        <div onClick = {handleDestination} data-value = "CDG" className = "destination"><img className="city-logo" src={PAR}></img><p className="city-name">Paris</p></div>
        <div onClick = {handleDestination} data-value = "SIN" className = "destination"><img className="city-logo" src={SIN}></img><p className="city-name">Singapore</p></div>
        <div onClick = {handleDestination} data-value = "JFK" className = "destination"><img className="city-logo" src={NYC}></img><p className="city-name">New York City</p></div>
        <div onClick = {handleDestination} data-value = "DPS" className = "destination"><img className="city-logo" src={BALI}></img><p className="city-name">Bali</p></div>
      </div>
      <div id="instruction-div">
        <p className = "instruction">Select # of Travelers</p>
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
      </div>
    <div className = "nextContainer">
      <Link
       to = "/plane"
       state = {{
        destination: destination,
        passengers: passengers,
        budget: budget,
        idAPI: idAPI
       }}
       >
      <button className="next">NEXT</button>
      </Link>
      </div>
    </div>

  );
};

export default Select;






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
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'bb4fb94ff1msh97b362efb2e3b6cp11ba3ajsn2104da1b763a',
//     'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
//   }
// };
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
  