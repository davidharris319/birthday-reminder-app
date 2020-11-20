var express = require('express');
var router = express.Router();
var profilesCtrl = require('../controllers/profiles');

/* GET users listing. */
router.get('/new', profilesCtrl.new);
router.get('/:id', profilesCtrl.show);
router.get('/:id/edit', profilesCtrl.edit);
router.put('/:id', profilesCtrl.update);

router.post('/', profilesCtrl.create);

// router.post('/f', isLoggedIn, profilesCtrl.addFriend);



function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
