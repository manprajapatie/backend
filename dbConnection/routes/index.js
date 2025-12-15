var express = require('express');
var router = express.Router();

//imported from user.js
const userModel = require('./users')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
//express route will start with / not ./
router.get('/create', async function (req, res) {

  //userModel.create() is a asynchronos function that, to make it run first we wrap it into async await
  //it is return whole data so we can store it in variable

  const createdUser = await userModel.create({
    username: "Man19",
    name: "Man",
    age: 19
  });
  res.send(createdUser)
})

router.get("/allusers", async function(req, res){
  //in this find() will send all the user collection
  let allusers = await userModel.find();

  //let filterusers = await userModel.findOne({username: "man19"});
  //it will find and give value that is we provide it in findone() Method and return null if there are no such value


//  let deleteUser = await userModel.findOneAndDelete({username: "man19"});
// It will delete that user when we hit, that route (Route bhi change karna rahega res bhi bhejna rahega tab hoga same as it like we are doing with all users)

  res.send(allusers)
})

module.exports = router;
