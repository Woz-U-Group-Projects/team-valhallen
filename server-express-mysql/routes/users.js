var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  models.User.findAll().then(users => res.json(users));
});

router.post("/", function(req, res, next) {
  let newUser = new models.User();
  newUser.fName = req.body.fName;
  newUser.sName = req.body.sName;
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  newUser.phone = req.body.phone;
  newUser.unitId = req.body.unitId;
  newUser.save().then(user => res.json(user))
  .spread(function(result, created) {
    if (created) {
      console.log('User successfully created');
    } else {
      res.send('This user already exists');
    }
  });
});


module.exports = router;
