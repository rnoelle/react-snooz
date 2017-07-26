const mongoose = require('mongoose')
    , User = require('../models/User')
    ;

module.exports = {
  checkForUser(profile, done) {
      User.findOne({'auth0Id': profile._json.sub}).exec((err, user) => {
      if (err) {
        return console.log(err);
      }
      if (user === null) {
        let newUser = {
          auth0Id: profile._json.sub,
          display_name: profile.nickname,
          email: profile.email,
          groups: []
        }
        User.create(newUser, (err, newUser) => {
          done(null, user)
        })
      } else {
        done(null, user);
      }

    })
  }

}
