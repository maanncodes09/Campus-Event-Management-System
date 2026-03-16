const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://127.0.0.1:27017/eventDB")
.then(()=>console.log("MongoDB Connected"));

app.use("/",authRoutes);

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});
