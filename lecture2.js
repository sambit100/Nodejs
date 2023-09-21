//express is the 3rd party modue present in node js
// express is rest framework 
// it is used to develope the rest services
// all the modules add to node_modules

 let express = require('express');

 // create the rest object
 let app = express();
 // creating the rest services get put post delete
 app.get("/",(req,res)=>{
    res.status(200).json({"message":"default get request"});

        // res.write()
 })
 app.get("/demo",(req,res)=>{
    res.status(200).json({"message":"data from mongodb soon"});

 });

app.post("/",(req,res)=>{
    res.status(200).json({"message":"default post request"});

})

app.post("/demo",(req,res)=>{
    res.status(200).json({"message":" demo post request"})
})



 app.listen(8080);
 console.log("express get post started");