var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function (req, res, next) {
  models.Ticket.findAll().then(tickets => res.json(tickets));
});

router.post("/createTicket", function(req, res, next) {
  let newTicket = new models.Ticket();
  newTicket.category = req.body.category;
  newTicket.subCategory = req.body.subCategory;
  newTicket.priority = req.body.priority;
  newTicket.access = req.body.access;
  newTicket.note = req.body.note;
  newTicket.save().then(tickets => res.json(tickets));
});

// router.post('/createTicket', function (req, res, next) {
//   models.Ticket
//     .findOrCreate({
//       where: {
//         ticketId: req.body.ticketId
//       },
//       defaults: {
//         category = req.body.category,
//         subCategory = req.body.subCategory,
//         priority = req.body.priority,
//         access = req.body.access,
//         note = req.body.note

//       }
//     })
//     .spread(function (result, created) {
//       if (created) {
//         res.send('Ticket successfully created');
//         res.redirect('/users/tenantprofile');
//       } else {
//         res.send('This ticket already exists');
//       }
//     });
// });



module.exports = router;