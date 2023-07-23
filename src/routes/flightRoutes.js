const express = require('express');
const flightController = require('../controllers/flightControllers.js');

flightRouter = express.Router();

flightRouter.get('/', flightController.getAllFlights);
flightRouter.get('/:id', flightController.getFlightById);
flightRouter.post('/', flightController.createFlight);
flightRouter.delete('/:id', flightController.deleteFlightById);

module.exports = flightRouter;