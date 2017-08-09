import apiUrl, { socketUrl } from './apiUrl';
import io from 'socket.io-client';

export default function startSockets() {
  const socket = io(apiUrl);
  socket.on('news', data => {
    console.log(data);

  })
}
