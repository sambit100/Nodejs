"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// this the second sub module
var account = express.Router();
account.get("/", function (req, res) {
    res.status(200).json({ message: "welcome to account module" });
});
account.post("/", function (req, res) {
    res.status(200).json({ message: "account will be added soon-----" });
});
exports.default = account;
