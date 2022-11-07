const express = require('express');
const controller = require('../controller/controller.js');
const router = express.Router();

// controller.getHotelData, controller.getCarData

//one route for the whole request with three middleware functions to the three apis
router.get('/plane', controller.getPlaneData, (req,res) => {
    return res.status(200).json(res.locals.planeData)
})
// router.get('/plane', (req, res) =>{
//     return res.send('hello')
// })
// router.post('/hotel', controller.getHotelData, (req,res) => {

// })

// router.post('/car', controller.getCarData, (req,res) => {
    
// })

module.exports = router;