import * as express from 'express';
// this the second sub module
let account:any = express.Router();
account.get("/",(req:any,res:any):any=>{
    res.status(200).json({message:"welcome to account module"})
});
account.post("/",(req:any,res:any)=>{
     res.status(200).json({message:"account will be added soon-----"})
});
export default account;