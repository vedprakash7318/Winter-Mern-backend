const http= require("http")

http.createServer((req,res)=>{
     res.writeHead(200,{
        "Content-Type":"text/html"
     })
    res.write("<h1>Welcome to Node.js</h1>")
    res.end()
}).listen(3000,()=>console.log("server is running"))