import React, { Component } from 'react';
import Select from './Select';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Plane from './Plane';
import Hotel from './Hotel';
import Car from './Car';
import Summary from './Summary';




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
