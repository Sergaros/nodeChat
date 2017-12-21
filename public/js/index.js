let socket = io();

socket.on('connect', function(){
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'User2',
        text: 'Hello)'
    });
});

socket.on('disconnect', function(){
    console.log('Disconnected from server');
});

socket.on('newMessage', function(msg){
    console.log('newMessage ', msg);
});
