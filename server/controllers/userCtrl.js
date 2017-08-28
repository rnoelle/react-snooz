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
          console.log('new user', newUser);
          done(null, user)
        })
      } else {
        console.log('found user');
        done(null, user);
      }

    })
  },

  isAuthenticated(req, res) {
    if (req.user) {
      res.status(200).send();
    } else {
      res.status(401).send();
    }
  },

  editUser(req, res) {
    console.log('editing', req.body);
    User.findOneAndUpdate({_id: req.user._id}, req.body, (err, user) => {
      if (err) res.status(500).send(err);
      res.status(200).send();
    })
  }

}
