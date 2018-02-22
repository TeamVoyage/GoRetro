const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../database/index');

const url = 'http://localhost:8080';
const User = db.User;

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: '/auth/google/redirect',
  passReqToCallback: true
},
function(req, accessToken, refreshToken, profile, done) {
  console.log(profile);
  db.updateOrCreateUser({ fbId: profile.id, displayName: profile.displayName, sessionID: req.sessionID }, function (err, user) {
    return done(err, user);
  });
}
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    if (err) {
      done(err, null);
    } else {
      done(err, user);
    }
  });
});