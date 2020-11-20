const Friend = require('../models/friend');
const User = require('../models/user');

const { render } = require('../server');

function newFriend(req, res) {
  res.render('friend/new');
}

function create(req, res) {
  User.findById(req.params.id, function(err, user) {
    // Update req.body to contain user info
    req.body.userId = req.user._id;
    // Add the friend
    user.friends.push(req.body);
    user.save(function(err) {
      res.redirect(`/user/${user._id}`);
    });
  });
}

function edit(req, res) {
  Friend.findById(req.params.id, function(err, friend) {
    // Verify friend is 'owner' by logges in user
    if (!friend.user.equals(req.user._id)) return res.redirect('/');
    res.render(`friend/${friend._id}/edit`, {friend});
  })
}

function update(req, res) {
  User.findOne({'friends._id': req.params.id}, function(err, user) {
    const friendSubdoc = user.friend.id(req.params.id);
    if(!friendSubdoc.userId.equals(req.user._id)) return res.redirect(`/friend/${friend._id}`);
    friendSubdoc.text = req.body.text;
    user.save(function(err) {
      res.redirect(`/friend/${friend._id}`);
    });
  });
}

module.exports = {
  new: newFriend,
  create,
  edit,
  update
}