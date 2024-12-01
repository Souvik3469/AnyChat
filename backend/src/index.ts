'use strict';
import { Server, Socket } from 'socket.io';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET; 



interface CustomSocket extends Socket {
  user?: {
    id: string;
    email: string;
   
  };
}
module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  // bootstrap(/*{ strapi }*/) {},



   bootstrap({ strapi }) {
    // console.log("JWT:  ",JWT_SECRET)
    const io = new Server(strapi.server.httpServer, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });


    io.use((socket: CustomSocket, next) => {
      const token = socket.handshake.auth?.token;
      // console.log("Token from server",token)

      if (!token) {
        return next(new Error('Authentication error: No token provided'));
      }

      try {
        const decoded = jwt.verify(token, JWT_SECRET); 
        socket.user = decoded as CustomSocket['user'];
        // console.log(socket.user);
        console.log("Authenticated user (Log from Server)")
        next();
      } catch (error) {
        console.log("Authentication error (Log from Server)",error)
        return next(new Error('Authentication error: Invalid token'));
      }
    });

    io.on('connection', (socket: CustomSocket) => {
     
      console.log(`User connected: ${socket.user?.id} (Log from Server)`);

      socket.on('message', (message) => {
        console.log(`Received message from user ${socket.user?.id}: ${message} (Log from Server)`);
        console.log(`Sending same message back to user ${socket.user?.id}: ${message} (Log from Server)`);
        socket.emit('message', message);
      });

      socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.user?.id} (Log from Server)`);
      });
    });

    console.log('Socket.IO server is running at http://localhost:1337');
  },
};