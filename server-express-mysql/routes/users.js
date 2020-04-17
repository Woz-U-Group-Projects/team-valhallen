var express = require("express");
var router = express.Router();
var models = require("../models");
//var passport = require('../services/passport');
var authService = require('../services/auth');

router.get("/", function(req, res, next) {
  models.User.findAll({
    where:{ userType: "tenant" }
  }).then(users => res.json(users));
});

router.get("/techs", function(req, res, next) {
  models.User.findAll({
    where:{ userType: "tech" }
  }).then(users => res.json(users));
});

router.get("/mgrs", function(req, res, next) {
  models.User.findAll({
    where:{ userType: "manager" }
  }).then(users => res.json(users));
});

router.get("/:id", function(req, res, next) {       //get userID from DB
  let userId = parseInt(req.params.id);             
  models.User.findByPk(userId)
    .then(user => res.json(user));                  //return user as json obj
});


router.put("/:id", function(req, res, next) {
  models.User.update(
    {
      name: req.body.name,
      complete: req.body.complete
    },
    {
      where: { userId: parseInt(req.params.userId) }
    }
  ).then(user => res.json(user));
});

router.post("/signup", function(req, res, next) {
  let newUser = new models.User();
  newUser.fName = req.body.fName;
  newUser.lName = req.body.lName;
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  newUser.phone = req.body.phone;
  newUser.userType = req.body.userType;
  newUser.save().then(user => res.json(user));
});


//login router --------------------------------------------------------------*

router.post('/login', function(req, res, next){
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
      let token = authService.signUser(user);
      res.cookie('jwt', token);
      res.send('Login successful');
    } else {
      console.log('wrong Password');
      res.redirect('/login')
    }
  });
});

router.get('/tenantProfile', function (req, res, next) {
  let token = req.cookies.jwt;
  if (token) {
    authService.verifyUser(token)
      .then(user => {
        if (user) {
          res.send(JSON.stringify(user));
        } else {
          res.status(401);
          res.send('Invalid authentication token');
        }
      });
  } else {
    res.status(401);
    res.send('Must be logged in');
  }
});

// end login Router -------------------------------------------------*

module.exports = router;
