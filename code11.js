const fs = require('fs')

fs.unlink('student.json',(err)=>{
    if(err) throw err
    console.log("file deteled");
    
})