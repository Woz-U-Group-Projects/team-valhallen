var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
    models.PropertyUnit.findAll().then(units => res.json(units));
});

router.post("/", function(req, res, next) {
    let newUnit = new models.PropertyUnit();
    newUnit.unitName = req.body.unitName;
    newUnit.save().then(units => res.json(units));
});

router.delete("/:id", function(req, res, next) {
    let unitId = parseInt(req.params.id);
    models.PropertyUnit.findByPk(unitId)
      .then(propertyUnit => propertyUnit.destroy())
      .then(() => res.send({ unitId }))
      .catch(err => res.status(400).send(err));
  });


module.exports = router;