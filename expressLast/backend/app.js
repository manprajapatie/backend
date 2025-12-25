var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const expressSession = require("express-session")

//--------------------require flash
const flash = require("connect-flash")

var app = express();

app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret: "ding dong dig"
}));

//------------------ Flash setup
//flash is run after the express session
app.use(flash())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
