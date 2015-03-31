var express = require('express');
var db = require('./db');
// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 3000);

app.all('*', function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'content-type, accept');
  res.header('Access-Control-Max-Age', 10);

  if(req.method === 'OPTIONS') {
    res.status(200).send(null);
  } else {
    return next();
  }
});

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use("/classes", router);

// Serve the client files
app.use(express.static(__dirname + "/../client"));

// If we are being run directly, run the server.
var host = "http://127.0.0.1";
var port = app.get("port");

if (!module.parent) {
  app.listen(port);
  console.log("Listening on", host, "at port", app.get("port"));
}

