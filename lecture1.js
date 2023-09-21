// let http= require('http');

// let server = http.createServer((req,res)=>{
//     res.write( "<h1>welcome to  sambit http server</h1>");
//     // res.writeHead(200)
//     res.end();
// });
// server.listen(8080);
// console.log("server started");

//query parameter
let http = require('http');
let url = require('url');
let server = http.createServer((req,res)=>{
    //communication language between client and server
  res.writeHead(200,{'Content-Type':'text/html'});
// parse the request 
// here the url modules loads the data into the object obj
     let obj = url.parse(req.url,true).query;
 
      if(obj.uname =="sambit" && obj.pwd =="behera"){
        res.write("<h1>login success </h1>");
      }
      else{
        res.write("<h1>login failed </h1>");
      }

      res.end();

});
server.listen(8080);
console.log('server started query parameter')