const express = require('express')
const mongoose = require('mongoose')
const app=express()


const userschema = new mongoose.Schema({
     username:{
        type:String
     },
     password:{
        type:String
     }
})

const User = mongoose.model('User',userschema)

app.get('/',async(req,res)=>{
    
     res.send('home')
})

app.get('/set',async(req,res)=>{
     try {
         if(req.query.username && req.query.password){
             const response = await User.create({
                 username:req.query.username,
                 password:req.query.password
             })

             res.send(`@ ${req.query.username} created successfully!!!!!!`)
         }
     } catch (error) {
        res.send("user is not created")
     }
})


// app.post('/',async(req,res)=>{
//     const username = req.params.username;
//     const password = req.params.password;
//     console.log(username)
//     try {
//         //  const  response = await User.create({
//         //     username,password
//         //  })

//         //  res.send(`yes ${username} created successfully`)
//     } catch (error) {
//          throw error
//     }
// })

app.get('/use',async(req,res)=>{
    res.send("yes great ash!!!!!")
})
app.listen(process.env.PORT||4000,async()=>{
     try {
        const conn = await mongoose.connect("mongodb+srv://ash:ash123ishere@cluster0.kfdnrne.mongodb.net/depDB")
        console.log("db connected....")
     } catch (error) {
         console.log("something wrong in db connection")
     }
    console.log("server is listening.... ")
})