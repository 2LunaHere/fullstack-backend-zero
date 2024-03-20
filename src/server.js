require('dotenv').config();

const express = require('express')
const path = require('path');
const configViewEngine = require('./config/viewEngine');

const webRoutes = require('./routes/web');
const app = express()
const port = process.env.PORT;
const hostName = process.env.HOST_NAME;

// Config template engine

configViewEngine(app);

// Khai báo routes

app.use('/', webRoutes);

app.listen(port, hostName, () => {
    console.log(`Example app listening on port ${port}`)
})