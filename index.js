// const express = require('express');
// const app = express();
// const cors = require('cors');

// app.use(cors());
// app.use(express.json());

// const flightRouter = require('./src/routes/flightRoutes.js');
// const bookingRouter = require('./src/routes/bookingRoutes.js');

// app.use('/flights', flightRouter);
// app.use('/bookings', bookingRouter);

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//   if (req.method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     return res.status(200).json({});
//   }
//   next();
// });

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });
const express = require('express');
const app = express();

// Remove the cors() middleware
// Vercel already has CORS enabled by default

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Change the port variable to 3000
// The default port for Vercel is 3000

const port = 3000;

// Add the vercel.json file to your project root directory
// This file tells Vercel how to deploy your application

// You can find the Vercel documentation here:
// https://vercel.com/docs/v2/deployments/configuration

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});