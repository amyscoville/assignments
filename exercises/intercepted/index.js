const express = require('express');
let database = require('./database.js');
let color = require('./color');

const app = express();
const port = 7070;

app.use(color());

app.get('/items', (req, res) => {
    res.send({
        data: database,
        color: req.color
    })
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})