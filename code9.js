const fs = require('fs')

const students ={
    name:"Ved",
    course:"MERN"
}

fs.writeFile('student.json',JSON.stringify(students,null,2),(err)=>{
    if(err){
        throw err 
    }
    console.log("File created");
    
})



