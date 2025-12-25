var express = require('express');
var router = express.Router();

//------------- 5 import userModel and passport
const userModel = require("./users")
const passport = require("passport")

//------------- 6 with them we can use local strategy
// (like google, github authentication This is local strategy login with local)
const localStrategy = require("passport-local")
passport.use(new localStrategy(userModel.authenticate()))

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// ------------------- 9 profile route (can be created anytime)
//isLoggedIn is a protection we made in 11 (without it will also run)
router.get('/', isLoggedIn, function (req, res) {
  res.send("Welcome to Profile")
})

router.post('/register', function (req, res) {
  let userdata = new userModel({
    username: String,
    secret: String
  })

  //------------------ 7 first 2 line (userModel .then) create user account
  //------------------ 8 passport.authenticate and res.redirect, allow user to login and redirect to profile
  userModel.register(userdata, req.body.password)
    .then(function (registereduser) {
      passport.authenticate("local")(req, res, function () {
        res.redirect('/profile')
      })
    })
})

//------------------ 9 Log in authentication
// put middleware passport.authenticate it take first auth type and second object
router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/"
}), function (req, res) { })

//------------------ 10 Log Out
app.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/')
  })
})

// ----------------- 11 isLoggedIn For Protection
// check if you are logged in or not, if not go back to /
// we can write it in any route for protection (just reference not call it)
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect("/")
}

module.exports = router;
