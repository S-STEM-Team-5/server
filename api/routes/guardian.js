const express = require('express');
const router = express.Router();
const Guardian = require('../model/guardianModel.js');

//Getting all
router.get('/', async (req, res) => {
  try {
    const guardian = await Guardian.find();
    res.json(guardian);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

//Getting by email
router.get('/:email', getGuardian, (req, res) => {
  res.send(res.guardian);
});

//Creating one
router.post('/', async (req, res) => {
  const guardian = new Guardian({
    email: req.body.email,
    contactInfo: {
      homePhone: req.body.contactInfo.homePhone,
      workPhone: req.body.contactInfo.workPhone,
      emergencyPhone: req.body.contactInfo.emergencyPhone
    }
  });
  try {
    const newGuardian = await guardian.save();
    res.status(201).json(guardian);
  } catch (err) {
    res.status(400).json({
      message: err.message
    });
  }
});

//Deleting one
router.delete('/:email', getGuardian, async (req, res) => {
  try {
    await res.guardian[0].remove();
    res.json('Deleted Account');
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

//Middleware
async function getGuardian(req, res, next) {
  let guardian;
  try {
    guardian = await Guardian.find({
      email: req.params.email
    });
    if (guardian == null || guardian.length == 0) {
      return res.status(404).json({
        message: 'Cannot find Guardian'
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
  res.guardian = guardian;
  next();
}

module.exports = router;
