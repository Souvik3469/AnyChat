import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface ChatMessage {
  sender: 'user' | 'server'; 
  content: string;
}

const useWebSocket = (url: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]); 
  useEffect(() => {
    const socketInstance = io(url, {
      transports: ['websocket'], 
    });

    socketInstance.on('connect', () => {
      console.log('Connected to WebSocket server (Log from Client)');
    });


    socketInstance.on('message', (msg: string) => {
      console.log(`Received same message back from server ${msg} (Log from Client)`);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'server', content: msg },
      ]);
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, [url]);

  const sendMessage = (msg: string) => {
    if (socket) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', content: msg },
      ]);
       console.log(`Client sending message to the server ${msg} (Log from Client)`);
      socket.emit('message', msg); 
    }
  };

  return { messages, sendMessage }; 
};

export default useWebSocket;
