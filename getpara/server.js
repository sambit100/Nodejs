"use strict";
//http://localhost:8080/login?uname="sambit"&upwd="behera"
Object.defineProperty(exports, "__esModule", { value: true });
//import express
var express = require("express");
var app = express();
//before authentication we have to perform authorisation
//to give the judgement we have taken next function
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    if (allHeaders.token === 'sambit') {
        next(); // when ever we call the next function means authorisation success
    }
    else {
        res.status(500).json({ auth: "fail" });
    }
};
//default request 
app.get("/", function (req, res) {
    res.sendFile("C:/Users/sambi/Desktop/Node Ashok/getpara/index.html");
});
//AUTHENTICATION
// [auth] by using this we can connect authorisation with authentication
app.get("/login", function (req, res) {
    if (req.query.uname == "sambit" && req.query.pwd == "behera") {
        res.status(201).json({ login: "success" });
    }
    else {
        res.status(201).json({ login: "failed" });
    }
});
app.listen(8080, function () {
    console.log('server started successfully!');
});
