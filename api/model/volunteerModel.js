const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  volEmail: {
    type: String,
    required: true,
    unique: true
  },
  birthDate: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  address: {
    streetAddr: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zip: {
      type: Number,
      required: true
    }
  },
  schoolName: {
    type: String
  },
  shirtSize: {
    type: String,
    required: true
  },
  weeks: {
    type: [String],
    required: true
  },
  car: {
    type: Boolean,
    required: true
  },
  previouslyWorkedAtCamp: {
    type: Boolean,
    required: true
  },
  previouslyCamper: {
    type: Boolean,
    required: true
  },
  ssn: {
    type: Number,
    required: true
  },
  crime: {
    type: Boolean,
    required: true
  },
  crimeDescription: {
    type: String
  },
  certifications: {
    type: [String]
  },
  signature: {
    type: String,
    required: true
  },
  gname: {
    type: String
  },
  grelation: {
    type: String
  },
  gsignature: {
    type: String
  },
  status: {
    type: String
  }
});

module.exports = mongoose.model('Volunteer', volunteerSchema);
