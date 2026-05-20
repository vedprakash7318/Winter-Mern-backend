const http = require('http')
const { MongoClient,ObjectId } = require('mongodb')

const url = 'mongodb://localhost:27017/'

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
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE')
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