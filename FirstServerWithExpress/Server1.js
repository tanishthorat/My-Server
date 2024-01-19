const http = require('http');
const express = require('express');

const server = express();

server.get("/",(req,res)=>{
    res.send("Tanish C. Thorat")
})

server.listen(3100);