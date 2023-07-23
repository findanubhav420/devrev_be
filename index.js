const express = require('express');
const app = express();
const postgres = require('postgres');
const cors = require('cors');
const bookingRouter = require('./src/routes/bookingRoutes.js');
const flightRouter = require('./src/routes/flightRoutes.js');
require('dotenv').config();
app.use(cors());

app.use(express.json());
app.use('/bookings', bookingRouter);
app.use('/flights', flightRouter);

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

const sql = postgres(URL, { ssl: 'require' });

async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result);
}

getPgVersion();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});