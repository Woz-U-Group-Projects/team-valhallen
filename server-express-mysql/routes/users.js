var express = require("express");
var router = express.Router();
var models = require("../models");
//var passport = require('../services/passport');
var authService = require('../services/auth');

//GET LIST OF NEW USERS
router.get("/new", function(req, res, next) {
  models.User.findAll({
    where:{ userType: null }  //approved: false
  }).then(users => res.json(users));
});

//GET LIST OF TENANTS
router.get("/tenants", function(req, res, next) {
  models.User.findAll({
    where:{ userType: "tenant" }
  }).then(users => res.json(users));
});

//GET LIST OF TECHNICIANS
router.get("/techs", function(req, res, next) {
  models.User.findAll({
    where:{ userType: "technician" } 
  }).then(users => res.json(users));
});

//GET LIST OF MANAGERS
router.get("/mgrs", function(req, res, next) {
  models.User.findAll({
    where:{ userType: "propertyManager" }
  }).then(users => res.json(users));
});

//GET SELECTED USER BY USERID
router.get("/:id", function(req, res, next) {       //get userID from DB
  let userId = parseInt(req.params.id);             
  models.User.findByPk(userId)
    .then(user => res.json(user));                  //return user as json obj
});

//UPDATE USER INFORMATION
router.put("/:id", function(req, res, next) {
  models.User.update(
    {
      email: req.body.newEmail,
      password: req.body.newPassword,
      phone: req.body.newPhone
    },
    {
      where: { userId: parseInt(req.params.id) }
    }
  ).then(user => res.json(user));
});

//SIGN UP NEW USER
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