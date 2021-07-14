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

// view all workouts 
router.get('/workouts', (req, res) => {
    db.Workout.find({})
    .then(dbData => {
        dbData.forEach(workout => {
            var total = 0;
            // adds duration of exercises 
            workout.exercises.forEach(e => {
                total += e.duration;
            });
            workout.totalDuration = total;
        });
        res.json(dbData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create a workout 
router.post('/workouts', ({ body }, res) => {
    db.Workout.create(body).then(dbData => {
        res.json(dbData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// add an exercise 
router.put('/workouts/:id', (req, res) => {
    db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            // The $inc operator increments a field by a specified value
            $inc: { totalDuration: req.body.duration },
            // The $push operator appends a specified value to an array.
            $push: { exercises: req.body }
        },
        { new: true })
        .then(dbData => {
            res.json(dbData);
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/workouts/range', (req, res) => {
    db.Workout.find({}).then(dbData => {
        res.json(dbData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;

