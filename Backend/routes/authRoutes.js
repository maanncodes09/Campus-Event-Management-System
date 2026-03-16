const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");


/* SHOW REGISTER PAGE */
router.get("/register",(req,res)=>{
    res.render("register");
});


/* REGISTER USER */
router.post("/register",async(req,res)=>{

    const {name,email,password} = req.body;

    const hashedPassword = await bcrypt.hash(password,10);

    const user = new User({
        name,
        email,
        password:hashedPassword
    });

    await user.save();

    res.send("User registered successfully");
});


/* SHOW LOGIN PAGE */
router.get("/login",(req,res)=>{
    res.render("login");
});


/* LOGIN USER */
router.post("/login",async(req,res)=>{

    const {email,password} = req.body;

    const user = await User.findOne({email});

    if(!user){
        return res.send("User not found");
    }

    const valid = await bcrypt.compare(password,user.password);

    if(!valid){
        return res.send("Incorrect password");
    }

    res.redirect("/events");
});


/* EVENTS PAGE AFTER LOGIN */
router.get("/events",(req,res)=>{
    res.render("events");
});

module.exports = router;