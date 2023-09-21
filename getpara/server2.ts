import * as express from "express";
import account from "./account";
import transaction from "./transaction";
import card from "./card";


let app:any = express();
app.use ("/account",account);
app.use("/transaction",transaction);
app.use("/card",card);

app.listen(8080,()=>{
    console.log("server started successfully");
});

//http://localhost:8080/account default
//http://localhost:8080/account/login


//http://localhost:8080/transaction token,wish
//http://localhost:8080/card