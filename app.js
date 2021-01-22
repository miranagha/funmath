var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);

const dotenv = require('dotenv').config();

const morgan = require('morgan');


var passport = require('passport');
// var auth = require('./verify');
const auth = require('./auth');

var cors = require('cors');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var parentsRoute = require('./routes/parentsRoute');
var questionsRoute = require('./routes/questionsRoutes');
var resultRoute = require('./routes/Resultsroutes');

var adminsdetail = require('./routes/adminupdate');

var app = express();

var mongoose = require('mongoose');

//  const url = 'mongodb+srv://cluster0.bqkp4.mongodb.net/<Cluster0>?replicaSet=atlas-13h2j0-shard-0&w=majority&readPreference=primary&authSource=admin&appname=MongoDB%20Compass&retryWrites=true&ssl=true';
// const url = 'mongodb://localhost:27017/mathfunapp';
const url='mongodb+srv://magha001:Miran@123@funmath.mc3q2.mongodb.net/<funmathapp?retryWrites=true&w=majority';

const connect = mongoose.connect(url, { useNewUrlParser: true });

connect.then((db) => {
    console.log("Connected to mongodb server");
}, (err) => { console.log(err); });



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));





app.use(morgan('tiny'));
app.use(express.urlencoded({extended: false }));



// app.use(session({
//   name: 'session-id',
//   secret: 'mysessionkey',
//   saveUninitialized: false,
//   resave: false,
//   store: new FileStore()
// }));


app.use('*', cors({

  origin: '*',
  credentials:true

}));



app.use('/', indexRouter);


app.use('/users', usersRouter);

app.use(auth.verifyUser);

app.use('/kids', parentsRoute);
app.use('/Questions', questionsRoute);
app.use('/Results', resultRoute);

app.use('/admindet', adminsdetail);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
