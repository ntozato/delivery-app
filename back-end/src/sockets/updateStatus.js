module.exports = (io) =>
io.on('connection', (socket) => {
    socket.on('updateStatus', (msg) => {
        io.emit('updateStatus', `status: ${msg}`);
    });
});