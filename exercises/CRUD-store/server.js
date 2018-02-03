const express = require('express');
const app = express();
const mongoose = require('mongoose');
const inventoryRoutes = require('./routes/inventory');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/crud-store', (err) => {
    if (err) throw err;
    console.log('Connected to the database, baby!');
});

app.use(bodyParser.json());
app.use('/inventory', inventoryRoutes);

app.listen(8080, () => {
    console.log('Server is running on port 8080...');
})

