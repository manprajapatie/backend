var express = require('express');
var router = express.Router();

/* GET home page. */

//we already have app.express() in app.js that's why we are using here this syntax
//In normal express file we run our code with
// npx nodemon filename
//But in express Generator we are run our code with only
//npx nodemon
router.get('/', function(req, res, next) {
  res.send('man');
});

module.exports = router;
