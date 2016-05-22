const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('./db').user
const ObjectID = require('mongodb').ObjectID
const md5 = require('md5')

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(_id, done) {
    User.findOne({_id: new ObjectID(_id)}, function(err, user){
        done(err, user);
    });
});

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password !== md5(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));

module.exports = passport;
