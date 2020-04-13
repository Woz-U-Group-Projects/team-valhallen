var express = require("express");
var router = express.Router();
var models = require("../models");
var passport = require('../services/passport');



router.get("/", function(req, res, next) {
  models.User.findAll().then(users => res.json(users));
});


router.get("/signup", function(req, res, next) {
  models.User.findAll().then(users => res.json(users));
  });
  ​
  router.post("/signup", function(req, res, next) {
    let newUser = new models.User();
    newUser.fName = req.body.fName;
    newUser.lName = req.body.lName;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.phone = req.body.phone;
    newUser.save().then(user => res.json(user));
  }); 
  

router.post('/login', passport.authenticate('local', { failureRedirect: '/users/login' }),
  function (req, res, next) { res.redirect('profile').then(user => res.json(user)) });




router.get('/profile', function (req, res, next) {
  if (req.user) {
    models.User
      .findByPk(parseInt(req.user.userId))
      .then(user => {
        if (user) {
          res.render('profile', {
            fName: user.fName,
            lName: user.lName,
            email: user.email,
            unitId: user.unitId
          }).then(user => res.json(user));
        } else {
          res.send('User not found');
        }
      });
  } 
});
// router.delete("/:id", function(req, res, next) {
//   let userId = parseInt(req.params.id);
//   models.User.findByPk(userId)
//     .then(user => user.destroy())
//     .then(() => res.send({ userId }))
//     .catch(err => res.status(400).send(err));
// });

router.put("/:id", function(req, res, next) {
  models.User.update(
    {
      fName: req.body.fName,
      lName: req.body.lName,
      email: req.body.email,
      phone: req.body.phone
    },
    {
      where: { userId: parseInt(req.params.id) }
    }
  ).then(users => res.json(users));
});



module.exports = router;
