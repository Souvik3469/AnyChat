interface ChatService {
  handleMessage: (message: string) => Promise<string>;
}

const chatService: ChatService = {
  async handleMessage(message: string): Promise<string> {
    console.log('Message received in service:', message);
    return `Echo: ${message}`;
  },
};

export default chatService;
