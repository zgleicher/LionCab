var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  uni: String,
  name: String,
  phone: String,
  trips: [ [{ type: Schema.Types.ObjectId, ref: 'Trip'}] ]
});

module.exports = mongoose.model('Person', personSchema);
