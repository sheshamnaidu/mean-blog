const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json())

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-with, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', "POST, GET, PATCH, DELETE, OPTIONS")
    next();
})


app.post('/api/posts', (req,res,next)=>{
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'post added successfully'
    })
})

app.use('/api/posts',(req,res,next)=>{
    const posts = [
        {
          id: '1234',
          title: 'first post',
          content: 'this is post'
        },
        {
            id: '123456',
            title: 'second post',
            content: 'this is second post'
        },
        
];
    res.status(200).json({
        message: 'posts fetched successfully',
        posts: posts
    })
 });

 
 module.exports = app;