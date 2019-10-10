import Socket from 'socket.io-client';
const socket = Socket('http://localhost:3004');


const SubscriberOrder = (cb, change) => {
  socket.on('changeData', change => cb(null, change));
  socket.emit('changeData', change);
  
}


export { SubscriberOrder };