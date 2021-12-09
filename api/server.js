const express = require("express");
const accountRouter = require('./accounts/accounts-router')

const server = express();

server.use(express.json());

server.use(express.json());

server.use("*", (req, res)=>{
    res.status(404).json({message:"not found"})
})
server.use('/api/accounts', accountRouter)
module.exports = server;

