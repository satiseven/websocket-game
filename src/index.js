const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 3000;
app.use(express.static("public"));
io.on("connect", (socket) => {
  console.log("an user connected");
  socket.on("disconnect", () => {
    console.log("an user discounected");
  });
});
server.listen(port, () => {
  console.log("server is listen to port " + port);
});
