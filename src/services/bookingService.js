const {bookings, flights} = require('../../database/models/index');
const { v4: uuidv4 } = require('uuid');
const getAllBookings = async () => {
    return await bookings.findAll({
        order: [
            ['departureTime', 'ASC']
        ]
    });
}

const createBooking = async (data) => {
    const flightData = await flights.findOne({
        where: {
            flightId: data.flightId
        }
    });
    const row=Math.floor((60-flightData.seat)/6)+1;
    const col=(60-flightData.seat)%6;
    const seatLetter = ['A','B','C','D','E','F'];
    const seat = row+seatLetter[col];

    if(flightData.seat > 0){
        flightData.seat = flightData.seat - 1;
        await flightData.save();
    }
    const newBooking = await bookings.create({
          bookingId: uuidv4(),
          userId: data.userId,
          flightId: data.flightId,
          email: data.email,
          name: data.name,
          age: data.age,
          phoneNo: data.phoneNo,
          seat: seat,
    });  
    return newBooking;  
}

const deleteBooking = async (id) => {
    const booking = await bookings.findOne({
        where: {
            bookingId: id
        }
    });
    const flightData = await flights.findOne({
        where: {
            flightId: booking.flightId
        }
    });
    flightData.seat = flightData.seat + 1;
    await flightData.save();
    await bookings.destroy({
        where: {
            bookingId: id
        }
    });
    return booking;
}

const getBookingById = async (id) => {
   const allBookings = await bookings.findAll({
        where: {
            userId: id
        }
    });

    const flightDaata = await flights.findAll();

    const bookingData = allBookings.map((booking) => {
        const flight = flightDaata.find((flight) => flight.flightId === booking.flightId);
        return {
            bookingId: booking.bookingId,
            userId: booking.userId,
            flightId: booking.flightId,
            email: booking.email,
            name: booking.name,
            age: booking.age,
            phoneNo: booking.phoneNo,
            seat: booking.seat,
            companyName: flight.companyName,
            source: flight.source,
            destination: flight.destination,
            departureTime: flight.departureTime,
            arrivalTime: flight.arrivalTime,
            price: flight.price
        }
    }
    );

    return bookingData;
}

const getBookingByFlightId = async (id) => {
    const allBookings = await bookings.findAll({
            where: {
                flightId: id
            }
        });
    return allBookings;
}

module.exports = {
    getAllBookings,
    createBooking,
    getBookingByFlightId,
    getBookingById,
    deleteBooking
}
