var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var User = require('./backend/user.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('server'));

app.get('/', function (req, res, next) {
  res.send('Hello World!');
});


app.post('/', function (req, res, next) {
	console.log(req.body);
  	User.create(req.body)
  		.then(function(newUser){
  			res.send(newUser);
  		})
  		.then(null,next)
});

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;