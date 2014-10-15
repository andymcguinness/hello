/**
 * File: backend/server.js
 * Defined: express, app, bodyParser, port, router
 * Description: This file sets up our backend & API
 * Dependencies: Express v4, Mongoose v3.6.13, body-parser v1.0.1, ./routes, ./routes/api, Jade v0.31.2
 *
 * @package hello
 */

/* Base Setup */
// include required packages
var express     = require('express');           // rope in express
var app         = module.exports = express();   // define our app using express
var bodyParser  = require('body-parser');       // configure app to use body-parser
var routes      = require('./backend/routes');          // include our basic routing
var api         = require('./backend/routes/api');      // include our api routing
var http        = require('http');              // for starting the server

// allows us to get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set our port
var port = process.env.PORT || 8080;

// sets where our stuff is located
app.use(express.static(__dirname));

/* Routing */
// serve up index page
app.get('/', routes.index);

// serve up partials
// app.get(':feature/:partial', routes.partials);

// passing along routes for api
app.get('/v1/hello', api.hello);

// should all else fail
app.get('*', routes.index);


/* Start the Engines */
http.createServer(app).listen(port, function () {
    console.log('firing on port ' + port);
});
