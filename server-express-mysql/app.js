var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var models = require("./models");
var cors = require("cors");
var passport = require('passport');
var session = require('express-session');

var tasksRouter = require("./routes/tasks");
var usersRouter = require("./routes/users");
var loginRouter = require("./routes/login");
var tenantRouter = require("./routes/tenant");
var ticketHistoryRouter = require("./routes/ticketHistory");
var ticketsRouter = require("./routes/tickets");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(session({ secret: 'perilous journey' }));
app.use(passport.initialize());  
app.use(passport.session());

app.use("/tasks", tasksRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/tenant", tenantRouter);
app.use("/ticketHistory", ticketHistoryRouter);
app.use("/tickets", ticketsRouter);


models.sequelize.sync().then(function() {
  console.log("DB Sync'd up");
});

module.exports = app;
