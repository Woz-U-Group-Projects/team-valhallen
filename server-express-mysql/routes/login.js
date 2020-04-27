var express = require("express");
var router = express.Router();
var models = require("../models");
//var passport = require('../services/passport');
// var authService = require('../services/auth');


router.get("/", function(req, res, next) {
  models.User.findAll().then(users=> res.json(users));
});

/*
router.get('/', function(req, res, next) {
  models.User.findAll({}).then(foundUsers => {
    const mappedUsers = foundUsers.map(user => ({
      UserId: user.userId,
      users: `${user.email} ${user.password}`
    }));
    res.json(mappedUsers);
  });
});
*/


/*router.post('/', function(req, res, next) { 
  models.User
  .findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  })
  .then(users => {
    res.json(users);
  });
});
*/

/*
router.post('/', passport.authenticate('local',{
  failureRedirect: '/'
}),
function (req, res, next) {
  res.redirect('users/profile/' +req.user.UserId);
});
*/

router.post('/', function(req, res, next){
  models.User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  }).then(user => {
    if (!user) {
      console.log('User not found')
      return res.status(401).json({
        message: "Login Failed"
      });
    }
    if (user) {
      res.send('Login successful');
    } else {
      console.log('wrong Password');
      res.redirect('/login')
    }
  });
});

module.exports = router;