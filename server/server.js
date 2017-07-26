const express = require('express')
    , bodyParser = require('body-parser')
    , mongoose = require('mongoose')
    , session = require('express-session')
    , path = require('path')
    , config = require('./config')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0');


const app = module.exports = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: true
}))

const userCtrl = require('./controllers/userCtrl');
const strategy = new Auth0Strategy(config.auth, (accessToken, refreshToken, extraParams, profile, done) => {
    userCtrl.checkForUser(profile, done)
})



passport.use(strategy);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());

app.set('passport', passport);




mongoose.connect(config.mongoConnect)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected safely to database');
});

require('./routes')(app);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


app.listen(config.port, () => {
  console.log("Listening on", config.port);
})
