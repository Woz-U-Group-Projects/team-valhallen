var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/new", function(req, res, next) {
  models.User.findAll({
    where:{ userType: null }
  }).then(users => res.json(users));
});

router.get("/tenants", function(req, res, next) {
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

module.exports = router;
