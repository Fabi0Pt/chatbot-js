import pkg from "whatsapp-web.js";

import {
  showQrCode,
  receiveMessage,
  connectQrCode,
} from "../services/chatbot.js";

export const connectionChat = async () => {
  const { Client } = pkg;
  const client = new Client();

  showQrCode(client);
  connectQrCode(client);
  receiveMessage(client);

  client.initialize();

  return true;
};
