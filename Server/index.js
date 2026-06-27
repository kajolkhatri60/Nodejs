const http=require('http');
const fs=require('fs');
const os=require('os');
console.log(os.cpus().length);
// const server=http.createServer((req,res)=>{
//     console.log("server started");
//     res.end("hello from server");
//     console.log(req);

// });
const server=http.createServer((req,res)=>{
    console.log("server started");
    const log=`/n${Date.now()}:${req.url} ${req.method} request received\n`;
    fs.appendFile("./logfile.txt",log,(err,data)=>{ //non blocking request

        switch(req.url){
            case '/':res.end("hello from server");
            break;
            case '/about':res.end("hello this is kajol");
            break;
            default:res.end("404 not found");
            break;
        }
    })
})
server.listen(8000,()=>console.log("server started"));