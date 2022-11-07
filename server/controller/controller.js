const models = require('../models/models');
// import fetch from 'node-fetch';
const fetch = require('cross-fetch');
const controller = {};



// destination, number of people, budget
controller.getPlaneData = (req, res, next) => {
    const {
        destination,
        passengers,
        budget,
        savings,
        idAPI,
        planePricePreference} = req.body;
    res.locals.destination = destination;
    res.locals.passengers = passengers;
    res.locals.budget = budget;
    res.locals.savings = savings;
    res.locals.idAPI = idAPI;
    res.locals.planePricePreference = planePricePreference;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bb4fb94ff1msh97b362efb2e3b6cp11ba3ajsn2104da1b763a',
            'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
        }
    };
    
    fetch(`https://skyscanner44.p.rapidapi.com/search?adults=${res.locals.passengers}&origin=MUC&destination=${res.locals.destination}&departureDate=2022-11-11&returnDate=2022-11-18`, options)
        .then(response => response.json())
        .then(response => {
            res.locals.displayPlanePrice = response.itineraries.buckets[Number(res.locals.planePricePreference)].items[0].price.raw;
            res.locals.savings = res.locals.budget-res.locals.displayPlanePrice;
            return next();
        })
        .catch(err => console.error(err));
}


controller.getHotelData = (req,res,next) => {
    const hotelPreference = req.body.hotelPreference;
    res.locals.hotelPreference = hotelPreference;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bb4fb94ff1msh97b362efb2e3b6cp11ba3ajsn2104da1b763a',
            'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
        }
    };

fetch(`https://skyscanner44.p.rapidapi.com/search-hotel?locationId=${res.locals.idAPI}&adults=${res.locals.passengers}&rooms=${res.locals.passengers}&checkin=2022-11-11&checkout=2022-11-18`, options)
  .then(response => response.json())
  .then(response => {
    if(res.locals.hotelPreference==="high") {
        res.locals.displayHotelPrice = response.hotels[0].rawPrice
    }
    else if(res.locals.hotelPreference==="cheap") {
        res.locals.displayHotelPrice = response.hotels[response.hotels.length-1].rawPrice;
    }
    else {
        res.locals.displayHotelPrice = response.hotels[response.hotels.length/2].rawPrice;
    }
    res.locals.savings-=res.locals.displayHotelPrice;
    return next()
  })
  .catch(err => console.error(err));

}

controller.getCarData = (req,res,next) => {
    const carTypePreference = req.body.carTypePreference;
    res.locals.carTypePreference = carTypePreference;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bb4fb94ff1msh97b362efb2e3b6cp11ba3ajsn2104da1b763a',
            'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
        }
    };

fetch(`https://skyscanner44.p.rapidapi.com/search-rentacar?pickupId=${res.locals.idAPI}&pickupDate=2022-11-11&pickupTime=10%3A00&returnDate=2022-11-18&returnTime=10%3A00`, options)
    .then(response => response.json())
    .then(response => {
        for(let i = 0;i<response.quotes.length;i++) {
            if(response.quotes[i].car_name.split(" ")[0]===res.locals.carTypePreference) {
                res.locals.displayCarPrice = Math.floor(response.quotes[i].price)
                res.locals.savings-=res.locals.displayCarPrice;
                return next()
            }
        }
    })
    .catch(err => console.error(err));
    

}




module.exports = controller;


