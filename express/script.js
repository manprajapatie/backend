const express = require('express')
const app = express()

//This is a middleware that is always run before any route
//It is always take an function that hold req, res, and next
//req - req hold all user data (that should be location or other thinks as well we can check it through console.log(req))
//res - res hold response 
//next() - next is used to push code one line to another because when we use middleware it stuck in it and don't go to another line, that's why we have to use next() it help code to go to another line.

app.use(function(req, res, next){
    console.log(req);

})

app.get('/', function(req, res){
    res.send("Hellow world")
    
})

app.listen(3000)