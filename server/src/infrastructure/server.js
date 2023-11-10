import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { ChatProvider } from '../adapter/ChatProvider.js';

const chatProvider = new ChatProvider();

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('<h1>Server for chat app</h1>');
});

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', socket => {
  console.log("user connected");

  const userData =  chatProvider.addUser();
  const dataToSend = JSON.stringify(userData);

  socket.emit('init-user', dataToSend);

  socket.on('disconnect', () => {
    console.log('user disconnected');
    chatProvider.removeUser(userData.id);
  });

  socket.on('chat-message', (message, id) => {
    console.log("new message ", message, id);
    const newMessage = chatProvider.addMessage(message, id);
    io.emit('chat-message', JSON.stringify(newMessage));
  });
});

server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})