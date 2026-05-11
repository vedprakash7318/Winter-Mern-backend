const fs = require('fs')

fs.readFile('users.json','utf-8',(err,data)=>{
    if(err) throw err 
    const users = JSON.parse(data)
    users.push({
        name: "Rohit",
        age: 21
    })
    fs.writeFile('users.json',JSON.stringify(users,null,2),(err)=>{
        if(err) throw err 
        console.log("User added");
        
    })



})