var config = require('./config');
var mongoose = require('mongoose');

module.exports = function(){
  mongoose.set('debug',config.debug);
  //require('../app/models/user.model');
  var db = mongoose.connect('config.uri',function(err){if(err)console.log(err)});
  
 
  return db;
}
