import soketIo from 'socket.io';

export default (server) => {
  const io = soketIo(server);

  io.sockets.on('connection', (socket) => {
    socket.on('message', (text, callBack) => {
      socket.broadcast.emit('message', text);
      callBack(text);
    });
  });

  return io;
};
