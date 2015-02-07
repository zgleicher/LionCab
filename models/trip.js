var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tripSchema = new Schema({
  person_id: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
  from: String,
  to: String,
  date: Date
});

module.exports = mongoose.model('Trip', tripSchema);
