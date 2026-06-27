const express=require('express');

const users=require('./MOCK_DATA.json');
const app=express();//instance--handler is the app
const PORT=8000
const fs=require('fs');
// const mongoose=require('mongoose');
// const { type } = require('os');


// //Schema
// const userSchema=new mongoose.Schema(
//     {
//         first_name:{
//             type:String,
//             required:true
//         },
//         last_name:{
//             type:String
//         },
//         email:{
//             type:String,
//             required:true,
//             unique:true
//         },
//         gender:{
//             type:String
//         },
//         job_title:{
//             type:String
//         }


//     }
// )

// //model

// const User=mongoose.model("users",userSchema)

// //connection
// mongoose.connect("mongodb://127.0.0.1:27017/youtube-app")
// .then(()=>console.log("mongodb connected"))
// .catch((err)=>console.log("error occured ",err))


// //middlewear plugin
// app.use(express.urlencoded({extended:false}));
// //this middlewear creates js objects of the data that is coming from the frontend and then addes it into req.body (adds that js object here in body so that further route can use it )

// app.use((req,res,next)=>{
//     res.setHeader('X-myName','Kajol Piyush');
//     //always add X to custom headers 
//     console.log(req.headers);
//     fs.appendFile('log.txt',`${Date.now()}:${req.path} ${req.method}`,(err,data)=>{
//          console.log("hello from middlewear 1");
//     next();
//     });
//     req.myUsername='kajol';//this is the secod function of middlewear that it can make changes to the request and response objects 
//     //now the next middlewear and routes can access this my username 
   
// })

// app.use((req,res,next)=>{
//     console.log("hello from middlewear 2", req.myUsername);
//     next();
// })


// //Routes
// app.get('/users',async (req,res)=>{
//     const allDbUsers=await user.find({});
//     const html=`
//     <ul>
//     ${allDbUsers.map((user)=>`<li>${user.first_name}</li>`).join('')}
//     </ul>
//     `
//     res.send(html)
// })

// app.route('/api/users/:id').get(async (req,res)=>{
//     // const id=Number(req.params.id);

//     // const user=users.find((user)=>user.id===id);


//     const user=await User.findById(req.params.id);
//     if(!user)   return res.statusCode(404).json({
//         error:"user not found"
//     })
//     return res.json(user);
// })
// .put((req,res)=>{
//     return  res.json({status:pending});
// })
// .patch((req,res)=>{
//     return  res.json({status:pending});
// })
// .delete((req,res)=>{
//     return  res.json({status:pending});
// })


// app.post('/api/users',async (req,res)=>{
//     const body=req.body;
//     //body will come as undefined because express doesnt know what type of data is coming so here we need to use middlewear
//     if(!body ||
//         !body.first_name ||
//         !body.last_name ||
//         !body.email ||
//         !body.gender ||
//         !body.job_title
//     )
//     {
//         return res.statusCode(400).json({msg:'all fields are not present'});
//     }
//     // users.push({...body,id:users.length+1});
//     // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
//     //     return  res.statusCode(201).json({status:'success',id:users.length});
//     // })


//     const result=await User.create({
//         first_name:body.first_name,
//         last_name:body.last_name,
//         email:body.email,
//         gender:body.gender,
//         job_title:body.job_title     
//     });
//     console.log(result);
//     return res.statusCode(201).json({msg:'created'});

//     console.log(body);
    
// })

// app.get('/api/users',(req,res)=>{
//     res.json(users);
// })


const mongoose = require("mongoose");

// Connection
mongoose.connect("mongodb://127.0.0.1:27017/youtube-app-1")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("Mongo Error", err));

// Schema
// const userSchema = new mongoose.Schema({
// firstName: { type: String, required: true },
// lastName: { type: String },
// email: { type: String, required: true, unique: true },
// jobTitle: { type: String },
// gender: { type: String },
// }, { timestamps: true });

// Model
// const User = mongoose.model("user", userSchema);

// 2. CRUD Operations (8:10 - 18:14)
// Piyush updates the existing Express routes to interact with the database instead of a file system.

// Create (POST): (8:10 - 10:45)
// javascript
app.post("/api/users", async (req, res) => {
const body = req.body;
const result = await User.create({
first_name: body.first_name,
last_name: body.last_name,
email: body.email,
gender: body.gender,
jobTitle: body.job_title,
});
return res.status(201).json({ msg: "success" });
});

// Read (GET): (13:11 - 15:02)
// javascript
app.get("/api/users", async (req, res) => {
const allDbUsers = await User.find({});
return res.json(allDbUsers);
});

// Update (PATCH): (15:22 - 17:25)
// javascript
app.patch("/api/users/:id", async (req, res) => {
await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
return res.json({ status: "Success" });
});

// Delete (DELETE): (17:30 - 18:14)
// javascript
app.delete("/api/users/:id", async (req, res) => {
await User.findByIdAndDelete(req.params.id);
return res.json({ status: "Success" });
});


app.listen(8000,()=>`server started at port ${PORT}`);