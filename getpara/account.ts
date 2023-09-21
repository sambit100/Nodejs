import * as express from "express"
let account:any = express.Router();

account.get("./",(req:any,res:any):any=>{
    res.status(200).json({"message":"welcome to account module"});

});

account.get("/login",(req:any,res:any):any=>{
    if(req.query.uname==="admin" && req.query.upwd ==="admin"){
      res.status(200).json({"login":"success"})
    } else{
        res.status(400).json({"login":"failed"});
    }
})

export default account;