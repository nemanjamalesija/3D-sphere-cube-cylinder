import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

type ServerToClientEvents = {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
};

type ClientToServerEvents = {
  hello: () => void;
};

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server<ClientToServerEvents, ServerToClientEvents>(server, {
  cors: {
    origin: 'http://127.0.0.1:5173',
    methods: ['GET'],
  },
});

io.on('connection', (socket) => {
  setInterval(() => {
    const randomValue = Number((Math.random() * 9.5 + 0.5).toFixed(2));

    socket.emit('basicEmit', randomValue, '2', Buffer.from([3]));
  }, 100);
});

server.listen(3000, () => {
  console.log('server is running');
});
