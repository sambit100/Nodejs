// to watch 42 of 5505 
//routing concept video 6
// import express module
import *as express from "express";

let app:any = express();

//get request
app.get("/sambit",(req:any,res:any)=>{
        res.status(200).json({"message":"welcome to typescript "})
})
app.listen(8080,()=>{
    console.log("server started Successfully!!!")
})