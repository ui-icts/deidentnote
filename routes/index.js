var express = require('express');
var router = express.Router();
var fs = require('../util/loadFile');


//console.log("Note Count: " + notes.length)

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Deidentified Clinic Notes'});
});

module.exports = router;
