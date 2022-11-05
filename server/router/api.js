const express = require('express');
const controller = require('../controller/controller.js');
const router = express.Router();

router.post('/plane', controller.getPlaneData, (req,res) => {

})

router.post('/hotel', controller.getHotelData, (req,res) => {

})

router.post('/car', controller.getCarData, (req,res) => {
    
})

module.exports = router;