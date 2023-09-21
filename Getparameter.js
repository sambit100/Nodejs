"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// video 7
//read get parameters in express js
//  how to read parameters from url
// params is a property of request object that is used to extract route parameter from the url
/*import *as express from "express";
let app:any =express();
app.get("/sample/user/:uname/upwd/:upwd",(req:any,res:any):any=>{

  if(req.params.uname==="sambit" && req.params.upwd==="behera"){
          res.send({login:"success"});
  }
  else{
      res.send({login:"failed"});
  }
  // console.log(req.params);
})
app.listen(8080,()=>{
  console.log("server started");
})
//http://localhost:8080/sample/user/sambit/pwd/sambit20 - in this link the username and password is given by frontend technology

//second way of reading parameter
req.query.uname
req.query.upwd

*/
var express = require("express");
var app = express();
app.get("/login", function (req, res) {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(201).json({ login: "success" });
    }
    else {
        res.status(401).json({ login: "failed" });
    }
});
app.listen(8080, function () {
    console.log("server started");
});
