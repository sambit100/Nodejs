import express from "express";
// import mongodb module 
// mongodb module used to connect to mongodb database
import * as mongodb from  "mongodb";
//create the client 
// mongodb follows the client server architechture
let ashoit  = mongodb.MongoClient;
// here ashokit is the client
// let connection_string ="mongodb://localhost:27017";
//create the module
 let fetch =express.Router().get("/",(req:any,res:any)=>{
    ashoit.connect("mongodb://localhost:27017",(err,connection)=>{
        if(err) throw err;
        else {
            let db:any = connection.db("sambit");
            db.collection("behera").find({}).toArray((err,array)=>{
                 if(err) throw err;
                 else{
                         res.send(array);
                 }
            })
        }
    });
 })

