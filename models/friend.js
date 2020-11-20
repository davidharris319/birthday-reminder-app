var mongoose = require('mongoose');

var friendSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  birthday: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Friend', friendSchema);