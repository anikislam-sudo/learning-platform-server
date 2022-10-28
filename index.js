const express = require ("express");
const app = express ();
const cors = require ("cors");
app.use(cors());

const port = process.env.port || 5000;
const Categories = require ("./data/Categories.json");
const Courses =    require("./data/Courses.json");



app.get("/",(req,res)=>{
  res.send("Now API is running");
});

app.get("/Courses-Categories",(req,res)=>{
 res.send(Categories);
});
app.get("/AllCourses",(req,res)=>{
 res.send(Courses);
});

app.get("/category/:id",(req,res)=>{
    const id = req.params.id;
    const category_courses = Courses?.find((c)=>c._id === id);
    res.send(category_courses);
   }); 

 /* app.get("/courses/:id",(req,res)=>{
 const id = req.params.id;
 const singleItem = Courses?.find((c)=>c._id == id);
 res.send(singleItem);
});  */


app.listen (port,()=>{
    console.log("server is running",port);
});