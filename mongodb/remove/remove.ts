import * as express from "express";
import * as mongodb from "mongodb";


let ashokit:any= mongodb.MongoClient;

let remove = express.Router().delete("/",(req:any,res:any):any=>{
ashokit.connect("mongodb://localhost:27017",(err:any, connection:any):any=>{

if(err) throw err;
else{
    let db = connection.db("sambit");
    db.collection("behera").deleteOne({"username":req.body.username},(err,res)=>{
        if(err) throw err;

        else{
            res.status(200).json({message:`${req.body.id}record deleted successfully`});
        }
    });
}
})


});

export default remove;