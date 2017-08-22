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
    scope: 'openid profile'
  }));

  app.get('/api/isAuthenticated', userCtrl.isAuthenticated)

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get(
    '/callback',
    passport.authenticate('auth0', {
      failureRedirect: '/',
      successRedirect: '/dashboard'
    }),
    function(req, res) {
      res.redirect(req.session.returnTo || '/dashboard');
    }
  );

  app.get('/api/user', (req, res) => {
    if (req.user) {
      res.status(200).send(req.user);
    } else {
      res.status(401).send(req.session);
    }
  })

  app.patch('/api/user', userCtrl.editUser);

}
