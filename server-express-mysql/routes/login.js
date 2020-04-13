var express = require("express");
var router = express.Router();
var models = require("../models");

// router.get('/', function(req, res, next) {
//   models.User.findAll().then(users => {
//     res.json(users);
//   });
// });
router.get('/', function(req, res, next) {
  models.User.findAll({}).then(foundUsers => {
    const mappedUsers = foundUsers.map(user => ({
      userId: user.userId,
      users: `${user.email} ${user.password}`
    }));
    res.json(mappedUsers);
  });
});

router.post('/', function(req, res, next) { 
  models.User
  .findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  })
  .then(users => {
    res.json(users);
  });
});
  
   
  module.exports = router;