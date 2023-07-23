const express = require('express');
const flightController = require('../controllers/flightControllers.js');
const {validate} = require('../middlewares/authValidation.js');

flightRouter = express.Router();

flightRouter.get('/',validate, flightController.getAllFlights);
flightRouter.get('/:id',validate, flightController.getFlightById);
flightRouter.post('/',validate, flightController.createFlight);
flightRouter.delete('/:id',validate, flightController.deleteFlightById);

module.exports = flightRouter;