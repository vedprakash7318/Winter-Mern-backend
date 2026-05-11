const fs = require('fs')
// write file

fs.writeFile("demo.txt", "This is demo file", (err) => {
    if (err) {
        throw err
    }
    console.log("File Created")
})




// update File 
 
fs.appendFile('demo.txt',"\nthis is new line",(err)=>{
    if(err){
        throw err  
    }
    console.log("file updated");
})


// read file

fs.readFile("demo.txt",'utf-8',(err,data)=>{
    if(err){
        throw err 
    }
    console.log(data);
    
})