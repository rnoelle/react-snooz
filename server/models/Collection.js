const mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.Types.ObjectId;

const collectionSchema = Schema({
  _user : {type: ObjectId},
  name : String,
  color : String
});

export default mongoose.model('Collection', collectionSchema);
