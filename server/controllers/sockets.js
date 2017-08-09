const socket = require('socket.io')
    ;

module.exports = (app) => {
  console.log('starting sockets...');
  const io = socket(app)
  io.on('connection', socket => {
    console.log('socket started');
    socket.emit('news', {socket: 'connected'});
  })
}
