const mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.Types.ObjectId;

const toDoSchema = Schema({
  text  : String,
  date_created : {type: Date},
  snoozes : [{type: Date}],
  _user : {type: ObjectId, ref: 'User'},
  _collection : {type: ObjectId, ref: 'Collection'}
});

const ToDo = mongoose.model('ToDo', toDoSchema);
module.exports = ToDo;
