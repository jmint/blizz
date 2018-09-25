import React, { Component } from 'react'
import styles from './App.css'
import  Strategy from 'passport-bnet'
var BNET_ID = "fvg59n66a3ndw8scprhxatrdnsx6qzr8"
var BNET_SECRET = "MDdwRkG6rVSwdAX783yJ5SS26pUWNH3C"
import passport from 'passport-oauth2'


class App extends Component {

  componentDidMount() {
    passport.use(new Strategy({
      clientID: BNET_ID,
      clientSecret: BNET_SECRET,
      callbackURL: "http://localhost:8080/",
      region: "us"
    }))
  }

  render() {
    return (
      <div className={styles.app}>
        
      </div>
    )
  }
}

export default App