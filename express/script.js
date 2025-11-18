const express = require('express')
const app = express()

//This is a middleware that is always run before any route
//It is always take an function that hold req, res, and next

//next() - next is used to push code one line to another because when we use middleware it stuck in it and don't go to another line (It is node problem), that's why we have to use next() it help code to go to another line.


//req - req hold all user data (that should be location, Name or other thinks as well, req hold all clint data that is send by clint to server)
//res - res hold control that can send response from server
//res is not a data, it has power to send response from server
app.use(function(req, res, next){
    console.log("middleware 1");
     next()
})

app.use(function(req, res, next){
    console.log("middleware 2");
     next()
})

app.get('/', function(req, res){
    res.send("Hello world")
    
})

app.get('/profile', function(req, res){
    res.send("This is profile")
    
})

app.listen(3000)