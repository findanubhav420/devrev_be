const { Op, or } = require('sequelize');
const {flights, bookings} = require('../../database/models/index');

const getAllFlights = async () => {
    return await flights.findAll({
        where: {
            seat: {
                [Op.gt]: 0
            }
        },
        order: [
            ['departureTime', 'ASC']
        ]
    });
}

const getFlightById = async (id) => {
    return await flights.findOne({
        where: {
            flightId: id
        }
    });
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
    await bookings.destroy({
        where: {
            flightId: id
        }
    });
    const flight = await flights.findOne({
        where: {
            flightId: id
        }
    });
    await flights.destroy({
        where: {
            flightId: id
        }
    });


    return flight;
}

module.exports = {
    getAllFlights,
    getFlightById,
    createFlight,
    deleteFlightById
}
