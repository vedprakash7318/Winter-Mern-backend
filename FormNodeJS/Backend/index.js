const http = require('http')
const {MongoClient} = require('mongodb')

const url = 'mongodb://localhost:27017/'

const client = new MongoClient(url)

let collection;
const connectDB = async()=>{
    await client.connect()
    const database = client.db('College')
    await database.createCollection('Students')
    collection = database.collection('Students')
    console.log("MongoDB Connected");   
}
connectDB()
const server = http.createServer((req,res)=>{

    res.setHeader('Access-Control-Allow-Origin',"")
    res.setHeader('Access-Control-Allow-Headers',"")

   if(req.url==='/' && req.method=="GET"){
        res.end("Api is working")
   }
   else if(req.url==='/register' && req.method==='POST'){
    let body="";

    req.on('data',(chunk)=>{
        body +=chunk.toString()
    })

    req.on('end',async()=>{
        const data = JSON.parse(body)
        await collection.insertOne(data)
        res.writeHead(200,{
            'Content-Type':'application/json'
        })
        res.end(JSON.stringify({message:"Data Saved"}))
    })
    
   }

})


server.listen(3000,()=>{
    console.log("Server is runnig on port 3000");
    
})


//Post Add :- http://localhost:3000/register