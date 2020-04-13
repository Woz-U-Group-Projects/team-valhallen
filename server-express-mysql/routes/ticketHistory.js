var express = require("express");
var router = express.Router();
var models = require("../models");


router.get("/", function (req, res, next) {
    models.Ticket.findAll().then(tickets => res.json(tickets));
});



module.exports = router;
