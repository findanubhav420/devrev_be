const flightControllers = require('../../src/controllers/flightControllers.js');
const flightService = require('../../src/services/flightService.js');

jest.mock('../../src/services/flightService.js');

describe('flightControllers', () => {
    let req;
    let res;

    beforeEach(() => {
        req = {};
        res = {
            status: jest.fn(() => res),
            json: jest.fn(),
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getAllFlights', () => {
        test('should call res.status with 200 and all flights', async () => {
            const flights = [
                {
                    id: 1,
                    flight_number: 1,
                    airline: 'Delta',
                    origin: 'JFK',
                    destination: 'LAX',
                    departure_date: '2021-06-30T23:00:00.000Z',
                    departure_time: '2021-06-30T23:00:00.000Z',
                    arrival_date: '2021-06-30T23:00:00.000Z',
                    arrival_time: '2021-06-30T23:00:00.000Z',
                    createdAt: '2021-06-30T23:00:00.000Z',
                    updatedAt: '2021-06-30T23:00:00.000Z',
                },
                {
                    id: 2,
                    flight_number: 2,
                    airline: 'Delta',
                    origin: 'JFK',
                    destination: 'LAX',
                    departure_date: '2021-06-30T23:00:00.000Z',
                    departure_time: '2021-06-30T23:00:00.000Z',
                    arrival_date: '2021-06-30T23:00:00.000Z',
                    arrival_time: '2021-06-30T23:00:00.000Z',
                    createdAt: '2021-06-30T23:00:00.000Z',
                    updatedAt: '2021-06-30T23:00:00.000Z',
                },
            ];

            flightService.getAllFlights.mockResolvedValue(flights);

            await flightControllers.getAllFlights(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(flights);
        });

        test('should call res.status with 500 and an error message', async () => {
            const error = new Error("Cannot read property 'id' of undefined");
            flightService.getAllFlights.mockRejectedValue(error);

            await flightControllers.getAllFlights(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: error.message });
        });
    });

    describe('getFlightById', () => {
        test('should call res.status with 200 and a flight', async () => {
            const flight = {
                id: 1,
                flight_number: 1,
                airline: 'Delta',
                origin: 'JFK',
                destination: 'LAX',
                departure_date: '2021-06-30T23:00:00.000Z',
                departure_time: '2021-06-30T23:00:00.000Z',
                arrival_date: '2021-06-30T23:00:00.000Z',
                arrival_time: '2021-06-30T23:00:00.000Z',
                createdAt: '2021-06-30T23:00:00.000Z',
                updatedAt: '2021-06-30T23:00:00.000Z',
            };

            flightService.getFlightById.mockResolvedValue(flight);

            req.params = { id: 1 };

            await flightControllers.getFlightById(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(flight);
        });

        test('should call res.status with 500 and an error message', async () => {
            const error = new Error("Cannot read property 'id' of undefined");
            flightService.getFlightById.mockRejectedValue(error);

            await flightControllers.getFlightById(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: error.message });
        });
    });

    describe('createFlight', () => {
        test('should call res.status with 201 and a flight', async () => {
            const flight = {
                id: 1,
                flight_number: 1,
                airline: 'Delta',
                origin: 'JFK',
                destination: 'LAX',
                departure_date: '2021-06-30T23:00:00.000Z',
                departure_time: '2021-06-30T23:00:00.000Z',
                arrival_date: '2021-06-30T23:00:00.000Z',
                arrival_time: '2021-06-30T23:00:00.000Z',
                createdAt: '2021-06-30T23:00:00.000Z',
                updatedAt: '2021-06-30T23:00:00.000Z',
            };

            flightService.createFlight.mockResolvedValue(flight);

            req.body = {
                flight_number: 1,
                airline: 'Delta',
                origin: 'JFK',
                destination: 'LAX',
                departure_date: '2021-06-30T23:00:00.000Z',
                departure_time: '2021-06-30T23:00:00.000Z',
                arrival_date: '2021-06-30T23:00:00.000Z',
                arrival_time: '2021-06-30T23:00:00.000Z',
            };

            await flightControllers.createFlight(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(flight);
        });

        test('should call res.status with 500 and an error message', async () => {
            const error = new Error("Cannot read property 'id' of undefined");
            flightService.createFlight.mockRejectedValue(error);

            await flightControllers.createFlight(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: error.message });
        });
    });

    describe('deleteFlightById', () => {
        test('should call res.status with 200 and a flight', async () => {
            const flight = {
                id: 1,
                flight_number: 1,
                airline: 'Delta',
                origin: 'JFK',
                destination: 'LAX',
                departure_date: '2021-06-30T23:00:00.000Z',
                departure_time: '2021-06-30T23:00:00.000Z',
                arrival_date: '2021-06-30T23:00:00.000Z',
                arrival_time: '2021-06-30T23:00:00.000Z',
                createdAt: '2021-06-30T23:00:00.000Z',
                updatedAt: '2021-06-30T23:00:00.000Z',
            };

            flightService.deleteFlightById.mockResolvedValue(flight);

            req.params = { id: 1 };

            await flightControllers.deleteFlightById(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(flight);
        });

        test('should call res.status with 500 and an error message', async () => {
            const error = new Error("Cannot read property 'id' of undefined");
            flightService.deleteFlightById.mockRejectedValue(error);

            await flightControllers.deleteFlightById(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: error.message });
        });
    });

});


