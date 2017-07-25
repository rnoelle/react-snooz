const mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.Types.ObjectId;

const groupSchema = Schema({
  _user : {type: ObjectId},
  name : String,
  color : String
});


const Group = mongoose.model('Group', groupSchema);
module.exports = Group;
