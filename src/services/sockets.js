import apiUrl, { socketUrl } from './apiUrl';
import io from 'socket.io-client';

export default function startSockets(addNotification) {
  const socket = io(apiUrl);
  var notifications = [];
  socket.on('news', data => {
    console.log(data);

  })
  socket.on('notification', toDo => {
    addNotification(toDo)
  })

}
