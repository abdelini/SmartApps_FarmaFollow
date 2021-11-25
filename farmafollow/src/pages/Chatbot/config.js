import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Bot';

const config = {
  initialMessages: [createChatBotMessage(`Hallo, waar kan ik je mee helpen?`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;