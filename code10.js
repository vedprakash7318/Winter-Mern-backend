const fs = require('fs')
fs.readFile('student.json','utf-8',(err,data)=>{
    if(err) throw err
    const obj = JSON.parse(data)
    console.log(obj);
})