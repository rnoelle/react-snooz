const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

const User = Schema({
  _id : Number,
  display_name : String,
  email : String
})

module.exports = mongoose.model('User', User);
