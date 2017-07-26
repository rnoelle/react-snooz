const mongoose = require('mongoose')
    , Group = require('./Group')
    , Schema = mongoose.Schema;

const User = Schema({
  auth0Id : String,
  display_name : String,
  email : String,
  groups : [{type: Schema.Types.ObjectId, ref: 'Group'}]
})

module.exports = mongoose.model('User', User);
