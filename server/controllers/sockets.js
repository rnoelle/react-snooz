const socket = require('socket.io')
    , ToDo = require('../models/ToDo')
    , passportSocketIo = require('passport.socketio')
    , cookieParser = require('cookie-parser')
    , config = require('../config')
    , notifications = require('./notifications')
    ;

module.exports = (app, store) => {
  const io = socket(app);

  io.set('authorization', passportSocketIo.authorize({
    cookieParser: cookieParser,
    key: config.cookieKey,
    secret: config.sessionSecret,
    store: store,
    success: onAuthorizeSuccess,
    fail: onAuthorizeFailure
  }))

  io.on('connection', socket => {
    socket.emit('news', 'socket connected');
    notifications.checkTasksOnInterval(socket);
  })


  function onAuthorizeSuccess(data, accept) {
    console.log('authorized');
    accept(null, true);
  }
  function onAuthorizeFailure(data, message, error, accept) {
    console.log('not authorized', message, error);
    accept(null, false);
  }
}
