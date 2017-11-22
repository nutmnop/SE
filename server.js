process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');
var db = mongoose.connection;
require('./app/models/user.model');
console.log('pass mongoose');
//var db = mongoose();
var app = express();
console.log('pass express');
var passport = passport();
console.log('pass passport');
app.listen(8082);

console.log('server running');
