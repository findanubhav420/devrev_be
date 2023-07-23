const express = require('express');
const bookingController = require('../controllers/bookingControllers.js');

bookingRouter = express.Router();

bookingRouter.get('/', bookingController.getAllBookings);
bookingRouter.post('/', bookingController.createBooking);
bookingRouter.get('/:id', bookingController.getBookingById);
bookingRouter.delete('/:id', bookingController.deleteBooking);
bookingRouter.get('/flight/:id', bookingController.getBookingByFlightId);

module.exports = bookingRouter;