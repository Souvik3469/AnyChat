import { Context } from 'koa';
import chatService from '../chat/services/chat';

const chatController = {
  async test(ctx: Context) {
    const { message } = ctx.request.body;
    const response = await chatService.handleMessage(message);
    ctx.send({ response });
  },
};

export default chatController;
