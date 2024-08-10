# Hall Booking Application

This is a simple Node.js application for managing room bookings. The application allows you to create rooms, book them, and view booking details for each room and customer.

## Features

- **Create Rooms:** Define rooms with specific attributes like the number of seats, amenities, and price per hour.
- **Book Rooms:** Customers can book rooms for specific dates and times.
- **View Room Status:** List all rooms with their booking status and details.
- **Customer Booking Details:** View all bookings made by a specific customer.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **body-parser**: Middleware to parse incoming request bodies.

The server will run on http://localhost:3000.

## API Endpoints
**Create a Room**
URL: /rooms
Method: POST
Description: Create a new room with specific attributes.
Body Parameters:
numberOfSeats (Number): The number of seats in the room.
amenities (Array): A list of amenities available in the room.
pricePerHour (Number): The price per hour to book the room.
Response:
Returns the details of the newly created room.

**Book a Room**
URL: /bookings
Method: POST
Description: Book a room for a specific date and time.
Body Parameters:
customerName (String): Name of the customer.
date (String): Date of the booking (format: YYYY-MM-DD).
startTime (String): Start time of the booking (format: HH:MM).
endTime (String): End time of the booking (format: HH:MM).
roomId (Number): ID of the room to be booked.
Response:
Returns the details of the booking.

**List All Rooms with Booking Data**
URL: /rooms
Method: GET
Description: Get a list of all rooms along with their booking status and details.
Response:
Returns a list of rooms with their booking details.

**List All Customers with Booking Data**
URL: /customers
Method: GET
Description: Get a list of all customers along with their booking details.
Response:
Returns a list of customers with their booking details.

**List Bookings for a Specific Customer**
URL: /customers/:customerName
Method: GET
Description: Get a list of all bookings made by a specific customer.
URL Parameter:
customerName (String): Name of the customer whose bookings are to be retrieved.
Response:
Returns a list of bookings made by the customer.
