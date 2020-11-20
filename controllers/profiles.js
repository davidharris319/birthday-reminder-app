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
    if(err) return render('/profile/new', {profile});
    res.redirect(`/profile/${profile._id}`);
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
    if (!profile.user.equals(req.user._id)) return res.redirect('/profile');
    res.render(`/profile/${profile._id}/edit`, {profile});
  })
}

function update(req, res) {
  Profile.findOne({'profile._id': req.params.id}, function(err, profile) {
    const profileSubdoc = profile.id(req.params.id);
    if(!profile.user.equals(req.user._id)) return res.redirect(`/profile/${profile._id}`);
    profileSubdoc.text = req.body.text;
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