const express = require('express')

//cors are require for connection
//cors allow frontend (react) to connect with backend
//we have to install cors
const cors = require('cors')
const app = express()

//they both are middlewhere (app.use()) but we don't write next in them because cors() and express.json both are buildin express methods that contain next inside them.
app.use(cors())
app.use(express.json())

app.get('/', function(req, res){
    res.send("Hello World This is working")
})

app.get('/api/massage', function(req, res){
    //res.json() send data to frontend
    res.json({massage: "Hello from backend side"})
})



app.listen(3000)