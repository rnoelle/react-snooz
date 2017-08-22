import apiUrl, { socketUrl } from './apiUrl';
const io = require('socket.io-client');

export default function startSockets(addNotification) {
  const socket = io();
  var notifications = [];

  socket.on('notification', toDo => {
    console.log('notified');
    addNotification(toDo)
  })

}
