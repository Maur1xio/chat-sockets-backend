const { Router } = require("express");
const chatsControllers = require("./chats.controllers");

const chatsRoutes = Router();

chatsRoutes.get("/find-chat", chatsControllers.findChatOrCreate);


module.exports = chatsRoutes;