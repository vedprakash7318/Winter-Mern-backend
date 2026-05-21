const http = require('http')
const { MongoClient,ObjectId } = require('mongodb')

// const url = 'mongodb://localhost:27017/'
const url = 'mongodb+srv://nk0071489_db_user:hwGypCrbySfSEtzY@mongodblearning.sr4geew.mongodb.net/MongoDbLearn?appName=MongoDBLearning'

const client = new MongoClient(url)

let collection;
const connectDB = async () => {
    await client.connect()
    const database = client.db('College')
    await database.createCollection('Students')
    collection = database.collection('Students')
    console.log("MongoDB Connected");
}
connectDB()
const server = http.createServer(async(req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
    if (req.method === 'OPTIONS') {
        res.writeHead(200)
        res.end()
        return
    }
    if (req.url === '/' && req.method == "GET") {
        res.end("Api is working")
    }
    else if (req.url === '/register' && req.method === 'POST') {
        let body = "";

        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', async () => {
            const data = JSON.parse(body)
            await collection.insertOne(data)
            res.writeHead(200, {
                'Content-Type': 'application/json'
            })
            res.end(JSON.stringify({ message: "Data Saved" }))
        })

    }
    else if(req.url=='/get-data' && req.method==='GET'){
        const data = await collection.find().toArray()
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify({ data }))
    }
    else if(req.url.startsWith('/delete/') && req.method==='DELETE'){

        
        const id = req.url.split('/')[2]
        
        
        await collection.deleteOne({ _id: new ObjectId(id) })
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify({ message: "Data Deleted" }))
    }
    else if(req.url.startsWith('/update/') && req.method==='PUT'){
        const id = req.url.split('/')[2]

        let body=''
        req.on('data',(chunk)=>{
            console.log("chunks:- ",chunk);
            
            body+=chunk.toString()

        })
        console.log("body:- ",body);
        
        req.on('end',async()=>{
            const data = JSON.parse(body)
            console.log("data:- ",data);
            
            await collection.updateOne(
                {_id:new ObjectId(id)},
                {
                    $set:{
                        name:data.name,
                        email:data.email,
                        phone:data.phone,
                        password:data.password
                    }
                }
            )
        })
    }
    else{
        res.writeHead(404, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify({ message: "Route Not Found" }))
    }

})


server.listen(3000, () => {
    console.log("Server is runnig on port 3000");

})


//Post Add :- http://localhost:3000/register