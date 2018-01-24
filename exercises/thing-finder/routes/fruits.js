const express = require('express');
const fruitsRoute = express.Router();

let fruits = require('../fruitsdatabase.js');

fruitsRoute.route('/')
    .get((req, res) => {
        let query = req.query;
        let filteredFruits = fruits.filter(fruit => {
            let found = true;
            for (let key in query) {
                if(fruit[key] != query[key]) {
                    found = false;
                    break;
                }
            }
            return found;
        })
        res.send(filteredFruits);
    })
    .post((req, res) => {
        let newFruit = req.body;
        fruits.push(newFruit);
        res.send({
            msg: 'Fruit successfully added',
            data: newFruit
        })
    })

module.exports = fruitsRoute;
