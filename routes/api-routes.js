const express = require("express");
const router = express.Router();
const db = require("../models");

// gets the exercises from the database and adds their total duration together
router.get("/api/workouts",  (req,res) => {
    db.Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: "$exercises.duration"},
        },
    }])
    .then(workouts => {
        res.json(workouts);
    })
    .catch(err => {
        res.json(err);
      });
});

// gets the last 10 workouts from the database, sorts them by the most recent workout and then adds each total duration for each workout
router.get("/api/workouts/range", (req,res) => {
    db.Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: "$exercises.duration"},
        },
    }])
    .sort({ _id: -1 })
    .limit(10)
    .then(workouts => {
        res.json(workouts);
    })
    .catch(err => {
        res.json(err);
      });
});

// allows for workouts to be created in the database
  router.post("/api/workouts", ({body}, res) => {
    db.Workout.create({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

// allows for workouts to be updated and continued in the database
  router.put("/api/workouts/:id", ({body,params}, res) => {
      db.Workout.findByIdAndUpdate(params.id, {$push: {
          exercises: body,
      }}, {new: true, runValidators: true}).then(dailyWorkout => {
          res.json(dailyWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  })

  


module.exports = router;



