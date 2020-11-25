var express = require('express');
var router = express.Router();
var profilesCtrl = require('../controllers/profiles');

/* GET users listing. */
router.get('/new', isLoggedIn, profilesCtrl.new);
router.get('/:id', isLoggedIn, profilesCtrl.show);
router.get('/:id/edit', isLoggedIn, profilesCtrl.edit);
router.put('/:id', isLoggedIn, profilesCtrl.update);

router.post('/', isLoggedIn, profilesCtrl.create);

// router.post('/f', isLoggedIn, profilesCtrl.addFriend);



function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
