const {MongoClient} = require('mongodb')

const url = "mongodb://localhost:27017/"

const client = new MongoClient(url);

const updateData = async()=>{
    await client.connect()
    console.log("Mongodb is connected");
    const database = client.db("School")
    // select collection
    const collection = await database.collection("students")
    // update data

    //  await collection.updateOne(
    //     {name:"John Doe"},
    //     {$set:{
    //         name:"John Doe Updated",
    //         age:40
    //     }}
    //  )


    // update many
    await collection.updateMany(
        {age:{$gt:18}},
        {
            $set:{
                Class:12
            }
        }
    )
     console.log("Data updated");
}

updateData()