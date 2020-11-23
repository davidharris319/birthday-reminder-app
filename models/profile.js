var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  birthday: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);