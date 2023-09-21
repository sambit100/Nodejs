"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transaction_1 = require("./transaction");
var Account_1 = require("./Account");
var app = express();
app.use("/module1", transaction_1.default);
app.use("/module2", Account_1.default);
app.listen(8080, function () {
    console.log("server started successfully");
});
//To access the default url httP://localhost:8080/module1
//to access the transcation sambit url module http://localhost:8080/module1/sambit
