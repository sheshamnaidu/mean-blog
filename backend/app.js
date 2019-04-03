const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const Post = require('./models/posts');
const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://shesham:Amma@143@cluster0-qzsts.mongodb.net/node-angular?retryWrites=true", {useNewUrlParser: true })
.then(()=>{
    console.log('connected to database')
})
.catch(()=>{
    console.log('connection failed')
})

app.use(bodyParser.json())

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-with, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', "POST, GET, PATCH, DELETE, OPTIONS")
    next();
})


app.post('/api/posts', (req,res,next)=>{
    const post = new Post({
        title:req.body.title,
        content: req.body.content
    })
    post.save();
    res.status(201).json({
        message: 'post added successfully'
    })
})

app.get('/api/posts',(req,res,next)=>{
    Post.find().then(documents => res.status(200).json({
        message: 'posts fetched successfully',
        posts: documents
    }))    
 });

app.delete("/api/posts/:id", (req,res,next)=>{
    // console.log(req.params.id);
    Post.deleteOne({_id:req.params.id})
    .then(result =>{
        console.log(result);
        res.status(200).send({message: "post deleted"})
    })
})
 
 module.exports = app;