const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/workouts",  (req,res) => {
    console.log("Texas sized 10-4 good buddy!");
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

  router.post("/api/workouts", ({body}, res) => {
      console.log("Pitter Patter")
      console.log(body);
    db.Workout.create({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

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



