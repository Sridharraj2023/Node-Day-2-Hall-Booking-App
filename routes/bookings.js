const express = require('express');
const router = express.router();
const bookingsModel = require('../models/booking.js');
const roomsModel = require('../models/rooms.js');

//Book a room

router.post('/', (req, res)=>{
    res.json({message: "Room booked Successfully"});
});

//List all the customer with booking

router.get('/customers', (req, res)=>{
    res.json(customerWithBookings);
});

//List how many times a customer has booked the room with below details

router.get('/customers/:customerId/bookings', (req, res) => {
    res.json(customerBookings);
});

module.exports = router;






