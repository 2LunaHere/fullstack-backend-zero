require('dotenv').config();

const express = require('express')
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const mysql = require('mysql2');
const webRoutes = require('./routes/web');
const app = express()
const port = process.env.PORT;
const hostName = process.env.HOST_NAME;

// Config template engine

configViewEngine(app);

// Khai báo routes

app.use('/', webRoutes);

// Test connection

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'hoidanit',
});

// A simple SELECT query
connection.query(
    'select * from Users u',
    function (err, results, fields) {
        console.log(">> results >>", results); // results contains rows returned by server
        console.log(">> field >>", fields); // fields contains extra meta data about results, if available
    }
);

app.listen(port, hostName, () => {
    console.log(`Example app listening on port ${port}`)
})