const express= require("express");
const path = require("path");
const app=express();

//built in middleware, to serve static files like html, css ,js

const staticPath= path.join(__dirname,"../public");
app.use(express.static(staticPath));

// app.get("/",(req,res)=>{
//     res.send("Welcome to home page");
// })
// app.get("/about",(req,res)=>{
//     res.send("Welcome to about page");
// })

app.listen("8000",()=>{
    console.log("Listening");
})