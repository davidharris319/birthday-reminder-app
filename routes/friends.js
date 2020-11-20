var express = require('express');
var router = express.Router();
var friendsCtrl = require('../controllers/friends');

router.get('/new', friendsCtrl.new);
router.get('/:id/edit', friendsCtrl.edit);
router.put('/:id', friendsCtrl.update);

router.post('/', friendsCtrl.create);

// router.post('/f', isLoggedIn, profilesCtrl.addFriend);



function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
