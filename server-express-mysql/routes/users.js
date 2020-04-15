var express = require("express");
var router = express.Router();
var models = require("../models");
// var passport = require('../services/passport');
const authService = require("../services/auth");
const bcrypt = require("bcryptjs");



router.get("/", function (req, res, next) {
  models.User.findAll().then(users => res.json(users));
});


router.get("/signup", function (req, res, next) {
  models.User.findAll().then(users => res.json(users));
});


router.post('/signup', function (req, res, next) {
  models.User
    .findOrCreate({
      where: {
        email: req.body.email
      },
      defaults: {
        fName: req.body.fName,
        lName: req.body.lName,
        email: req.body.email,
        phone: req.body.phone,
        password: authService.hashPassword(req.body.password) 
      }
    })
    .spread(function (result, created) {
      if (created) {
        res.send('User successfully created');
        res.redirect('/users/login');
      } else {
        res.send('This user already exists');
      }
    });
});

router.post('/login', function (req, res, next) {
  models.User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (!user) {
      console.log('User not found')
      return res.status(401).json({
        message: "Login Failed"
      });
    } else {
      let passwordMatch = authService.comparePasswords(req.body.password, user.password);
      if (passwordMatch) {
        let token = authService.signUser(user);
        res.cookie('jwt', token);
        res.send('Login successful');
      } else {
        console.log('Wrong password');
        res.send('Wrong password');
      }
    }
  });
});

router.get("/login", function (req, res, next) {
  models.User.findAll().then(users => res.json(users));
});

router.get('/tenantProfile', function (req, res, next) {
  let token = req.cookies.jwt;
  authService.verifyUser(token)
    .then(user => {
      if (user) {
        res.send(JSON.stringify(user));
      } else {
        res.status(401);
        res.send('Must be logged in');
      }
    })
});


router.get('/logout', function (req, res, next) {
  res.cookie('jwt', "", { expires: new Date(0) });
  res.send('Logged out');
  });


module.exports = router;
