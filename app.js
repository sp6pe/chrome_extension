var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var User = require('./backend/user.js');
var csv = require('express-csv')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//var publicPath = path.join(__dirname, '/frontend');
app.use(express.static('frontend'));

app.get('/', function (req, res, next) {
  res.sendFile( __dirname +'/frontend/index.html');
});

app.get('/users',function(req,res,next){
	User.find()
		.then(function(userData){
			res.status(200).json(userData)
		})
		.then(null,next)
})


app.post('/', function (req, res, next) {
	console.log(req.body);
  	User.create(req.body)
  		.then(function(newUser){
  			res.send(newUser);
  		})
  		.then(null,next)
});

app.get('/csv',function(req,res,next){
	res.csv([
    ["a", "b", "c"]
  , ["d", "e", "f"]
  ]);
})

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;