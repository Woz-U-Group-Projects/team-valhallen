var express = require("express");
var router = express.Router();
var models = require("../models");
//var passport = require('../services/passport');
var authService = require('../services/auth');

router.get("/new", function(req, res, next) {
  models.User.findAll({
    where:{ userType: null }  //approved: false
  }).then(users => res.json(users));
});

router.get("/tenants", function(req, res, next) {
  models.User.findAll({
    where:{ userType: "tenant" }
  }).then(users => res.json(users));
});

router.get("/techs", function(req, res, next) {
  models.User.findAll({
    where:{ userType: "technician" } 
  }).then(users => res.json(users));
});

router.get("/mgrs", function(req, res, next) {
  models.User.findAll({
    where:{ userType: "propertyManager" }
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
  newUser.lName = req.body.lName;
  newUser.fName = req.body.fName;
  newUser.email = req.body.email;
  newUser.phone = req.body.phone;
  newUser.password = req.body.password;
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

// end login Router -------------------------------------------------*

module.exports = router;