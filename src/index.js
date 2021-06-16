// required modules
require('dotenv').config();
const express = require('express');
const connection = require('./connection');
const apollo = require('./apollo');
const { createServer } = require('http');

// create express server
const app = express();

// create http server with express
const server_http_ws = createServer(app);

// connection to database
connection();

// apollo server
apollo.start();
apollo.applyMiddleware({ app });
apollo.installSubscriptionHandlers(server_http_ws);

// listen server
server_http_ws.listen({ port: process.env.PORT || 4000 }, () => {
   console.log('Server is running');
})