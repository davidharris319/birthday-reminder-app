const User = require('../models/student');
const User = require('../models/user');

function index(req, res, next) {
  res.render('students/index', {
    students,
    user: req.user,
    name: req.query.name,
    sortKey
  });
}

module.exports = {
  index
}