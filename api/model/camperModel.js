const mongoose = require('mongoose');

const camperSchema = new mongoose.Schema({
  guardianEmail: {
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
    },
    minit: {
      type: String,
      required: false
    }
  },
  homeAddr: {
    street: {
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
  homePhone: {
    type: Number
  },
  age: {
    type: Number
  },
  residence: {
    type: String,
    required: true
  },
  shirtSize: {
    type: String,
    required: true
  },
  week: {
    type: String,
    required: true
  },
  previousCamper: {
    type: Boolean,
    required: true
  },
  previousOvernightCamper: {
    type: Boolean,
    required: true
  },
  canMakeFriends: {
    type: Boolean,
    required: true
  },

  //Camper Attending session 1 or 5
  sibOrParentName: {
    type: String,
    required: false
  },
  sibOrParentDiagnosis: {
    type: String
  },
  sibOrParentDiagnosisDate: {
    type: String
  },
  sibOrParentTreatmentLocation: {
    type: String
  },
  sibOrParentPhysician: {
    name: {
      type: String
    },
    phone: {
      type: Number
    }
  },


  // Camper attending 2,3,4,or 6
  camperDiagnosis: {
    type: String
  },
  camperDiagnosisDate: {
    type: String
  },
  camperTreatmentLocation: {
    type: String
  },
  camperPhysician: {
    name: {
      type: String
    },
    phone: {
      type: Number
    }
  },
  controlled: {
    type: Boolean
  },


  nickName: {
    type: String
  },
  schoolYear: {
    type: String
  },
  favSubject: {
    type: String
  },
  hobbies: {
    type: String
  },
  talents: {
    type: String
  },
  favSport: {
    type: String
  },
  canSwim: {
    type: Boolean,
    required: true
  },
  mostAnticipated: {
    type: String
  },
  notes: {
    type: String
  },
  applicationBy: {
    type: Boolean
  },
  status: {
    type: String
  },
  file:  {
    type: String
  }
});

module.exports = mongoose.model('Camper', camperSchema);
