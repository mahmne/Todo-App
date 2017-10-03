const express = require('express');
const app = express();
const path = require('path');

var log = function (req, res, next) {
  console.log('Logged', req.method, req.url);
  next();
};

// task 1 :create hello word in Express
app.get('/', function (req, res, next) {
  res.send('Hello World');
  next();
});

// task 2: add middleware log every request METHOD and URL
app.use(log);

// setup static handler
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
  console.log('app listening in 3000');
});
