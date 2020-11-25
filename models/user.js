var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// sub documents 
var friendSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

// Main document
const userSchema = new mongoose.Schema({
  name: String,
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
  personalInfo: { type: Schema.Types.ObjectId, ref: 'Profile' },
  friends: [friendSchema],
  googleId: String,
});

module.exports = mongoose.model('User', userSchema);