const flightService = require('../services/flightService');

const getAllFlights = async (req, res) => {
    try {
        const flights = await flightService.getAllFlights();
        res.status(200).json(flights);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getFlightById = async (req, res) => {
    try {
        const flight = await flightService.getFlightById(req.params.id);
        res.status(200).json(flight);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createFlight = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        res.status(201).json(flight);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteFlightById = async (req, res) => {
    try {
        const flight = await flightService.deleteFlightById(req.params.id);
        res.status(200).json(flight);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllFlights,
    getFlightById,
    createFlight,
    deleteFlightById
};