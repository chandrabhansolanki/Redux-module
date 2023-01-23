const express = require("express")
const EventEmitter = require('events');
const app = express()
const eventEmitter = new EventEmitter();

eventEmitter.on("countAPI",()=> {
    console.log("start counting");
})

app.get("/",async(req,res)=> {
    res.send("event ")
    eventEmitter.emit('start');
})

app.get('/upload', (req,res)=>{
    res.send("upload done")
    eventEmitter.emit('start');
})

app.listen(6200)
