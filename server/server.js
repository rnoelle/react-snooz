const express = require('express')
    , bodyParser = require('body-parser')
    , mongoose = require('mongoose')
    , session = require('express-session')
    , path = require('path')
    , config = require('./config');

const app = module.exports = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: true
}))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

mongoose.connect(config.mongoConnect).then(()=> {
  console.log('database connected');
});

require('./routes')(app);



app.listen(3004, () => {
  console.log("Listening on", config.port);
})
