const express = require('express')
const app=express()
app.set('view engine','ejs')
app.get('/',async(req,res)=>{
     res.send('home')
})

app.get('/use',async(req,res)=>{
    res.send("yes great ash!!!!!")
})
app.listen(process.env.PORT||4000,()=>{
    console.log("server is listening.... ")
})