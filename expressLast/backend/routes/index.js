var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/failed', function(req, res){
  //flash require 2 argument first is name and second is value
  req.flash("age", 12)
  res.send("Data saved to Flash")
})

router.get('/check', function(req, res){
  //to get flash data
  console.log(req.flash("age"))
  res.send("Check the terminal for flash data")
})

module.exports = router;
