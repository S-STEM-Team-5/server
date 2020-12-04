const mongoose = require('mongoose');

const guardianSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  contactInfo: {
    homePhone: {
      type: Number,
      required: false
    },
    workPhone: {
      type: Number,
      required: false
    },
    emergencyPhone: {
      type: Number,
      required: true
    }
  }
});

module.exports = mongoose.model('Guardian', guardianSchema);
