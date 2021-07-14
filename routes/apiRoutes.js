const router = require('express').Router();
// const db = require("../models");
const Exercise = require("../models/exercise");

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

// router.get('/workouts', (req, res) => {
//     db.Excercise.find({})
//     .then(dbData => {
//         dbData.forEach(workout => {
//             var total = 0;
//             workout.exercises
//         })
//     })
//     .then(dbData => res.json(dbData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });