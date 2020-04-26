var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  models.Ticket.findAll().then(tickets => res.json(tickets));
});

//GET LIST OF NEW TICKETS
 router.get("/new", function(req, res, next) {
   models.User.findAll({
     where:{ status: "pending" }  //status pending
   }).then(users => res.json(users));
});

//CREATE NEW TICKET

router.post("/", function(req, res, next) {
  let newTicket = new models.Ticket();
  newTicket.unitId = parseInt(req.body.unitId);
  newTicket.category = req.body.category;
  newTicket.priority = req.body.priority;
  newTicket.access = req.body.access;
  newTicket.note = req.body.note;
  newTicket.status = req.body.status;
  newTicket.mainNote = req.body.mainNote;
  var createdAt = new Date(Date.now()).toISOString();
  newTicket.creationDate = createdAt;
  newTicket.save().then(tickets => res.json(tickets));
});

//SELECT TICKET BY ID
router.get("/:id", function (req, res, next) {
  let ticketId = parseInt(req.params.id);
  models.Ticket.findByPk(ticketId)
    .then(ticket => res.json(ticket));
});

//UPDATE TICKET INFORMATION
router.put("/:id", function(req, res, next) {
  readStatus = req.body.newTicketStatus;
  if (readStatus == "complete") {
    var completeDate = new Date(Date.now()).toISOString(); //code for getting current time saved in variable createdAt
    var complete = true; 

  } else {
    var complete = false;
  }
  models.Ticket.update(
    {
      status: req.body.newTicketStatus,
      mainNote: req.body.newTicketNote,
      completeDate: completeDate,
      complete: complete

    },
    {
      where: { ticketId: parseInt(req.params.id) }
    }
  ).then(ticket => res.json(ticket));
});

module.exports = router;