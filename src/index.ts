import bodyParser from 'body-parser'
import compression from 'compression'
import express, { type NextFunction, type Request, type Response } from 'express';
import http from 'http';
import { Server, type Socket } from 'socket.io';

import logUtils from '@utils/log.utils';
import router from '@routes/index.routes';

global.globalSocketIO = {};

const app = express();

const PORT = process.env.PORT || 3000;

// Body Parser Middleware
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Compression Middleware
app.use(compression());

app.use(logUtils.middleware);

app.get('/health-check', (req: Request, res: Response) => {
  return res.status(200).send({ message: 'Service is up!' });
});

app.use('/api', router);

// app.use('/tunnel', );

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('-----------Request Error-------------');
  console.log(err);
  console.log('-------------------------------------');
  next();
});

app.use('*', (req: Request, res: Response) => {
  return res.status(404).end();
});

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket: Socket) => {
  console.log('A user connected');

  socket.on('message', (data) => {
    console.log('Message from client:', data);
    // Broadcast message to all connected clients
    io.emit('message', data);
  });

  socket.emit('message', 'Welcome to the server!');

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
