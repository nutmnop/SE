module.exports = function(app){
    var user = require('../controllers/user.controller');
    app.route('/register')
    .post(user.register)
    .get(user.render);
    app.post('/login',user.login);
}