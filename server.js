var express = require('express');
var passport = require('passport');
var BnetStrategy = require('passport-bnet').Strategy;

var BNET_ID = process.env.BNET_ID
var BNET_SECRET = process.env.BNET_SECRET

var BnetStrategy = require('passport-bnet').Strategy;
var BNET_ID = process.env.BNET_ID
var BNET_SECRET = process.env.BNET_SECRET

var app = express();

// Use the BnetStrategy within Passport.
passport.use(new BnetStrategy({
    clientID: BNET_ID,
    clientSecret: BNET_SECRET,
    callbackURL: "https://localhost:8080/auth/bnet/callback",
    region: "us"
}, function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));

app.get('/auth/bnet',
    passport.authenticate('bnet'));

app.get('/auth/bnet/callback',
    passport.authenticate('bnet', { failureRedirect: '/' }),
    function(req, res){
        res.redirect('/');
    });

let port = process.env.PORT || 8080
console.log(`Listening on port ${port}. Go /login to initiate authentication flow.`)
app.listen(port)