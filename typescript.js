"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// to watch 42 of 5505 
//routing concept video 6
// import express module
var express = require("express");
var app = express();
//get request
app.get("/sambit", function (req, res) {
    res.status(200).json({ "message": "welcome to typescript " });
});
app.listen(8080, function () {
    console.log("server started Successfully!!!");
});
