process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');
var db = mongoose();
//var db = mongoose.connection;
//var User = require('./app/models/user.model');
var app = express();

var passport = passport();

app.listen(8082);

console.log('server running');
