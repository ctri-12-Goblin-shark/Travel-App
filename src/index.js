import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('root'));