const router = require('express').Router();
const db = require("../models");
// const Exercise = require("../models/exercise");

// view all workouts 
// router.get('/workouts', (req, res) => {
//     Exercise.find()
//     .then(dbData => res.json(dbData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

router.get('/workouts', (req, res) => {
    db.Excercise.find({})
    .then(dbData => {
        dbData.forEach(workout => {
            var total = 0;
            // adds duration of exercises 
            workout.exercises.forEach(e => {
                total += e.duration;
            });
            workout.totalDuration = total;
        })
    })
    .then(dbData => res.json(dbData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/workouts', (req, res) => {
    Exercise.create({})
    .then(dbData => res.json(dbData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// 

module.exports = router;

