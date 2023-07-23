const express = require('express');
const bookingController = require('../controllers/bookingControllers.js');
const { validate } = require('../middlewares/authValidation.js');

bookingRouter = express.Router();

bookingRouter.get('/',validate, bookingController.getAllBookings);
bookingRouter.post('/',validate, bookingController.createBooking);
bookingRouter.get('/:id',validate, bookingController.getBookingById);
bookingRouter.delete('/:id',validate, bookingController.deleteBooking);
bookingRouter.get('/flight/:id',validate, bookingController.getBookingByFlightId);

module.exports = bookingRouter;