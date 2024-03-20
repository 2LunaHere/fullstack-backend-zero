// API phục vụ server side rendering
const express = require('express');
const router = express.Router();

// Khai báo routes
router.get('/', (req, res) => {
    res.send('Hello World! nodemon')
})
router.get('/sample', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router;