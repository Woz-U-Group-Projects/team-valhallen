var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  models.Manager.findAll().then(manager => res.json(manager));
});

router.post("/", function(req, res, next) {
  let newManager = new models.Manager();
  newManager.fName = req.body.fName;
  newManager.lName = req.body.lName;
  newManager.email = req.body.email;
  newManager.password = req.body.password;
  newManager.phone = req.body.phone;
  newManager.additionalComments = req.body.additionalComments;
  newManager.save().then(manager => res.json(manager))
  .spread(function(result, created) {
    if (created) {
      console.log('User successfully created');
    } else {
      res.send('This user already exists');
    }
  });
});


module.exports = router;