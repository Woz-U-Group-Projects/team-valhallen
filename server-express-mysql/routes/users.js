var express = require("express");
var router = express.Router();
var models = require("../models");
// var passport = require('../services/passport');
// var authService = require('../services/auth');

//GET LIST OF ALL USERS
router.get("/", function(req, res, next) {
  models.User.findAll().then(users => res.json(users));
});

//GET LIST OF NEW USERS
router.get("/new", function (req, res, next) {
  models.User.findAll({
    where: { userType: null }
  }).then(users => res.json(users));
});

//GET LIST OF TENANTS
router.get("/tenants", function (req, res, next) {
  models.User.findAll({
    where: { userType: "Tenant", archive: false }
  }).then(users => res.json(users));
});

//GET LIST OF TECHNICIANS
router.get("/techs", function (req, res, next) {
  models.User.findAll({
    where: { userType: "Technician", archive: false }
  }).then(users => res.json(users));
});

//GET LIST OF MANAGERS
router.get("/mgrs", function (req, res, next) {
  models.User.findAll({
    where: { userType: "Manager", archive: false }
  }).then(users => res.json(users));
});
//------------------------------tech skill---------------------------------------

router.post("/techSkills", function (req, res, next) {
  let newTechSkill = new models.TechSkill();
  newTechSkill.userId = parseInt(req.body.userId);
  newTechSkill.electrical = req.body.electrical;
  newTechSkill.plumbing = req.body.plumbing;
  newTechSkill.hvac = req.body.hvac;
  newTechSkill.appliance = req.body.appliance;
  newTechSkill.general = req.body.general;
  newTechSkill.save()
    .then(skills => res.json(skills));
});

//-----------------------------Tech skills End------------------------------------


router.put("/newConfirmType", function (req, res, next) {
  models.User.update(
    {
      userType: req.body.userType,
      unitId: req.body.unitId,
      unitName: req.body.unitId
    },
    {
      where: { userId: req.body.userId }
    }
  );
});

//------------------------------User unit #---------------------------------------
router.put("/unitNumber", function (req, res, next) {
  models.PropertyUnit.update(
    {
      userId: req.body.userId
    },
    {
      where: { unitName: req.body.unitName }
    }
  );
});
//------------------------------end User Unit #---------------------------------------

//GET SELECTED USER BY USERID
router.get("/:id", function (req, res, next) {       //get userID from DB
  let userId = parseInt(req.params.id);
  models.User.findByPk(userId)
    .then(user => res.json(user)); //return user as json obj
});

//UPDATE USER INFORMATION
router.put("/:id", function (req, res, next) {
  models.User.update(
    {
      email: req.body.newEmail,
      password: req.body.newPassword,
      phone: req.body.newPhone
    },
    {
      where: { userId: parseInt(req.params.id) }
    }
  ).then(user => res.json(user));
});

//GET SELECTED TENANT BY USERID
router.get("/tenant/:id", function (req, res, next) {       //get userID from DB
  console.log('from within the query >>>>>' + req.params.id);
  let userId = parseInt(req.params.id);
  models.User.findByPk(userId)
    .then(user => res.json(user))
    .catch(err => {
      res.status(400);
      res.send(err.message);
    });                  //return user as json obj
});

//UPDATE TENANT INFORMATION
router.put("/tenant/:id", function (req, res, next) {
  models.User.update(
    {
      fName: req.body.newFirstName,
      lName: req.body.newLastName,
      email: req.body.newEmail,
      phone: req.body.newPhone
    },
    {
      where: { userId: parseInt(req.params.id) }
    }
  ).then(user => res.json(user));
});

//SIGN UP NEW USER
router.post("/signup", function (req, res, next) {
  let newUser = new models.User();
  newUser.lName = req.body.lName;
  newUser.fName = req.body.fName;
  newUser.email = req.body.email;
  newUser.phone = parseInt(req.body.phone);
  newUser.password = req.body.password;
  newUser.userType = req.body.userType;
  newUser.save()
  .then(user => res.json(user))
  .catch(err => {
    res.status(400);
    res.send(err.message);
  });
});

//ARCHIVE USER
router.put("/archive/:id", function(req, res, next) {
  models.User.update(
    { archive: true },
    { where: { userId: parseInt(req.params.id) } }
  );
});

//DELETE USER
router.delete("/:id", function(req, res, next) {
  let userId = parseInt(req.params.id);
  models.User.findByPk(userId)
    .then(user => user.destroy())
    .then(() => res.send({ userId }))
    .catch(err => res.status(400).send(err));
});


//login router --------------------------------------------------------------*

router.post('/login', function (req, res, next) {
  models.User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  }).then(user => {
    if (!user) {
      console.log('User not found')
      return res.status(401).json({
        message: "Login Failed"
      });
    }
    if (user) {
      let printUser = JSON.stringify(user);
      console.log(printUser);
      res.send(printUser)
      return (printUser);
    } else {
      console.log('wrong Password');
      res.redirect('/login')
    }
  });
});

// end login Router -------------------------------------------------*

module.exports = router;