var socket = io();

socket.on('connect', function(){
  console.log('connected to server');

  socket.emit('createMessage', {
    from: 'Kiv',
    text: 'Yup, that works for me.'
  });
});


socket.on('disconnect', function(){
  console.log('disconnected from server');
});

socket.on('newEmail', function(){
  console.log('working new Email')
})

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
})
