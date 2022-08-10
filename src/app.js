import express from "express";
import { connectionChat } from "./config/connectionChatbot.js";
import puppeteer from "puppeteer";
const app = express();

const browser = await puppeteer.launch({
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

connectionChat();

export default app;
