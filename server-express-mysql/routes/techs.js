var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  models.Technician.findAll().then(tech => res.json(tech));
});

router.post("/", function(req, res, next) {
  let newTechUser = new models.Technician();
  newTechUser.fName = req.body.fName;
  newTechUser.lName = req.body.lName;
  newTechUser.email = req.body.email;
  newTechUser.password = req.body.password;
  newTechUser.phone = req.body.phone;
  newTechUser.select1 = req.body.select1;
  newTechUser.select2 = req.body.select2;
  newTechUser.select3 = req.body.select3;
  newTechUser.select4 = req.body.select4;
  newTechUser.select5 = req.body.Select5;
  newTechUser.additionalComments = req.body.additionalComments;
  newTechUser.save().then(tech => res.json(tech))
  .spread(function(result, created) {
    if (created) {
      console.log('User successfully created');
    } else {
      res.send('This user already exists');
    }
  });
});


module.exports = router;