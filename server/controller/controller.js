const models = require('../models/models');
// import fetch from 'node-fetch';
const fetch = require('cross-fetch');
const controller = {};



// destination, number of people, budget
controller.getPlaneData = (req, res, next) => {
    const { destination, passengers , departureDate,returnDate } = req.body;
    // const sample = {hello: 'hi'};
    // res.locals.planeData = sample;
    // return next();
//     const fetch = require('node-fetch');

    //const url = `https://skyscanner44.p.rapidapi.com/search?adults=${passengers}&origin=SEA&destination=${destination}&departureDate=${departureDate}&currency=USD&returnDate=${returnDate}`;

// search best flight, search hotel rooms, search rental cars


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bb4fb94ff1msh97b362efb2e3b6cp11ba3ajsn2104da1b763a',
            'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
        }
    };
    
    fetch('https://skyscanner44.p.rapidapi.com/search?adults=1&origin=MUC&destination=BER&departureDate=2022-12-12&currency=EUR', options)
        .then(response => response.json())
        .then(response => {
          // console.log(response)
          const price = response.itineraries.buckets[0].items[0].price.raw;
          console.log(price);
          response.itineraries.buckets.forEach(ele => {
            console.log('ele', ele)
            console.log(ele.name)
            if (ele.name === 'Best'){
                    console.log("2")
                    console.log('in condition')
                   res.locals.planeData = ele.items[0].price.raw
                }
                // for (let key in ele) {
                //     console.log({key})
                //     console.log(key.name)
                //     console.log(ele[key])
                    // if (key === 'Best') {
                    //     console.log("2", {key})
                    //     console.log('in condition')
                    //    res.locals.planeData = ele[key].items[0].price.raw
                    // }
                
             }) 
          res.sendStatus(res.locals.planeData)})
        .catch(err => console.error(err));
        
         //console.log(arrays)
        //  results.itineraries.buckets.forEach(ele => {
        //     for (let key in ele) {
        //         if (key.name === 'best') {
        //            // res.locals.planeData = .items[0].price.raw
        //         }
        //     }
        //  }) 
         // return next()
        //  for (let element in arrays){
        //     if (element.items[0].id === 'Best') {
        //         res.locals.planeData = element.items[0].price.raw
        //     }
        //  }
         //const price = results.itineraries.buckets[0].items[0].price.raw
         //console.log(firstBucket)
        
        // return next()
        }//)


//   const result = async dataSync () => {

//     const obj = await fetchApi(url)
//     .then(data => { 
//     res.locals.obj = data;
//     console.log(data);
//     return data});
// return next();
//  }  

//  const obj = await fetchApi(url)
//   .then(data => { 
//     res.locals.obj = data;
//     console.log(data);
//     return data});
// return next();


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


// post request: 