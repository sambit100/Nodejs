// we will make it as submodule
import * as express from 'express';

//express.router automally gives a submodule
 let transaction:any = express.Router();

 transaction.get("/",(req:any,res:any):any=>{
       res.status(200).json({message:"data from transaction module"});
 })
transaction.get("/sambit",(req:any,res:any)=>{
  res.status(200).json({message:"transaction data from sambit"})
})
export default transaction;