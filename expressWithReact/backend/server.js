const express = require('express')

//cors are require for connection
//cors allow frontend (react) to connect with backend
//we have to install cors
const cors = require('cors')
const app = express()

//they both are middlewhere (app.use()) but we don't write next in them because cors() and express.json both are buildin express methods that contain next inside them.
app.use(cors())
app.use(express.json())
app.use(express.static('./public'));

//To show error
app.get('/error', function(req, res, next) {
  next(new Error("Something went wrong"));
});


app.get('/api/massage', function (req, res) {
    //res.json() send data to frontend
    res.json({ massage: "Hello from backend side 2" })
})

//Error Handler should be place in last
app.use(
    function errorHandler(err, req, res, next) {
        if (res.headersSent) {
            return next(err)
        }
        res.status(500).json(
            {
                success: false,
                message: err.message || "Internal Server Error"
            }
        )
    }
)



app.listen(3000)