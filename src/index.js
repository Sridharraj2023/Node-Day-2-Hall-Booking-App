const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let rooms = [];
let bookings = [];

app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}`);

});

//Create a room

app.post('/rooms', (req, res)=> {

    const {numberOfSeats, amenities, pricePerHour} = req.body;

    const newRoom = {
        id :rooms.length + 1,
        numberOfSeats,
        amenities,
        pricePerHour,

        bookings: []

    };

    rooms.push(newRoom);
});

//Book a room

app.post('/bookings', (req, res)=>{

    const {customerName, date, startTime, endTime, roomId} = req.body;
    const room = rooms.find(room => room.id === roomId);

    if (!room) {
        return res.status(404).json({error: 'Room not found'});
    }

    const isBooked = room.bookings.some(booking => booking.date === date && ((startTime >= booking.startTime < booking.endTime) || 
    (endTime > booking.startTime && endTime <= booking.endTime))
);

if (isBooked) {

    res.status(400).json({error: "Room is already booked for the selected time"})
}

const newBooking = {
    id: bookings.length + 1,
    customerName,
    date,
    startTime,
    endTime,
    roomId,
};

room.bookings.push(newBooking);
bookings.push(newBooking);
res.status(201).json(newBooking);

//List all rooms with booked data

app.get('/rooms', (req, res) => {

    const result = rooms.map(room => ({

        roomName: `Room ${room.id}`,
        bookedStatus: room.bookings.length > 0,
        bookings: room.bookings,


    }));

    res.json(result);

});

//List all customers with booked data

app.get('/customers', (req, res) => {

    const customers = bookings.map(booking => ({
        customerName: booking.customerName,
        roomName: `Room ${booking.roomId}`,
        date: booking.date,
        startTime: booking.startTime,
        endTime: booking.endTime,
    }));

    res.json(customers);
});

//List how many times a customer has booked the room:

app.get('customers/:customerName', (req, res) => {

    const {customerName} = req.params;
    const customerBookings = bookings.map(booking => booking.customerName === customerName);

    const result = customerBookings.map(booking => ({
        customerName: booking.customerName,
        roomName: `Room ${booking.roomId}`,
        date: booking.date,
        startTime: booking.startTime,
        endTime: booking.endTime,
        bookingId: booking.id,
        bookingDate: booking.date,
        bookingStatus: "Booked"
    }));

    res.json(result);

})



});



