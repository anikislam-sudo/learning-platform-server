const express = require ("express");
const app = express ();
const cors = require ("cors");
app.use(cors());

const port = process.env.port || 5000;
const allCollection = require ("");



app.get("/",(req,res)=>{
  res.send("Now server is running");
});

app.get("/allData",(req,res)=>{
 res.send(allCollection);
});
app.get("/category/:id",(req,res)=>{
 const id = req.params.id;
 const singleItem = travelCollection?.find((p)=>p.id == id);
 res.send(singleItem);
});

app.listen (port,()=>{
    console.log("server is running",port);
});