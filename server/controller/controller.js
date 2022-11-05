const models = require('../models/models');

const controller = {};




controller.getPlaneData = (req,res,next) => {

}
controller.getHotelData = (req,res,next) => {
    
}
controller.getCarData = (req,res,next) => {
    
}
// trip api
// API URL: 'https://skyscanner44.p.rapidapi.com/search-hotel?locationId=95673383&adults=1&rooms=1&checkin=2022-11-05&checkout=2022-11-11&currency=EUR'


// rental car API
// fetch(`http://skyscanner44.p.rapidapi.com/search-rentacar?pickupId=95673383&pickupDate=${pickupDate}&pickupTime=${pickupTime}&returnDate=${returnDate}2022-11-11&returnTime=${retTime}&currency=EUR`, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));



// controller.getTripData = (req, res, next) => {
//     const { destination, pickupDate, departureDate, retTime } = req.body

// }




module.exports = controller;
