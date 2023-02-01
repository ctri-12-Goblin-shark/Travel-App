import React, { Component } from 'react';
import Select from './Select.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Plane from './Plane.js';
import Hotel from './Hotel.js';
import Car from './Car.js';
import Summary from './Summary.js';
import { useState } from 'react';
const App = () => {
  return (
    <Routes>
      {/* paths do not exist in the backend, purely a filter for react; not http request*/}
      <Route path = "/" element = {<Select/>}/>
      <Route path = "/plane" element = {<Plane/>}/>
      <Route path = "/hotel" element = {<Hotel/>}/>
      <Route path = "/car" element = {<Car/>}/>
      <Route path = "/summary" element = {<Summary/>}/>
    </Routes>
  )
}


export default App; 
