const express = require('express');
const eventRoute = require('./routes/events.js');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/', eventRoute);
app.listen(8800, () => {
    console.log("Backend Server is running!");
})
