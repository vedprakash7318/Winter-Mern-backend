const fs = require('fs')
fs.writeFile("demo.txt", "THis is demo file", (err) => {
    if (err) {
        throw err
    }
    console.log("File Created")
})

console.log("Start")
fs.writeFileSync("demo.txt", "Hello this is node")
console.log("file created");
console.log("End");
