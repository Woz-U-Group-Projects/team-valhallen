var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  models.User.findAll().then(users => res.json(users));
});

// router.get('/:id', function (req, res, next) {
//   let userId = parseInt(req.params.id);
//   let userIdQuery = `SELECT * FROM users WHERE userId=${userId}`;
//   models.User.findByPk(userIdQuery, (err, result) => {
//     if (result.length > 0) {
//       res.json(result, {
//         userId: result[0]
//       });
//     } else {
//       res.send('not a valid id');
//     }
//   }).then(users => res.json(users));
// });

router.get('/:id', function(req, res, next) {
  models.User.findAll({}).then(foundUsers => {
    const users = foundUsers.map(user => ({
      UserId: user.userId,
      users: `${user.email}, ${user.password}`
    }));
    res.json(users);
  });
});

// router.put("/:id", function (req, res, next) {
//   models.User.update({
//     fName: req.body.fName,
//     lName: req.body.lName,
//     email: req.body.email,
//     phone: req.body.phone
//   },
//     {
//       where: { userId: parseInt(req.params.userId) }
//     }).then(users => res.json(users));
// });



module.exports = router;