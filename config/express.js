
var express = require('express');
var bodyParser = require('body-parser');
var validator = require('express-validator');

module.exports = function(){
    var app = express();
    
    app.use(bodyParser.urlencoded({
        extended: true
      }));
    app.use(bodyParser.json());
    app.use(validator());

    app.set('views','./app/views');
    app.set('view engine','ejs');
    require('../app/routes/index.routes')(app);
    require('../app/routes/movie.routes')(app);
    require('../app/routes/user.routes')(app);
    app.use(express.static('./public'));
  
    return app;
    
}

