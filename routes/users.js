var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');

router.get('/:id', isLoggedIn, usersCtrl.show);

// router.post('/f', isLoggedIn, profilesCtrl.addFriend);



function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
