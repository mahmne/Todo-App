const express = require('express');
const app = express();
const path = require('path');
// const items = ['ahmed', 'ali', 'matt'];

// var log = function (req, res, next) {
//   console.log('Logged', req.method, req.url);
//   next();
// };

// task 1 :create hello word in Express to get HTML file
// app.get('/', function (req, res, next) {
//   res.send('Hello World');
//   next();
// });

// make read html file
app.use('/', express.static('public'));

// app.get('/items', function (req, res, next) {
//   res.send(items);
// });

// task 2: add middleware log every request METHOD and URL
// app.use(log);

// setup static handler
app.use('/cssFile', express.static(path.join(__dirname, 'public')));

// listen to port 3000
app.listen(3000, function () {
  console.log('app listening in 3000');
});
