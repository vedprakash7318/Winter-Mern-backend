// mongodb://localhost:27017/   mongoDB Connection String  Local 

const {MongoClient} = require('mongodb')
const url = "mongodb://localhost:27017/"
const client = new MongoClient(url)


async function connectDB(){
    await client.connect()
    console.log("MongoDb Connected");
    const db = client.db('school')
    const Students= await db.collection("Students")
    
    await Students.insertMany([
        {
            name:"John Doe",
            age: 20,
        }, 
        { 
            name:"Jane Doe",
            age: 22,
        },
    ])

    
    
}
connectDB()

  

