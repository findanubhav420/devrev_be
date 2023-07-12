const {bookings, flights} = require('../../database/models/index');
const { v4: uuidv4 } = require('uuid');
const getAllBookings = async () => {
    return await bookings.findAll();
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
          flightId: data.flightId,
          email: data.email,
          name: data.name,
          age: data.age,
          phoneNo: data.phoneNo,
          seat: seat,
    });  
    return newBooking;  
}

module.exports = {
    getAllBookings,
    createBooking
}
