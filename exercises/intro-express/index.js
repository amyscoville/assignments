const express = require("express");
const bodyParser = require('body-parser');  

const database = require('./database.js');

const app = express();
let port = 5050;

app.use(bodyParser.json());

app.get('/pets', (req, res)=> {
    res.send(database);
});

app.post('/pets', (req, res)=>{
    console.log(database.push(req.body));
    res.send({
        msg: "Data added successfully",
        data: req.body
    });
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
})

