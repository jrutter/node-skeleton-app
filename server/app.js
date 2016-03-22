/**
 * Main application file
 */

'use strict';

// BASE SETUP
// =============================================================================

// Get Packages
var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

// MongoLab Connect
var database = require('./config/database');
mongoose.connect(database.url); // connect to our database

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Port setup
var port = process.env.PORT || 3000;   

// ROUTES FOR OUR API
// =============================================================================
require('./routes')(app);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

// var server = require('http').createServer(app);

// Start server
// server.listen(function () {
//   console.log('Express server listening on port 3000');
// });

// var router = express.Router();