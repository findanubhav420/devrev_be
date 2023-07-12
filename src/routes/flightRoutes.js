const express = require('express');
const flightController = require('../controllers/flightControllers.js');

flightRouter = express.Router();

flightRouter.get('/', flightController.getAllFlights);
flightRouter.post('/', flightController.createFlight);
flightRouter.delete('/:id', flightController.deleteFlightById);

module.exports = flightRouter;