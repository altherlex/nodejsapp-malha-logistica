var express = require('express');
var router = express.Router();
//var cheerio = require('cheerio');
var $ = require('cheerio');

/* GET home page. */
router.get('/', function(req, res, next) {
  var info_pattern = "Sampa, A, B, 10\r\nSampa, B, D, 15\r\nSampa, A, C, 20\r\nSampa, C, D, 30\r\nSampa, B, E, 50\r\nSampa, D, E, 30"
  res.render('index', {info_pattern:info_pattern});
});

router.get('/figure', function(req, res, next) {
  res.send('figure');
});

router.get('/paths/create_massive', function(req, res, next) {
/*
  paths = []
  params[:massive_paths].split(/\r\n/).each do |line|
    paths << Path.massive_new(*line.split(','))
  end
  Path.import(paths)
  redirect_to({action: :index }, notice: "Paths was successfully created.")  
*/     
  var paths = new Array;
  var p = req.query.massive_paths.split(/\r\n/);
  $(p).each(function(i,v){
    console.log(v.split(','));
  });
  res.redirect('/');
});


module.exports = router;
