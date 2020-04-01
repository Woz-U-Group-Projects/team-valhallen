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
  newUser.save().then(user => res.json(user));
});

/*
router.delete("/:id", function(req, res, next) {
  let userId = parseInt(req.params.id);
  models.User.findByPk(userId)
    .then(user => user.destroy())
    .then(() => res.send({ userId }))
    .catch(err => res.status(400).send(err));
});

router.put("/:id", function(req, res, next) {
  models.Task.update(
    {
      name: req.body.name,
      complete: req.body.complete
    },
    {
      where: { id: parseInt(req.params.id) }
    }
  ).then(task => res.json(task));
});
*/

module.exports = router;
