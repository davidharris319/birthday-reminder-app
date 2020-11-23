var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
  email: String,
  personalInfo: { type: Schema.Types.ObjectId, ref: 'Profile' },
  friends: [friendSchema],
  googleId: String,
});

module.exports = mongoose.model('User', userSchema);