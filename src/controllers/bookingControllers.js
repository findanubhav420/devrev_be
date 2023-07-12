const bookingService = require('../services/bookingService');

const getAllBookings = async (req, res) => {
    try {
        const bookings = await bookingService.getAllBookings();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createBooking = async (req, res) => {
    try {
        const booking = await bookingService.createBooking(req.body);
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllBookings,
    createBooking
}