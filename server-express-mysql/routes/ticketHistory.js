var express = require("express");
var router = express.Router();
const mysql = require('mysql2');
var models = require("../models");



router.get("/", function (req, res, next) {
    models.Ticket.findAll().then(tickets => res.json(tickets));
});

/*****************Manager Ticket List Queries**************** */

router.get('/new', function (req, res, next) {
    models.Ticket.findAll({
        where:{ assigned: 0 }
    }).then(tickets => res.json(tickets));
});

router.get('/pending', function (req, res, next) {
    models.Ticket.findAll({
        where:{ status: 'pending', assigned: true }
    }).then(tickets => res.json(tickets));
});

router.get('/complete', function (req, res, next) {
    models.Ticket.findAll({
        where:{ status: 'complete' }
    }).then(tickets => res.json(tickets));
});

router.get('/archived', function (req, res, next) {
    models.Ticket.findAll({
        where:{ status: 'archived' }
    }).then(tickets => res.json(tickets));
});

/******************Manager Selected Ticket ***********************/

router.get("/:id", function(req, res, next) {       
    let ticketId = parseInt(req.params.id);             
    models.Ticket.findByPk(ticketId)
      .then(ticket => res.json(ticket));                 
});


module.exports = router;
