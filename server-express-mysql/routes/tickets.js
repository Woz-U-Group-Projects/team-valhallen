var express = require("express");
var router = express.Router();
var models = require("../models");


router.get("/", function(req, res, next) {
  models.Ticket.findAll().then(tickets => res.json(tickets));
});


router.post("/", function(req, res, next) {
  let newTicket = new models.Ticket();
  newTicket.unitId = parseInt(req.body.unitId);
  newTicket.category = req.body.category;
  newTicket.priority = req.body.priority;
  newTicket.access = req.body.access;
  newTicket.note = req.body.note;
  newTicket.status = req.body.status
  var createdAt = new Date(Date.now()).toISOString();
  newTicket.creationDate = createdAt;
  newTicket.save().then(tickets => res.json(tickets));
});



module.exports = router;