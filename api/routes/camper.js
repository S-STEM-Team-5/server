const express = require('express');
const router = express.Router();
const Camper = require('../model/camperModel.js');

//Getting all
router.get('/', async (req, res) => {
  try {
    const camper = await Camper.find();
    res.json(camper);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

//Getting by email
router.get('/id/:id', getCamperByID, (req, res) => {
  res.send(res.camper);
});

//Getting by email
router.get('/email/:email', getCamperByEmail, (req, res) => {
  res.send(res.camper);
});

//Creating camper
router.post('/', async (req, res) => {
  const camper = new Camper({
    guardianEmail: req.body.guardianEmail,
    name: {
      fname: req.body.name.fname,
      lname: req.body.name.lname,
      minit: req.body.name.minit
    },
    homeAddr: {
      street: req.body.homeAddr.street,
      city: req.body.homeAddr.city,
      state: req.body.homeAddr.state,
      zip: req.body.homeAddr.zip
    },
    residence: req.body.residence,
    shirtSize: req.body.shirtSize,
    week: req.body.week,
    previousCamper: req.body.previousCamper,
    previousOvernightCamper: req.body.previousOvernightCamper,
    canMakeFriends: req.body.canMakeFriends,
    sibOrParentName: req.body.sibOrParentName,
    sibOrParentDiagnosis: req.body.sibOrParentDiagnosis,
    sibOrParentDiagnosisDate: req.body.sibOrParentDiagnosisDate,
    sibOrParentTreatmentLocation: req.body.sibOrParentTreatmentLocation,
    sibOrParentPhysician: {
      name: req.body.sibOrParentPhysician.name,
      phone: req.body.sibOrParentPhysician.phone,
    },
    camperDiagnosis: req.body.camperDiagnosis,
    camperDiagnosisDate: req.body.camperDiagnosisDate,
    camperTreatmentLocation: req.body.camperTreatmentLocation,
    camperPhysician: {
      name: req.body.camperPhysician.name,
      phone: req.body.camperPhysician.phone,
    },
    controlled: req.body.controlled,
    nickName: req.body.nickName,
    schoolYear: req.body.schoolYear,
    favSubject: req.body.favSubject,
    hobbies: req.body.hobbies,
    talents: req.body.talents,
    favSport: req.body.talents,
    canSwim: req.body.canSwim,
    mostAnticipated: req.body.mostAnticipated,
    notes: req.body.notes,
    applicationBy: req.body.applicationBy,
    status: req.body.status,
    file: req.body.file
  });
  try {
    const newCamper = await camper.save();
    res.status(201).json(camper);
  } catch (err) {
    res.status(400).json({
      message: err.message
    });
  }
});

//Deleting camper
//TODO: fix to alloy query params not /id
router.delete('/id/:id', getCamperByID, async (req, res) => {
  try {
    await res.camper[0].remove();
    res.json('Deleted Account');
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

//Middleware
async function getCamperByID(req, res, next) {
  let camper;
  try {
    camper = await Camper.find({
      _id: req.params.id
    });
    if (camper == null || camper.length == 0) {
      return res.status(200).json({
        message: 'Cannot find Camper'
      });
    }
  } catch (err) {
    return res.status(200).json({
      message: 'Invalid ID format'
    });
  }
  res.camper = camper;
  next();
}

//Middleware
async function getCamperByEmail(req, res, next) {
  let camper;
  try {
    camper = await Camper.find({
      guardianEmail: req.params.email
    });
    if (camper == null || camper.length == 0) {
      return res.status(200).json({
        message: 'Cannot find Camper'
      });
    }
  } catch (err) {
    return res.status(200).json({
      message: 'Invalid Request'
    });
  }
  res.camper = camper;
  next();
}

module.exports = router;
