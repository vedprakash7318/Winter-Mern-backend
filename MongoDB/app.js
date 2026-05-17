const {MongoClient} = require('mongodb')

const url = "mongodb://localhost:27017/"

const client = new MongoClient(url);


const connectDB = async()=>{
    await client.connect()
    console.log("Mongodb is connected");
    const database = client.db("School")

    //craete collection only
    await database.createCollection("students")

    // select collection
    const collection = await database.collection("students")

    // insert data 

    await collection.insertMany([
        {
            name:"John Doe",
            age: 18,
            course:"Mern"
        }, 
        { 
            name:"Ved Prakash",
            age: 22,
            course:"PHP"
        },
        { 
            name:"Nikhil",
            age: 12,
            course:"PHP"
        },
    ])

}

connectDB()