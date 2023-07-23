const bookingControllers = require('../../src/controllers/bookingControllers.js');
const bookingService = require('../../src/services/bookingService.js');

jest.mock('../../src/services/bookingService.js');

describe('bookingControllers', () => {
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

    describe('getAllBookings', () => {
        test('should call res.status with 200 and all bookings', async () => {
            const bookings = [
                {
                    id: 1,
                    flight_id: 1,
                    user_id: 1,
                    seat_number: 1,
                    createdAt: '2021-06-30T23:00:00.000Z',
                    updatedAt: '2021-06-30T23:00:00.000Z',
                },
                {
                    id: 2,
                    flight_id: 2,
                    user_id: 2,
                    seat_number: 2,
                    createdAt: '2021-06-30T23:00:00.000Z',
                    updatedAt: '2021-06-30T23:00:00.000Z',
                },
            ];

            bookingService.getAllBookings.mockResolvedValue(bookings);

            await bookingControllers.getAllBookings(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(bookings);
        });

        test('should call res.status with 500 and an error message', async () => {
            const error = new Error("Cannot read property 'id' of undefined");
            bookingService.getAllBookings.mockRejectedValue(error);

            await bookingControllers.getAllBookings(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: error.message });
        });
    });

    describe('getBookingById', () => {
        test('should call res.status with 200 and a booking', async () => {
            const booking = {
                id: 1,
                flight_id: 1,
                user_id: 1,
                seat_number: 1,
                createdAt: '2021-06-30T23:00:00.000Z',
                updatedAt: '2021-06-30T23:00:00.000Z',
            };

            req.params = {
                id: 1,
            };

            bookingService.getBookingById.mockResolvedValue(booking);

            await bookingControllers.getBookingById(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(booking);
        });

        test('should call res.status with 500 and an error message', async () => {
            const error = new Error("Cannot read property 'id' of undefined");
            bookingService.getBookingById.mockRejectedValue(error);

            await bookingControllers.getBookingById(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: error.message });
        }
        );
    });

    describe('createBooking', () => {
        test('should call res.status with 201 and a booking', async () => {
            const booking = {
                id: 1,
                flight_id: 1,
                user_id: 1,
                seat_number: 1,
                createdAt: '2021-06-30T23:00:00.000Z',
                updatedAt: '2021-06-30T23:00:00.000Z',
            };

            req.body = {
                flight_id: 1,
                user_id: 1,
                seat_number: 1,
            };

            bookingService.createBooking.mockResolvedValue(booking);

            await bookingControllers.createBooking(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(booking);
        });

        test('should call res.status with 500 and an error message', async () => {
            const error = new Error("Cannot read property 'id' of undefined");
            bookingService.createBooking.mockRejectedValue(error);

            await bookingControllers.createBooking(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: error.message });
        });
    }
    );

    describe('deleteBooking', () => {
        test('should call res.status with 200 and a booking', async () => {
            const booking = {
                id: 1,
                flight_id: 1,
                user_id: 1,
                seat_number: 1,
                createdAt: '2021-06-30T23:00:00.000Z',
                updatedAt: '2021-06-30T23:00:00.000Z',
            };

            req.params = {
                id: 1,
            };

            bookingService.deleteBooking.mockResolvedValue(booking);

            await bookingControllers.deleteBooking(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(booking);
        });

        test('should call res.status with 500 and an error message', async () => {
            const error = new Error("Cannot read property 'id' of undefined");
            bookingService.deleteBooking.mockRejectedValue(error);

            await bookingControllers.deleteBooking(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: error.message });
        });
    }
    );

    describe('getBookingByFlightId', () => {
        test('should call res.status with 200 and a booking', async () => {
            const booking = {
                id: 1,
                flight_id: 1,
                user_id: 1,
                seat_number: 1,
                createdAt: '2021-06-30T23:00:00.000Z',
                updatedAt: '2021-06-30T23:00:00.000Z',
            };

            req.params = {
                id: 1,
            };

            bookingService.getBookingByFlightId.mockResolvedValue(booking);

            await bookingControllers.getBookingByFlightId(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(booking);
        });

        test('should call res.status with 500 and an error message', async () => {
            const error = new Error("Cannot read property 'id' of undefined");
            bookingService.getBookingByFlightId.mockRejectedValue(error);

            await bookingControllers.getBookingByFlightId(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: error.message });
        });
    });

});