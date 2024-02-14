const express = require("express");
const server = express();
const http = require("http").createServer(server);
const router = require("./router/routes");
const io = require("socket.io")(http);
const { Socket } = require("dgram");
const { debugPort } = require("process");
const port = process.env.PORT;

server.use("/" , router);
server.use(express.static("public"));

server.set("view engine" , "ejs")

io.on("connection" , (socket)=>{
    console.log("Connected");

    socket.on('message' , (data)=>{
       
        socket.broadcast.emit('message2' , data);
    })

})

http.listen(port , ()=>{
    console.log("Server is Started ")
})