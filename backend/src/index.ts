'use strict';
import { Server } from 'socket.io';
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
 
  const io = new Server(strapi.server.httpServer, {
    cors: {
      origin: '*', 
      methods: ['GET', 'POST'],
    },
  });


  io.on('connection', (socket) => {
    console.log('A client connected to the WebSocket server. (Log from Server)');


    socket.on('message', (message) => {
      console.log(`Received message from the client ${message}. (Log from Server)`);

      socket.emit('message',message);
    });

   
    socket.on('disconnect', () => {
      console.log('A client disconnected. (Log from Server)');
    });
  });

  console.log('Socket.IO server is running at http://localhost:1337');
  },
};