const express = require('express');
const issuesRoute = express.Router();
const Issues = require('../models/issues');


issuesRoute.route('/')
    .get((req, res) => {
        // let query = {};
        Issues.find(req.query, (err, issues) => {
            if (err) return res.status(500).send(err);
            return res.send(issues);
        });
    })

    .post((req, res) => {
        let newIssue = new Issues(req.body);
        newIssue.save((err) => {
            if (err) return res.status(500).send(err);
            return res.send(newIssue);
        });
    });

issuesRoute.route('/:id')
    .get((req, res) => {
        Issues.findById(req.params.id, (err, issue) => {
            if (err) return res.status(500).send(err);
            return res.send(issue)
        })
    })
    .delete((req, res) => {
        Issues.findByIdAndRemove(req.params.id, (err, deletedIssue) => {
            if (err) return res.status(500).send(err);
            return res.send(deletedIssue);
        })
    })
    .put((req, res) => {
        Issues.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedIssue) => {
            if (err) return res.status(500).send(err);
            return res.send(updatedIssue);
        })
    })

module.exports = issuesRoute;