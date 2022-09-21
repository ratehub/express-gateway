'use strict';

const passport = require('passport');
const path = require('path');

module.exports.loginForm = (request, response) => response.render(path.join(__dirname, 'views/login'));

module.exports.login = passport.authenticate('local', { successReturnToOrRedirect: '/', failureRedirect: '/login', keepSessionInfo: true });

module.exports.logout = (request, response, next) => {
  request.logout(function(err) {
    if (err) { return next(err); }
    response.redirect('/');
  });
};
