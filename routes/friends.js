var express = require('express');
var router = express.Router();
var friendsCtrl = require('../controllers/friends');

router.put('/friends/:id', isLoggedIn, friendsCtrl.update);

router.get('/friends/:id/edit', isLoggedIn, friendsCtrl.edit);
router.post('/users/:id/friends', isLoggedIn, friendsCtrl.create);
router.delete('/friends/:id', isLoggedIn, friendsCtrl.delete);


function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
