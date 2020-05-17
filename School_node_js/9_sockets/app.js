const express = require("express");
const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server);

const helmet = require("helmet");
app.use(helmet());

// used to avoid cross site scripting
const escape = require("escape-html");


io.on("connection", socket => {
    //console.log(socket.id);

    socket.on("a client wrote this", (data) => {
        
        // send to all
        io.emit("A client said", { thoughts: escape(data.thoughts) });
        
        // send to own socket
        //socket.emit("A client said", data);
        
        // sends to all other sockets than the one who sent it 
        //socket.broadcast.emit("A client said", data);
   
    });

});

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/index.html");

});

server.listen(3000, (error) => {
    if (error) {
        console.log("Error running the server");     
    }else {
        console.log("the server is running on port", 3000)
    }

});