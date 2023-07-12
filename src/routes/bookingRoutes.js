const express = require('express');
const bookingController = require('../controllers/bookingControllers.js');

bookingRouter = express.Router();

bookingRouter.get('/', bookingController.getAllBookings);
bookingRouter.post('/', bookingController.createBooking);

module.exports = bookingRouter;