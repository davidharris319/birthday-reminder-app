const User = require('../models/user');
const Profile = require('../models/profile');

function show(req, res) {
  User.findById(req.params.id)
    .populate('personalInfo')
    .exec(function(err, user) {
      if(err) {
        console.log(err)
        return
      }
      if (!user.personalInfo) {
        return res.render(`profile/new`);
      };
        console.log(user);
        return res.render(`users/show`, { user, currentUser: req.user })
    });
}

module.exports = {
  show
}