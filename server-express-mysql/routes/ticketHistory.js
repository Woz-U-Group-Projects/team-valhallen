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
        where: { assigned: false },
        include: ['ticketTech']
    })
    .then(tickets => {
        const resObj = tickets.map(ticket => {
            return Object.assign(
                {},
                {
                    ticketId: ticket.ticketId,
                    unitId: ticket.unitId,
                    creationDate: (ticket.creationDate).toLocaleDateString(),
                    category: ticket.category,
                    status: ticket.status,
                    techFName: "Not Yet",
                    techLName: " Assigned",
                    dueDate: "Not Yet Assigned"
                }
            )
        })
        res.json(resObj)
    });
});

router.get('/pending', function (req, res, next) {
    models.Ticket.findAll({
        where: { status: 'Pending', assigned: true },
        include: ['ticketTech']
    })
    .then(tickets => {
        const resObj = tickets.map(ticket => {
            return Object.assign(
                {},
                {
                    ticketId: ticket.ticketId,
                    unitId: ticket.unitId,
                    creationDate: (ticket.creationDate).toLocaleDateString(),
                    category: ticket.category,
                    status: ticket.status,
                    techFName: ticket.ticketTech.fName,
                    techLName: ticket.ticketTech.lName,
                    dueDate: (ticket.dueDate).toLocaleDateString(),
                }
            )
        })
        res.json(resObj)
    });
});

router.get('/complete', function (req, res, next) {
    models.Ticket.findAll({
        where: { status: 'Complete', archived: false },
        include: ['ticketTech']
    })
    .then(tickets => {
        const resObj = tickets.map(ticket => {
            return Object.assign(
                {},
                {
                    ticketId: ticket.ticketId,
                    unitId: ticket.unitId,
                    creationDate: (ticket.creationDate).toLocaleDateString(),
                    category: ticket.category,
                    status: ticket.status,
                    techFName: ticket.ticketTech.fName,
                    techLName: ticket.ticketTech.lName,
                    dueDate: (ticket.dueDate).toLocaleDateString(),
                }
            )
        })
        res.json(resObj)
    });
});
router.get('/inProgress', function (req, res, next) {
    models.Ticket.findAll({
        where: { status: 'inProgress', archived: false },
        include: ['ticketTech']
    })
    .then(tickets => {
        const resObj = tickets.map(ticket => {
            return Object.assign(
                {},
                {
                    ticketId: ticket.ticketId,
                    unitId: ticket.unitId,
                    creationDate: (ticket.creationDate).toLocaleDateString(),
                    category: ticket.category,
                    status: ticket.status,
                    techFName: ticket.ticketTech.fName,
                    techLName: ticket.ticketTech.lName,
                    dueDate: (ticket.dueDate).toLocaleDateString(),
                }
            )
        })
        res.json(resObj)
    });
});
router.get('/onHold', function (req, res, next) {
    models.Ticket.findAll({
        where: { status: 'onHold', archived: false },
        include: ['ticketTech']
    })
    .then(tickets => {
        const resObj = tickets.map(ticket => {
            return Object.assign(
                {},
                {
                    ticketId: ticket.ticketId,
                    unitId: ticket.unitId,
                    creationDate: (ticket.creationDate).toLocaleDateString(),
                    category: ticket.category,
                    status: ticket.status,
                    techFName: ticket.ticketTech.fName,
                    techLName: ticket.ticketTech.lName,
                    dueDate: (ticket.dueDate).toLocaleDateString(),
                }
            )
        })
        res.json(resObj)
    });
});

router.get('/archived', function (req, res, next) {
    models.Ticket.findAll({
        where: { status: 'Complete', archived: true },
        include: ['ticketTech']
    })
    .then(tickets => {
        const resObj = tickets.map(ticket => {
            return Object.assign(
                {},
                {
                    ticketId: ticket.ticketId,
                    unitId: ticket.unitId,
                    creationDate: (ticket.creationDate).toLocaleDateString(),
                    category: ticket.category,
                    status: ticket.status,
                    techFName: ticket.ticketTech.fName,
                    techLName: ticket.ticketTech.lName,
                    dueDate: (ticket.dueDate).toLocaleDateString(),
                }
            )
        })
        res.json(resObj)
    });
});

router.get("/byUnit/:id", function (req, res, next) {
    let unitId = parseInt(req.params.id);
    models.Ticket.findAll({
        where: { unitId: unitId },
        include: ['ticketTech']
    })
    .then(tickets => {
        const resObj = tickets.map(ticket => {
            return Object.assign(
                {},
                {
                    ticketId: ticket.ticketId,
                    dueDate: (ticket.dueDate).toLocaleDateString(),
                    category: ticket.category,
                    status: ticket.status,
                    techFName: ticket.ticketTech.fName,
                    techLName: ticket.ticketTech.lName
                }
            )
        });
        res.json(resObj)
    });
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
                    creationDate: (ticket.creationDate).toLocaleDateString(),
                    priority: ticket.priority,
                    tenantFName: ticket.ticketUser.fName,
                    tenantLName: ticket.ticketUser.lName,
                    mainNote: ticket.mainNote
                }
            )
            res.json(resObj)
        });
});

router.put("/:id", function (req, res, next) {
    models.Ticket.update(
        {
            techId: req.body.tech,
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
