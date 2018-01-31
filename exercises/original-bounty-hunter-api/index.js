//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const bountyRoute = require('./routes/bounty.js');
const cors = require('cors');

//port
const config = require('./config');

//database
let bounties = require('./bounties.js');

//create app
const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

//routes
app.use('/bounty', bountyRoute);

//run app
app.listen(config.port, () => {
    console.log('Listening on port ' + config.port);
});