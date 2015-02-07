var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  uni: String,
  name: String,
  phone: String,
  trips: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Person', personSchema);
