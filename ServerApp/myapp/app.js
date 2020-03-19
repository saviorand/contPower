if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
};
var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');
require('./models/post');

var indexRouter = require('./routes/index');
var markdownRouter = require('./routes/markdownConsumer');
var saveRouter = require('./routes/dbsave.js');
var findRouter = require('./routes/dbfind.js');

var app = express();

/* Set up a whitelist and check against it:
var whitelist = ['http://localhost:3000/'];
var corsOptions = {
  origin: function (origin, done) {
    if (whitelist.indexOf(origin) !== -1) {
      done(null, true)
    } else {
      done(new Error('Not allowed by CORS'))
    }
  }
};*/

// Then pass them to cors:
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/markdown', markdownRouter);
app.use('/save', saveRouter);
app.use('/find', findRouter);

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

// Connect to DB

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


// DB debug (remove in production)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Connected to database');
  // we're connected!
});


module.exports = app;
