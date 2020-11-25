var mongoose = require('mongoose');
const TrustedComms = require('twilio/lib/rest/preview/TrustedComms');

var profileSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    validate: {
        validator: function(v) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email"
    },
    required: true
  },
  phoneNumber: {
    type: String,
    required: true,
    validate: /^\d{10}$/
  },
  birthday: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);