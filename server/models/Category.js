const mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.Types.ObjectId;

const categorySchema = Schema({
  _user : {type: ObjectId, ref: 'User'},
  name : String,
  color : String
});


const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
