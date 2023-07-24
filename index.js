const express = require('express');
const app = express();
const cors = require('cors');
const bookingRouter = require('./src/routes/bookingRoutes.js');
const flightRouter = require('./src/routes/flightRoutes.js');
require('dotenv').config();
app.use(cors());

app.use(express.json());
app.use('/bookings', bookingRouter);
app.use('/flights', flightRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});