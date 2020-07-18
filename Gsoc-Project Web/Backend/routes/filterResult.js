const express = require('express');
const router = express.Router();
const keys = require('../config/keys');

// Load the organisation DB
const Organisation = require('../models/Oraganisation');

// @route   GET /api/filter/test
// @desc    Testing
// @access  Public
router.get('/test', (req, res) => {
    res.json({msg: "Working"});
});

// @route   Post api/filter/stack
// @desc    Gives search based on filter
// @Note    Keep isAll = Any, order = 1 and criterion = orgName as default
router.post('/stack', (req, res) => {
    const stack = req.body.stack;           // For choosing the tech Stack
    const isAll = req.body.isAll;           // For choosing the Filter type i.e. All tags or Any tags
    const criterion = req.body.criterion;   // For choosing the criterion of sort(orgName or Slots)
    const order = req.body.order;           // Order of Sorting
    if (stack === undefined) {
        Organisation.find({}).sort({[criterion]: [order]})
            .then(organization => {
                res.status(200).json(organization);
            })
            .catch(err => console.log(err));
    } else {
        if (!isAll) {
            Organisation.find({Stack: {$in: stack}}).sort({[criterion]: [order]})
                .then(organization => {
                    res.status(200).json(organization);
                })
                .catch(err => console.log(err));
        } else {
            Organisation.find({Stack: {$all: stack}}).sort({[criterion]: [order]})
                .then(organization => {
                    res.status(200).json(organization);
                })
                .catch(err => console.log(err));
        }
    }
});


module.exports = router;
