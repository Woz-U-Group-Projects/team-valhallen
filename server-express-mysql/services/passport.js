var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var models = require('../models');

// Configure the login validation
passport.use(
  'local',
  new LocalStrategy(function (email, password, done) {
    models.User.findOne({ where: { email: email } })
      .then(user => {
        if (!user) {
          console.log('didnt work');
          return done(null, false, { message: 'Incorrect email.' });
        }
        if (user.password !== password) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      })
      .catch(err => {
        if (err) { return done(err); }
      });
  })
);

// Stores the user id in the user session
passport.serializeUser((user, callback) => {
  callback(null, user.userId);
});

// Queries the database for the user details and adds to the request object in the routes
passport.deserializeUser((userId, callback) => {
  models.User
    .findByPk(userId)
    .then(user => callback(null, user))
    .catch(err => callback(err));
});

module.exports = passport;