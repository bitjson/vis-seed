var express = require('express');
var app = express();
var logfmt = require("logfmt");
var server = require('http').createServer();
var port = process.env.PORT || 3000;

app.use(logfmt.requestLogger());

// Authentication
var username = "username";
var password = "password";

app.use(express.basicAuth(username, password));

app.use(express.static(__dirname + '/serve'));

app.listen(port);
console.log("server started, listening on port " + port);
