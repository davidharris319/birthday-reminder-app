const User = require('../models/user');
const { render } = require('../server');

function show(req, res) {
  User.findById(req.params.id, function(err, movie) {
    res.render(`users/${user._id}`, { user })
  });
}

module.exports = {
  show
}