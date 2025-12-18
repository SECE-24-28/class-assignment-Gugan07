// core modules
// http path,os,fs

const http = require("http");

http.createServer((request, response) => {
    console.log("server is created");
    response.write("HTTP Server got created");
    response.end();
    response.on("finish", () => {
        console.log("response finished");
    });
});

Server.listen("4000");