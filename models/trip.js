var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tripSchema = new Schema({
  person_id: Schema.Types.ObjectId,
  from: String,
  to: String,
  date: Date
});

module.exports = mongoose.model('Trip', tripSchema);
