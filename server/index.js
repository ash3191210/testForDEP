const express = require('express')
const app=express()

app.get('/',async(req,res)=>{
     res.send("server is running from ANIKET SHARMA")
})

app.listen(process.env.PORT||4000,()=>{
    console.log("server is listening.... ")
})