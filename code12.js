const fs = require('fs')

const users = [
    {
        name: "Ved",
        age: 19
    },
    {
        name: "Royal",
        age: 18
    },
    {
        name: "Tanu",
        age: 20
    }
]

fs.writeFile('users.json',JSON.stringify(users,null,2),(err)=>{
    if(err) throw err
    console.log('File created successfully')
})
