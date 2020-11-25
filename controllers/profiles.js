const Profile = require('../models/profile');
const { render } = require('../server');

function newProfile(req, res) {
  res.render('profile/new');
}

function create(req, res) {
  const profile = new Profile(req.body);
  //Asign the logged in user's id
  profile.user = req.user._id;
  profile.save(function(err) {
    if(err) return res.render('profile/new', {profile});
    req.user.personalInfo = profile._id;
    req.user.save()
    .then(() => res.redirect(`/profile/${profile._id}`))
  });
}

function show(req, res) {
  Profile.findById(req.params.id, function(err, profile) {
    res.render('profile/show', {profile})
  });
}

function edit(req, res) {
  Profile.findById(req.params.id, function(err, profile) {
    // Verify profile is 'owner' by logges in user
    res.render(`profile/edit`, {profile});
  })
}

function update(req, res) {
  Profile.findById(req.params.id, function(err, profile) {
    console.log(profile);
    profile.name = req.body.name;
    profile.email = req.body.email;
    profile.birthday = req.body.birthday;
    profile.phoneNumber= req.body.phoneNumber;
    profile.save(function(err) {
      res.redirect(`/profile/${profile._id}`);
    });
  });
}

module.exports = {
  new: newProfile,
  create,
  show,
  edit,
  update
}