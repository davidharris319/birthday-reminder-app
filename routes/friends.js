var express = require('express');
var router = express.Router();
var friendsCtrl = require('../controllers/friends');

router.put('/friends/:id', friendsCtrl.update);

router.get('/friends/:id/edit', friendsCtrl.edit);
router.post('/users/:id/friends', friendsCtrl.create);
router.delete('/friends/:id', friendsCtrl.delete);

// router.post('/f', isLoggedIn, profilesCtrl.addFriend);



function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
