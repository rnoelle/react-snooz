const express = require('express')
    , bodyParser = require('body-parser')
    , mongoose = require('mongoose')
    , session = require('express-session')
    , path = require('path')
    , config = require('./config')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , User = require('./models/User')
    , startSockets = require('./controllers/sockets')
    , cookieParser = require('cookie-parser')
    , MongoStore = require('connect-mongo')(session)
    ;


const app = module.exports = express();

mongoose.connect(config.mongoConnect);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected safely to database');
});
var store = new MongoStore({mongooseConnection: db});

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
  secret: config.sessionSecret,
  key: config.cookieKey,
  resave: false,
  store: store,
  saveUninitialized: true
}));

const userCtrl = require('./controllers/userCtrl');
const strategy = new Auth0Strategy(config.auth, (accessToken, refreshToken, extraParams, profile, done) => {
    userCtrl.checkForUser(profile, done)
})

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);


passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, (err, user) => {
    done(err, user);
  })
});


app.set('passport', passport);


require('./routes')(app);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


const server = app.listen(config.port, () => {
  console.log("Listening on", config.port);
  startSockets(server, store);
})
