const userCtrl = require('../controllers/userCtrl')
    , app = require('../server')
    , passport = app.get('passport')
    , config = require('../config');

const env = {
  AUTH0_CLIENT_ID: config.auth.clientID,
  AUTH0_DOMAIN: config.auth.domain,
  AUTH0_CALLBACK_URL: config.auth.callbackUrl
};

module.exports = app => {

  app.get('/auth/login', passport.authenticate('auth0', {
    clientID: env.AUTH0_CLIENT_ID,
    domain: env.AUTH0_DOMAIN,
    redirectUri: env.AUTH0_CALLBACK_URL,
    audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
    responseType: 'code',
    scope: 'openid'
  }));

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get(
    '/callback',
    passport.authenticate('auth0', {
      failureRedirect: '/'
    }),
    function(req, res) {
      res.redirect(req.session.returnTo || '/profile');
    }
  );

}
