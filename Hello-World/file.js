const fs=require("fs");
fs.writeFileSync("./test.txt","hey there");

fs.writeFile("./test2.txt","this is test2",(err)=>{})

const result=fs.readFileSync("./contacts.txt","utf-8");
console.log(result);

fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error occured");
    }
    else{
        console.log(result);
    }
})
fs.appendFileSync("./test.txt","i am appending somethng");
