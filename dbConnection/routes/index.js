var express = require('express');
var router = express.Router();

//imported from user.js
const userModel = require('./users')

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//express route will start with / not ./
router.get('/create', async function (req, res) {

  //userModel.create() is a asynchronos function that, to make it run first we wrap it into async await
  //it is return whole data so we can store it in variable

  // const createdUser = await userModel.create({
  //   username: "Man19",
  //   name: "Man",
  //   age: 19
  // });
  // res.send(createdUser)
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

//-------------- Session ---------------
router.get('/', function(req, res){
  //this is how we can setup session and we can give value waterver we want like req.session.humtup
  //It will save on server and we can access it for specific user, and get value of it in any other route as well
  req.session.ban = true
  res.render("index")
})

router.get('/banned', function(req, res){
  //this is how we can setup session and we can give value waterver we want like req.session.humtup
  //It will save on server and we can access it for specific user, and get value of it in any other route as well
  //when we save the file, it will restart the server therefore session will be removed lekin yah condition localhost me hi face karte he project banate time save karna padta he to ache se pad lena ise
 if(req.session.ban === true){
   res.send("You Are Blocked")
 } else{
  res.send("You Are UuuunnnnnBlock")
 }
})

//-------------- Delete Session ---------------
router.get('/deleteBan', function(req, res){

  //destroy take a call back function in which he take a error argument
  req.session.destroy(function(err){
    if(err) throw err
    res.send("ban removed")
    
  })
})

//-------------- Cookies ---------------
//Cookies is set on frontend Part

router.get("/cookie", function(req, res){
  //it take method cookie that hold first is name and second is value argument
  res.cookie("age", 25)  
})

router.get("/readCookie", function(req, res){
//because cookies is set on frontend part, if we want to use it in backend we get it by req because req hold data client
console.log(req.cookies);
//console.log(req.cookies.age);
res.send("check")
})

router.get("/deleteCookie", function(req, res){

req.cookies.clearCookie("age")
res.send("Clear Cookie")

})

module.exports = router;
