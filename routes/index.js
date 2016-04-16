var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    pagetitle: 'My Shot' ,
    title: 'Get Ready',
    description: '...and start clicking!'
  });
});

module.exports = router;
