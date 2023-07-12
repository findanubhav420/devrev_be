const bookingRouter = require('express').Router();
const bookingController = require('../controllers/bookingControllers.js');

bookingRouter.get('/', bookingController.getAllBookings);
bookingRouter.post('/', bookingController.createBooking);

module.exports = bookingRouter;