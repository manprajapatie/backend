const express = require('express')

const app = express()

app.use((req, res, next)=>{
    console.log("This is middleware");
    next()    //in middleware we stuck in same function if we don't write next() it will help us to move to another function or route

})

app.get(
    '/', function(req, res){
        res.send("Hello he he he kyu kyu he!")
    }
)

app.listen(3000)