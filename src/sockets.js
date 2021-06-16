module.exports = function(io){


    //Socket.io-VIDEO
    io.on('connection', (socket) =>{
      console.log('new conection',socket.id);
      socket.on('stream',(image)=>{
          //emitir el evento a todos los sockets conectados
          socket.broadcast.emit('stream', image);
      });
    
      socket.on('send message',function (data){
        io.sockets.emit('new message', data);
      });

    });
}


