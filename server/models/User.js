const mongoose = require('mongoose')
    , Schema = mongoose.Schema


const User = Schema({
  auth0Id : String,
  display_name : String,
  email : String,
})

module.exports = mongoose.model('User', User);
