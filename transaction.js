"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// we will make it as submodule
var express = require("express");
//express.router automally gives a submodule
var transaction = express.Router();
transaction.get("/", function (req, res) {
    res.status(200).json({ message: "data from transaction module" });
});
transaction.get("/sambit", function (req, res) {
    res.status(200).json({ message: "transaction dat from sambit" });
});
exports.default = transaction;
