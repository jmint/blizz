import React, { Component } from 'react'
import styles from './App.css'
var BNET_ID = "fvg59n66a3ndw8scprhxatrdnsx6qzr8"
var BNET_SECRET = "MDdwRkG6rVSwdAX783yJ5SS26pUWNH3C"
var BnetStrategy = require('passport-bnet').Strategy;
import passport from 'passport'
import axios from 'axios'


class App extends Component {

  componentDidMount() {
    passport.use(new BnetStrategy({
      clientID: BNET_ID,
      clientSecret: BNET_SECRET,
      callbackURL: "https://naughty-archimedes-72c310.netlify.com/",
      region: "us"
    }, function (accessToken, refreshToken, profile, done) {
        console.log(profile, "profile")
        return done(null, profile);
    }));
    
    axios.get('/',
    passport.authenticate('bnet'))
    .then(function (response){
      console.log(response);
    });

    axios.get('/',
    passport.authenticate('bnet', { failureRedirect: '/' }),
    function(req, res){
        res.redirect('/');
        console.log(req, res);
    });


    
  }

  render() {
    return (
      <div className={styles.app}>
        
      </div>
    )
  }
}

export default App