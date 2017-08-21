const mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.Types.ObjectId;

const toDoSchema = Schema({
  text  : String,
  date_created : {type: Date},
  snoozes : [{type: Date}],
  notify : {type: Date},
  started : {type: Date},
  finished : {type: Date},
  _user : {type: ObjectId, ref: 'User'},
  category : String
});

const ToDo = mongoose.model('ToDo', toDoSchema);
module.exports = ToDo;
