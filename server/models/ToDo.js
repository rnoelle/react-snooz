const mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.Types.ObjectId;

const ToDo = Schema({
  _id   : Number,
  text  : String,
  _user : {type: ObjectId, ref: 'User'},
  snoozes : [{type: Date}]
});

module.exports = ToDo;
