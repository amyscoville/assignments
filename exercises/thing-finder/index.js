const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');

const fruitsRoute = require('./routes/fruits.js');

let fruits = require('./fruitsdatabase.js');

const app = express();
let port = 2020;

app.use(bodyParser.json());

app.use('/fruits', fruitsRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})