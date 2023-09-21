//http://localhost:8080/login?uname="sambit"&upwd="behera"


//import express
import * as express from 'express'

let app:any =express();
//before authentication we have to perform authorisation
//to give the judgement we have taken next function
let auth=(req:any,res:any,next:any):any=>{
    let allHeaders = req.headers;
    if(allHeaders.token==='sambit')
    {
        next(); // when ever we call the next function means authorisation success

    }
    else{
      res.status(500).json({auth:"fail"});
    }
    

};
//default request 
// this will send to the html file and from that we can enter id and password 
// we set sucess on successful authentication
app.get("/",(req:any,res:any):any=>{
    res.sendFile("C:/Users/sambi/Desktop/Node Ashok/getpara/index.html");
})






//AUTHENTICATION
// [auth] by using this we can connect authorisation with authentication
app.get("/login",(req:any,res:any):any=>{
    if(req.query.uname=="sambit" && req.query.pwd=="behera"){
        res.status(201).json({login:"success"});
    }
    else{
        res.status(201).json({login:"failed"});
    }
});
app.listen(8080,()=>{
    console.log('server started successfully!');
})