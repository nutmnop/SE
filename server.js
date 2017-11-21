process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose');
var express = require('./config/express');
var db = mongoose.connection;
var app = express();


app.listen(8082);

console.log('server running');
