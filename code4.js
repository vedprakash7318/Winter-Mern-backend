// file system
// create   data fillup 
// update 
// delete 
//read
 
const fs = require('fs')

// fs.writeFile('demo.txt','Hello This is nodeJS FileSystem', (err)=>{
//     if(err){
//         return console.log("Error")
//     }
//     console.log("File create");
// })


fs.writeFileSync('demo1.txt',"Hello This is NodeJs")
console.log("File Created");


