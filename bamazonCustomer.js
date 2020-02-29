var mysql = require("mysql");
var inquirer = require ("inquirer");
var fs = require("fs");
require ('custom-env').env('test');





//create your DB connection in config.js

var connection = mysql.createConnection({

    host: process.env.DB_HOST,

    port: 3306, 

    user ""



// })