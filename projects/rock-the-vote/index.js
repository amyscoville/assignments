const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const issuesRoutes = require('./routes/issues');
const config = require('./config');

const app = express();

mongoose.connect('mongodb://localhost:27017/issues', (err) => {
    if (err) throw err;
    console.log('Connected to the database!');
});

app.use(bodyParser.json());
app.use('/issues', issuesRoutes);

app.listen(config.port, () => {
    console.log('Listening on port ' + config.port);
})


