const {MongoClient} = require('mongodb')

const url = "mongodb://localhost:27017/"

const client = new MongoClient(url);


const readData = async()=>{
    await client.connect()
    console.log("Mongodb is connected");
    const database = client.db("School")

    // select collection
    const collection = await database.collection("students")
    // read data
    let data = await collection.find().toArray()
    console.log(data);
    
    
}

readData()