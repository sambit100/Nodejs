"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// body parser module used to read post parameters
var express = require("express");
//import body-parser
var bodyparser = require("body-parser");
//create the rest object
var app = express();
//this rest object used to develope the rest services
//if we ant to perform any operation we need app.use
//set the mime type
app.use(bodyparser.json());
//receive the form data, and parse the data (extended ex-uname,upwd---)
//bodyparser.urlencoded -> means form data
//extended -false -> which data is read we should in a position to read it 
app.use(bodyparser.urlencoded({ extended: false }));
//authorisation
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    var token = allHeaders.token;
    if (token === "nodejs") {
        next();
    }
    else {
        res.status(401).json({ auth: "fail" });
    }
};
//create the post request
app.post("/login", [auth], function (req, res) {
    //the data is coming from client application
    if (req.body.uname === "admin" && req.body.upwd === "admin") {
        res.status(200).json({ login: "success" });
    }
    else {
        res.status(401).json({ login: "failed" });
    }
});
app.listen(8080, function () {
    console.log("server started successfully");
});
