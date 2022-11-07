const models = require('../models/models');
// import fetch from 'node-fetch';
const fetch = require('cross-fetch');
const controller = {};



// middleware to get plane ticket price
controller.getPlaneData = (req, res, next) => {
//deconstruct request body to pass to api call
  const {
    destination,
    passengers,
    budget,
    savings,
    idAPI,
    planePricePreference} = req.body;
  //populate response object
  res.locals.destination = destination;
  res.locals.passengers = passengers;
  res.locals.budget = budget;
  res.locals.savings = savings;
  res.locals.idAPI = idAPI;
  res.locals.planePricePreference = planePricePreference;
        
  //create headers for api call
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bb4fb94ff1msh97b362efb2e3b6cp11ba3ajsn2104da1b763a',
      'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
    }
  };
    //api call for plane ticket prices
  fetch(`https://skyscanner44.p.rapidapi.com/search?adults=${res.locals.passengers}&origin=MUC&destination=${res.locals.destination}&departureDate=2022-11-11&returnDate=2022-11-18`, options)
    .then(response => response.json())
    .then(response => {
      res.locals.displayPlanePrice = response.itineraries.buckets[Number(res.locals.planePricePreference)].items[0].price.raw;
      res.locals.savings = res.locals.budget-res.locals.displayPlanePrice;
      return next();
    })
    .catch(err => console.error(err));
};

//middleware to get hotel price
controller.getHotelData = (req,res,next) => {
  const hotelPreference = req.body.hotelPreference;
  res.locals.hotelPreference = hotelPreference;
  //api call headers
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bb4fb94ff1msh97b362efb2e3b6cp11ba3ajsn2104da1b763a',
      'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
    }
  };
  //api call for hotel price
  fetch(`https://skyscanner44.p.rapidapi.com/search-hotel?locationId=${res.locals.idAPI}&adults=${res.locals.passengers}&rooms=${res.locals.passengers}&checkin=2022-11-11&checkout=2022-11-18`, options)
    .then(response => response.json())
    .then(response => {
      res.locals.displayHotelPrice = response.hotels[0].rawPrice;
      res.locals.savings -= res.locals.displayHotelPrice;
      return next();
    })
    .catch(err => console.error(err));
};

//middleware to get car data
controller.getCarData = (req,res,next) => {
  const carTypePreference = req.body.carTypePreference;
  res.locals.carTypePreference = carTypePreference;
  
  //api headers
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bb4fb94ff1msh97b362efb2e3b6cp11ba3ajsn2104da1b763a',
      'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
    }
  };

  //api call for car rental price
  fetch(`https://skyscanner44.p.rapidapi.com/search-rentacar?pickupId=${res.locals.idAPI}&pickupDate=2022-11-11&pickupTime=10%3A00&returnDate=2022-11-18&returnTime=10%3A00`, options)
    .then(response => response.json())
    .then(response => {
      for(let i = 0; i < 300; i++) {
        if(response.quotes[i].car_name.split(" ")[0]===res.locals.carTypePreference) {
          res.locals.displayCarPrice = Math.floor(response.quotes[i].price);
          res.locals.savings-=res.locals.displayCarPrice;
          return next();
        }
      }
      return next();
    })
    .catch(err => console.error(err));
    

}

module.exports = controller;


