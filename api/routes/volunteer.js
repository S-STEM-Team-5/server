const express = require('express');
const router = express.Router();
const Volunteer = require('../model/volunteerModel.js');

//Getting all
router.get('/', async (req, res) => {
  try {
    const volunteer = await Volunteer.find();
    res.json(volunteer);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

//Getting by email
router.get('/:email', getVolunteer, (req, res) => {
  res.send(res.volunteer[0]);
});

//Creating one
router.post('/', async (req, res) => {
  const volunteer = new Volunteer({
    volEmail: req.body.volEmail,
    birthDate: req.body.birthDate,
    gender: req.body.gender,
    address: {
      streetAddr: req.body.address.streetAddr,
      city: req.body.address.city,
      state: req.body.address.state,
      zip: req.body.address.zip
    },
    schoolName: req.body.schoolName,
    shirtSize: req.body.shirtSize,
    weeks: req.body.weeks,
    car: req.body.car,
    previouslyWorkedAtCamp: req.body.previouslyWorkedAtCamp,
    previouslyCamper: req.body.previouslyCamper,
    ssn: req.body.ssn,
    crime: req.body.crime,
    crimeDescription: req.body.crimeDescription,
    certifications: req.body.certifications,
    signature: req.body.signature,
    gname: req.body.gname,
    grelation: req.body.grelation,
    gsignature: req.body.grelation,
    status: req.body.status
  });
  try {
    const newVolunteer = await volunteer.save();
    res.status(201).json(volunteer);
  } catch (err) {
    res.status(200).json(
      "Application already exists"
    );
  }
});

//Deleting by email
router.delete('/:email', getVolunteer, async (req, res) => {
  try {
    await res.volunteer[0].remove();
    res.json('Deleted Account');
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

//Middleware
async function getVolunteer(req, res, next) {
  let volunteer;
  try {
    volunteer = await Volunteer.find({
      volEmail: req.params.email
    });
    if (volunteer == null || volunteer.length == 0) {
      return res.status(200).json({
        message: 'Cannot find Volunteer'
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
  res.volunteer = volunteer;
  next();
}

module.exports = router;
