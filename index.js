const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const flightRouter = require('./src/routes/flightRoutes.js');
const bookingRouter = require('./src/routes/bookingRoutes.js');

app.use('/flights', flightRouter);
app.use('/bookings', bookingRouter);


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    }
);