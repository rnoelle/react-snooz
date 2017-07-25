const mongoose = require('mongoose')
    , Group = require('./Group')
    , Schema = mongoose.Schema;

const User = Schema({
  display_name : String,
  email : String,
  group : [{type: Schema.Types.ObjectId, ref: 'Group'}]
})

module.exports = mongoose.model('User', User);
