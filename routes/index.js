var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var info_pattern = "Sampa, A, B, 10\r\nSampa, B, D, 15\r\nSampa, A, C, 20\r\nSampa, C, D, 30\r\nSampa, B, E, 50\r\nSampa, D, E, 30"
  res.render('index', {info_pattern:info_pattern});
});

router.get('/figure', function(req, res, next) {
  res.send('figure');
});


module.exports = router;
