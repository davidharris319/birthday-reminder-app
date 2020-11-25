const User = require('../models/user');

function create(req, res) {
  User.findById(req.params.id, function(err, user) {
    // Update req.body to contain user info
    req.body.userId = req.user._id;
    // Add the friend
    user.friends.push(req.body);
    user.save(function(err) {
      res.redirect(`/users/${user._id}`);
    });
  });
}

function edit(req, res) {
  User.findOne({'friends._id': req.params.id}).then(user =>
    {
      const friendSubdoc = user.friends.id(req.params.id);      
      res.render(`friend/edit`, {friend: friendSubdoc})
    });
}

function update(req, res) {
  User.findOne({'friends._id': req.params.id}, function(err, user) {
    const friendSubdoc = user.friends.id(req.params.id);
    friendSubdoc.firstName = req.body.firstName;
    friendSubdoc.lastName = req.body.lastName;
    friendSubdoc.birthday = req.body.birthday;
    user.save(function(err) {
      res.redirect(`/users/${user._id}`);
    });
  });
}

function deleteFriend(req, res) {
  User.findOne({'friends._id': req.params.id}, function(err, user) {
    const friendSubdoc = user.friends.id(req.params.id);
    friendSubdoc.remove();
    user.save(function(err) {
      res.redirect(`/users/${user._id}`);
    });
  });
}

module.exports = {
  create,
  update,
  delete: deleteFriend,
  edit
}