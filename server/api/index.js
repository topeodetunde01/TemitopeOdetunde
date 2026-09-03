var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
var logger = require('morgan');
require('dotenv').config();

var indexRouter = require('../routes/index');
var blogRouter = require('../routes/blog')
const storyRouter = require("../routes/story")
const galleryRouter = require('../routes/gallery')
const contactRouter = require('../routes/contactform')


var app = express();
app.use(cors())

let mongoString = process.env.MONGOSTRING

main()
.then( ()=> console.log("connected to db"))
.catch( err => console.log(err))


async function main(){
  await mongoose.connect(mongoString)
}

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'..','public')));

app.use('/', indexRouter);
app.use("/", blogRouter);
app.use("/", storyRouter);
app.use("/", galleryRouter);
app.use("/", contactRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  const error = req.app.get('env') === 'development' ? err : { status };

  if (req.path.startsWith('/api')) {
    return res.status(status).json({ success: false, message });
  }

  res.status(status);
  res.render('error', { message, error }, function(renderErr, html) {
    if (renderErr || res.headersSent) {
      if (!res.headersSent) {
        res.status(status).send(message);
      }
      return;
    }
    res.send(html);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server ready on port " + port + "."));

module.exports = app;
