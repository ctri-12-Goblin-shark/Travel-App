import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import Select from './Select';
import Axios from "axios";

const Summary = () => {
  const[displayPlane,setDisplayPlane] = useState('');
  const[displayHotel, setDisplayHotel] = useState('');
  const[displayCar, setDisplayCar] = useState('');
  const[displaySavings, setDisplaySavings] = useState('');
  const location = useLocation();
  const savings = location.state.budget;

//   console.log('destination: ', location.state.destination);
//   console.log('budget: ',location.state.budget);
//   console.log('location: ',location.state.passengers);
//   console.log('idAPI: ',location.state.idAPI);
//   console.log('planePreference: ',location.state.planePricePreference);
//   console.log('hotelPreference: ',location.state.hotelPreference);
//   console.log('cartype: ',location.state.carTypePreference);
//   console.log('savings',savings);

  const handleCalculate= (e) => {
    console.log("carType handleCalculate", location.state.carTypePreference);
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
    .then(response => response.json())
    .then((response) => {
        //   console.log("res:", response);
          setDisplayPlane(response.displayPlanePrice);
          setDisplayHotel(response.displayHotelPrice);
          setDisplayCar(response.displayCarPrice);
          setDisplaySavings(response.savings);
        //   console.log("plane display", displayPlane);
        })
                        
    .catch((error) => console.log('ERROR: could not post-fetch: ' + error));
  };

    
  return (
    <>
    <div id = "display-table">
    <button onClick = {handleCalculate} className = "calculate">CALCULATE</button>
    
    <div className = "table-display">
       <tr>
            <th> Plane Cost </th>
            <th> Hotel Cost </th>
            <th> Car Cost </th>
            <th> Savings </th>
        </tr>
        <tr> 
            <th> {displayPlane} </th>
            <th> {displayHotel} </th>
            <th>  {displayCar} </th>
            <th> {displaySavings}</th>
        </tr>

    </div>
    </div>
    </>
  );
};

export default Summary;  


{/* <tbody>
<tr>
    <th>User Id</th>
    <th>Id</th>
    <th>Title</th>
    <th>Description</th>
</tr>
{data.map((item, i) => (
    <tr key={i}>
        <td>{item.userId}</td>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.body}</td>
    </tr>
))}
</tbody> */}

/* <div className = "displayPage">
      <button onClick = {handleCalculate} className = "calculate">CALCULATE</button>
      <div className = "displayPlane">Plane Cost: {displayPlane}</div>
      <div className = "displayHotel"> Hotel Cost: {displayHotel}</div>
      <div className = "displayCar"> Car Cost: {displayCar}</div>
      <div className = "displaySavings"> Savings: {displaySavings}</div>
    </div> */

    //   console.log("hotel display", displayHotel);
        //   console.log("car display", displayCar);
        //   console.log("save display", displaySavings);