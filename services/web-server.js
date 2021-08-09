const http = require('http');
const express = require('express');
const webServerConfig = require('../config/web-server.js');
let httpServer;
function initialize() {
  return new Promise((resolve, reject) => {
    const app = express();
    httpServer = http.createServer(app);
    app.get('/', (req, res) => {
            console.log('calling / endpoint');
      res.end('Welcome to Root API. Available endpoints are /aws, /lambda');
    });
    app.get('/lambda', (req, res) => {
            console.log('calling /lambda endpoint');
      res.end('Welcome to lambda');
    });
    app.get('/aws', (req, res) => {
            console.log('calling /aws endpoint');
      res.end('Welcome to  AWS !');
    });
    httpServer.listen(webServerConfig.port, err => {
      if (err) {
        reject(err);
        return;
      }
      console.log(`Web server listening on localhost:${webServerConfig.port}`);
      resolve();
    });
  });
}

module.exports.initialize = initialize;
function close() {
  return new Promise((resolve, reject) => {
    httpServer.close((err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}
module.exports.close = close;
