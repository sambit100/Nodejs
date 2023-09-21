// body parser module used to read post parameters
import * as express from 'express';

//import body-parser
import * as bodyparser from 'body-parser';

//create the rest object
let app:any =express();

//this rest object used to develope the rest services
//if we ant to perform any operation we need app.use


//set the mime type
app.use(bodyparser.json());
//receive the form data, and parse the data (extended ex-uname,upwd---)
//bodyparser.urlencoded -> means form data
//extended -false -> which data is read we should in a position to read it 
app.use(bodyparser.urlencoded({extended:false}));


//authorisation
let auth:any =(req:any,res:any,next:any):any=>{
    let allHeaders = req.headers;
    let token = allHeaders.token;

    if(token ==="nodejs"){
       next();
    }
        else{
            res.status(401).json({auth:"fail"});
        }
}

//create the post request
app.post("/login",[auth],(req:any,res:any):any=>{
    //the data is coming from client application
  if(req.body.uname==="admin" && req.body.upwd ==="admin"){
        res.status(200).json({login:"success"});
  }else{
    res.status(401).json({login:"failed"});
  }
});

app.listen(8080,()=>{
    console.log("server started successfully");
})
