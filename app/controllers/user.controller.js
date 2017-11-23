var User = require('mongoose').model('User');
exports.render = function(req,res) {
    res.render('register',{username:req.user?req.user.username:''});
  }
exports.register = function(req,res,next) {
  console.log(req.body);
    if(!req.user){
      console.log(req.user);
      
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
    console.log(req.body);
    User.findOne({ username:req.body.username , 
      password:req.body.password
    },function(err,users){
      if(err){
        console.log("errors"+users);
      }
      if(users){
        console.log(users);
        res.render('index',{
          title : 'Logged in as '+users,
          isLoggedIn:true
        });
      }
      else{
          console.log("user");
          res.render('index',{
          title : 'Cannot login ',
          isLoggedIn:false
        });
      }
    });
    
  }