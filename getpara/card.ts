import * as express from "express";

let card:any =express.Router();

card.get("/",(req:any,res:any):any=>{
    res.status(200).json({"message":"data from card soon"});
})

export default card;