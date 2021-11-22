module.exports = (io) =>
io.on('connection', (socket) => {
    socket.on('test', () => {
        io.emit('test', 'Olá!');
    });
});