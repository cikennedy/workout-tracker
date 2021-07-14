const router = require('express').Router();
// const db = require("../models");
const Excercise = require("../models/exercise");

// view all workouts 
router.get('/workouts', (req, res) => {
    Excercise.find()
    .then(dbData => res.json(dbData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/workouts', (req, res) => {
    Excercise.create({})
    .then(dbData => res.json(dbData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// 

module.exports = router;