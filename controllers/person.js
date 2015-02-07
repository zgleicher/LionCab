var mongoose = require('mongoose'),
    Person = mongoose.model('Person');

exports.postPerson = function(req, res, next) {
  var person = new Person();
  person.uni = req.body.uni;
  person.name = req.body.name;
  person.phone = req.body.phone;
  person.save();
  return res.json({
    message: 'success'
  });
};

exports.getPersonByUni = function(req, res, next) {
  Person.find({ uni: req.params.uni }, function(err, data) {
    return res.json(data);
  });
};
