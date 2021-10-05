
/*
    Code by Eddie Coldrick
    Text and code © 2021. All rights reserved. Not for use without permission.
    www.bengal.productions
    www.eddiestech.co.uk
*/

const express = require("express");
var app = express();

// set all files in the /public/* folder to be served to the user. This is used for the images.
app.use(express.static(__dirname+'/public'));

// display index.html on request to /
app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

// display social.html on request to /socialengineering. etc.
app.get("/socialengineering", (req,res)=>{
    res.sendFile(__dirname+"/views/social.html")
})

app.get("/maliciouscode", (req,res)=>{
    res.sendFile(__dirname+"/views/malicious.html")
})
app.get("/webthreats", (req,res)=>{
    res.sendFile(__dirname+"/views/web.html")
})
app.get("/other", (req,res)=>{
    res.sendFile(__dirname+"/views/other.html")
})
app.get("/preventingthreats", (req,res)=>{
    res.sendFile(__dirname+"/views/prevent.html")
})

// start web server on port 3007
const listener = app.listen(3007, () => {
    console.log("Your app is listening on port " + listener.address().port)
  });
  