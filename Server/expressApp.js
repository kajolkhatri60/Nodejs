const http=require('http');
const express=require('express');
const app=express();//this is the handler function


app.get('/',(req,res)=>{
    return res.end("hi from the root"+"hey"+req.query.name);
})
app.get("/about",(req,res)=>{
    return res.end("hi from about page"+"hey"+req.query.name);
})

// const myserver=http.createServer(app);
// myserver.listen(8000,(err,data)=>{})
//we do not have to write this also this is alsoo handled by express

app.listen(8000,()=>console.log('server started'));
