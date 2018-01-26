const express = require('express');
const bountyRoute = express.Router();

let bounties = require('../bounties.js');

bountyRoute.route('/bounty')
    .get((req, res) => {
        res.send(bounties);
    })

    .post((req, res) => {
        let newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(newBounty);
        res.send({
            msg: "Bounty was successsfully added",
            bounty: newBounty
        });
    });

bountyRoute.route('/bounty/:id')
    .get((req, res) => {
        let { id } = req.params;
        let found = false;
        let foundBounty;
        for (let i = 0; i < bounties.length; i++) {
            if(bounties[i]._id === id) {
                found = true;
                foundBounty = bounties[i];
                break;
            }
        }
        if (found) {
            res.send({
                msg: `Item ${id} was found.`,
                data: foundBounty
            })
        } else {
            res.send({
                msg: `Item ${id} could not be found.`
            })
        }
    })
    .delete((req, res) => {
        let { id } = req.params;
        let found = false;
        for (let i = 0; i < bounties.length; i++) {
            if (bounties[i]._id === id) {
                bounties.splice(i, 1);
                found = true;
                break;
            }
        }
        if (found) {
            res.send({
                msg: `Item ${id} was successfully removed.`
            });
        } else {
            res.send({
                msg: `Item ${id} was not found.`
            });
        }
    })
    .put((req, res) => {
        let { id } = req.params;
        let found = false;
        let updatedBounty = req.body;
        for (let i = 0; i < bounties.length; i++) {
            if (bounties[i]._id === id) {
                bounties[i] = Object.assign(bounties[i], updatedBounty);
                updatedBounty = bounties[i];
                found = true;
                break;
            }
        }
        if (found) {
            res.send({
                msg: `Item ${id} was updated.`,
                data: updatedBounty
            });
        } else {
            res.send({
                msg: `Item ${id} not found!`
            });
        }
    });