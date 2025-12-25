const express = require('express')
const app = express()


app.use(function(req, res, next){
    console.log("middleware 1");
     next()
})

app.use(function(req, res, next){
    console.log("middleware 2");
     next()
})

app.get('/', function(req, res){
    res.send("This is Home")
})
app.get('/profile', function(req, res){
    res.send("This is profile")
})

//Dynamic Route
//Params or Route Parameter

app.get('/profile/:username', function(req, res){
    const value = req.params.username
    //req hold all the user detail and req.params use for dynamic route access
    // with : (colon) we can create dynamic route by placing it where we want to make url dynamic
    //with req.params we can access dynamic route 
     res.send(`this is our dynamic route ${value}`)
})

//Error handler in express

app.listen(3000)