var passport = require('passport');
var mongoose = require('mongoose');


module.exports = function(){
    console.log('1');
    var User = mongoose.model('User');
    console.log('2');
    passport.serializeUser(function(user, done){
        done(null,user.id);
    });

    passport.deserializeUser(function(id,done){
        User.findOne({ _id: id},'-password -salt',function(err,user){
            done(err , user.id);
        });

    });

    require('./strategies/local.js')();



};