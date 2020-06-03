/*
 * 5
 */
var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('dotenv').config();
global.Path = require('path');

let createContainer =  require (Path.resolve('App/Src/IOCcontainer/CreateContainer.js'));

global.Container = createContainer();
global.Helper  = require(Path.resolve('App/Src/Helper.js'));

let routesWeb = require (Path.resolve('App/Routes/web.js'));
routesWeb.build(app);

app.listen(3000, function () {
    //console.log('Example app listening on port 3000!');
});