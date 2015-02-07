var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: "zach", body: "test"});
});

router.get('/api/', function(req, res, next) {
  res.json({ message: 'Hello World'});
});

module.exports = router;
