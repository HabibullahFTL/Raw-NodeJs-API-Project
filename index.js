/*
* Title: Uptime Monitoring Application 
* Description: A RESTfull API to monitor up/down of user defined links
* Author: Habibullah Bahar
* Date: 02-0-2021
*/

// dependencies
const http = require('http');

// app object - module scaffolding
const app = {}

// configurations
app.config = {
    port : 3000,
}

// create server
app.createServer = ()=>{
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port,()=>{
        console.log(`Server listening port ${app.config.port}`);
    })
}

// handle request - response
app.handleReqRes = (req,res)=>{
    //response handle 
    res.end("Request end");
}

// Sart the server
app.createServer()