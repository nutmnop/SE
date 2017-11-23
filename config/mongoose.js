var config = require('./config');
var mongoose = require('mongoose');

module.exports = function(){
  mongoose.set('debug',config.debug);
 
  var db = mongoose.connect('config.uri',function(err){if(err)console.log(err)});
  require('../app/models/user.model');
  console.log('aa');
  //db = mongoose.connection;
  //db.connection;
  
  return db;
}
