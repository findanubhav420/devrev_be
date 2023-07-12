const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(bookingRouter);
app.use(flightRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});