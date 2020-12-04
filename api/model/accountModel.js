const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  accType: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    fname: {
      type: String,
      required: true
    },
    lname: {
      type: String,
      required: true
    }
  }
});

module.exports = mongoose.model('Account', accountSchema);
