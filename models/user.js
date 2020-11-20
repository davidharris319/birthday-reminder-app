var mongoose = require('mongoose');

// sub documents 
var friendSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  birthday: String,
}, {
  timestamps: true
});

// Main document
const userSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  friends: [friendSchema]
});

module.exports = mongoose.model('User', userSchema);