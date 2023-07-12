const flightRouter=require('express').Router();
const flightController=require('../controllers/flightControllers.js');

flightRouter.get('/', flightController.getAllFlights);
flightRouter.post('/', flightController.createFlight);
flightRouter.delete('/:id', flightController.deleteFlightById);

module.exports=flightRouter;