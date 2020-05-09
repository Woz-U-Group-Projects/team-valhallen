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
        where: { assigned: false }
    }).then(tickets => res.json(tickets));
});

router.get('/pending', function (req, res, next) {
    models.Ticket.findAll({
        where: { status: 'Pending', assigned: true }
    }).then(tickets => res.json(tickets));
});

router.get('/complete', function (req, res, next) {
    models.Ticket.findAll({
        where: { status: 'Complete', archived: false }
    }).then(tickets => res.json(tickets));
});
router.get('/inProgress', function (req, res, next) {
    models.Ticket.findAll({
        where: { status: 'inProgress', archived: false }
    }).then(tickets => res.json(tickets));
});
router.get('/onHold', function (req, res, next) {
    models.Ticket.findAll({
        where: { status: 'onHold', archived: false }
    }).then(tickets => res.json(tickets));
});

router.get('/archived', function (req, res, next) {
    models.Ticket.findAll({
        where: { status: 'Complete', archived: true }
    }).then(tickets => res.json(tickets));
});

router.get("/byUnit/:id", function (req, res, next) {
    let unitId = parseInt(req.params.id);
    models.Ticket.findAll({
        where: { unitId: unitId },
        include: ['ticketTech']
    })
        .then(ticket => res.json(ticket));
});

/******************Manager Selected Ticket ***********************/

router.get("/:id", function (req, res, next) {
    let ticketId = parseInt(req.params.id);
    models.Ticket.findByPk(ticketId, { include: ['ticketUser'] })
        .then(ticket => {
            const resObj = Object.assign(
                {},
                {
                    ticketId: ticket.ticketId,
                    unitId: ticket.unitId,
                    category: ticket.category,
                    note: ticket.note,
                    creationDate: ticket.creationDate,
                    priority: ticket.priority,
                    tenantFName: ticket.ticketUser.fName,
                    tenantLName: ticket.ticketUser.lName
                }
            )
            res.json(resObj)
        });
});

router.put("/:id", function (req, res, next) {
    models.Ticket.update(
        {
            techid: req.body.tech,
            assigned: true,
            dueDate: req.body.dueDate
        },
        {
            where: { ticketId: parseInt(req.params.id) }
        }
    ).then(ticket => res.json(ticket));
});

router.put("/archTkt/:id", function (req, res, next) {
    models.Ticket.update(
        {
            archived: true
        },
        {
            where: { ticketId: parseInt(req.params.id) }
        }
    ).then(ticket => res.json(ticket));
    console.log("ticket #" + req.params.id + " is archived");
});


module.exports = router;
