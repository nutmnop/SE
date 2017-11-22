var User = require('mongoose').model('User');
exports.render = function(req,res) {
    res.render('register',{username:req.user?req.user.username:''});
  }
exports.register = function(req,res,next) {
    if(!req.user){
      console.log(req.user);
      console.log(req.body);
      var user = new User(req.body);
      console.log('save');
      user.provider = 'local';
      
      user.save(function(err){
        if(err) return res.redirect('/register');
        

        req.login(user,function(err){//passport ทำให้
          if(err) return next(err);
          console.log('login');
          return res.redirect('/');
        });
      });




    }else{
      return res.redirect('/');
    };
  }
  exports.login = function(req,res) {
    
  }