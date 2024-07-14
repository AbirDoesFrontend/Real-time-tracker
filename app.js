// Express Setup
const express = require("express");
const app = express();
// Express Setup


// Socekt.io Setup
const http = require("http");
const path = require("path");

const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);
// Socekt.io Setup

// Ejs Setup
app.set("view engine" , "ejs");
app.set(express.static(path.join(__dirname, "public")));
// Ejs Setup

app.get("/" , function(req , res) {
    res.send("Hey");
})

server.listen(3000);