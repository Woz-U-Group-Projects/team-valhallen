var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var models = require("./models");
var cors = require("cors");
// var passport = require("passport");
// var session = require("express-session");


var usersRouter = require("./routes/users");
var ticketsRouter = require("./routes/tickets");
var ticketHistoryRouter = require("./routes/ticketHistory");
var propertyUnitsRouter = require("./routes/propertyUnits");


var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());



app.use("/users", usersRouter);
app.use("/tickets", ticketsRouter);
app.use("/ticketHistory", ticketHistoryRouter);
app.use("/propertyUnits", propertyUnitsRouter);


models.sequelize.sync().then(function() {
  console.log("DB Sync'd up");
});

module.exports = app;
