const {flights} = require('../../database/models/index');

const getAllFlights = async () => {
    return await flights.findAll();
}

const createFlight = async (data) => {
   const newFlight = await flights.create({
        flightId: data.flightId,
        companyName: data.companyName,
        source: data.source,
        destination: data.destination,
        departureTime: data.departureTime,
        arrivalTime: data.arrivalTime,
        seat: 60,
        price: data.price,
   });    
    return newFlight;
}

const deleteFlightById = async (id) => {
    const flight = await flights.findOne({
        where: {
            flightId: id
        }
    });
    flight.destroy();
    return flight;
}

module.exports = {
    getAllFlights,
    createFlight,
    deleteFlightById
}
