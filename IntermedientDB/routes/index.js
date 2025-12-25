var express = require('express');
var router = express.Router();
const userModel = require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/create", async function(req, res){
  const userData = await userModel.create({
    username: "Manita",
  nickname: "ManitaPrajapati",
  description: "Hy this is my self manita 40 year and i'm a businessman",
  categories: [ 'moti', 'murti', 'matka']
  })
  res.send(userData)
})

router.get("/find", async function(req, res){

  //-------------------------- Search with incase sensative
  //Find don't search with sensetive thing and half written thing it povide exact match
  //RegExp help us to solve this problem
  //It has only one problem it show all data that contain that specific word
  //To solve this problem regext with us ^ and $
  //^ insure our starting will be like that
  //$ insure our end to start is like that
  //so if use both of them at a time the only main contain will get search
  //let regrex = new RegExp("^man$", 'i')
  //let user = await userModel.find({username: regrex})

  //------------------------ array of category find in all users
  // It will search with in all users that hold given property
    // let user = await userModel.find({categories: {$all: ["shop", "flex"]}})

    //------------------------ Find data with date
    // It will find data, in given range, 
    //first argument is greater then equal to and second is less then equal to
    // let date1 = new Date('2025-12-20')
    // let date2 = new Date('2025-12-21')
    // let user = await userModel.find({datecreated: {$gte:date1, $lte: date2}})

    //------------------------ Find data that have key we are searching
    // let user = await userModel.find({datecreated: {$exists: true}}) //give all users that have datecreated key even if they hold any value or empty
    // let user = await userModel.find({password: {$exists: true}}) //there are no such value

    //------------------------ Find data with specific length
    let user = await userModel.find({
      $expr: {
        $and: [
          {$gte: [{$strLenCP: '$nickname'}, 0]},
          {$lte: [{$strLenCP: '$nickname'}, 12]}
        ]
      }
    })

  res.send(user)
})

module.exports = router;
