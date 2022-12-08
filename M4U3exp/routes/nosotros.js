var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('En esta sección va a haber un párrafo para Carlos y otro para Susana.');
});

module.exports = router;
