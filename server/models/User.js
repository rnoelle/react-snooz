const mongoose = require('mongoose')
    , Collection = require('./Collection')
    , Schema = mongoose.Schema;

const User = Schema({
  display_name : String,
  email : String,
  collections : [{type: Collection}]
})

module.exports = mongoose.model('User', User);
