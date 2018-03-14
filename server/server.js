const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('createMessage', (message) => {
    console.log('create message: ', message);
  })

  socket.emit('newMessage', {
    from: 'Linda',
    text: 'Love you too.'
  })

  socket.on('disconnect' , () => {
    console.log('Client disconnected');
  })
})

server.listen(port, () => {
  console.log('listening to port:', port);
})
