const http = require('http');
const { Server } = require('socket.io');
const app = require('./app');
require("dotenv").config();
require("./db/connectMongo");

console.clear();

const server = http.createServer(app);
const io = new Server(server, {
    "cors" : {
        "origin" : "*"
    }
});



// TODO: Start server
server.listen(app.get('PORT'), function(){
    console.log(`Server on port ${app.get('PORT')}`);
});