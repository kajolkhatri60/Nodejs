// function add(a,b){
//     return a+b;
// };
// function sub(a,b){
//     return a-b;
// }
//module.exports=add;
//module.exports={add,sub}
//module.exports={addfn:add,subfn:sub}
//second method
exports.sub=(a,b)=>a-b;
exports.add=(a,b)=>a+b;
//you can write this multiple times but the module.exports can be written only once 
