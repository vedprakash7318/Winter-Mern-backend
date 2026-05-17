const {MongoClient} = require('mongodb')

const url = "mongodb://localhost:27017/"

const client = new MongoClient(url);

const deleteData = async()=>{
    await client.connect()
    console.log("Mongodb is connected");
    const database = client.db("School")
    // select collection
    const collection = await database.collection("users")

    // delete one document

    // await collection.deleteOne(
    //     {name:"Nikhil"}
    // )


    // delete many 
    // await collection.deleteMany(
    //     {age:{$gt:18}}
    // )



    // delete collection
    await collection.drop()

    // delete database
     await database.dropDatabase()
    console.log("Database Deleted");


    await client.close()
    console.log("Connection close");
    
    
}
deleteData()