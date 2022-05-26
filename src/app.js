const express = require('express');
const cors = require('cors');
const usersRoutes = require('./services/users/users.routes');
const chatsRoutes = require('./services/chats/chats.routes');

const app = express();

// TODO: Settings
app.set("PORT", process.env.PORT || 3001);

// TODO: Middlewares
app.use(express.json());
app.use(cors());

// TODO: Routes
app.use("/api/users", usersRoutes);
app.use("/api/chats", chatsRoutes);



module.exports = app;