import * as express from "express";

import transaction  from "./transaction";
import account from "./Account";

let app:any = express();
app.use("/module1",transaction);
app.use("/module2",account);

app.listen(8080,()=>{
     console.log("server started successfully")
});

//To access the default url httP://localhost:8080/module1
 //to access the transcation sambit url module http://localhost:8080/module1/sambit