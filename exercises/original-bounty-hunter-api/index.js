//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const bountyRoute = require('./routes/bounty.js');
const cors = require('cors');
const mongoose = require('mongoose');

//create app
const app = express();

mongoose.connect('mongodb://localhost:27017/bounties', (err) => {
    if (err) throw err;
    console.log('Connected to the database, baby!');
})

//port
const config = require('./config');

//middleware
app.use(bodyParser.json());
app.use(cors());

//routes
app.use('/bounty', bountyRoute);

//run app
app.listen(config.port, () => {
    console.log('Listening on port ' + config.port);
});