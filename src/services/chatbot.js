import qrcode from "qrcode-terminal";
import controllerMessage from "../interface/index.js";
import fs from "fs";

export const showQrCode = (client) => {
  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });
};

export const receiveMessage = (client) => {
  client.on("message", (message) => {
    controllerMessage(message);
  });
};

export const connectQrCode = (client) => {
  client.on("ready", () => {
    console.log("Client is ready!");
  });
};
