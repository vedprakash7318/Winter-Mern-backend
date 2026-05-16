MongoDb :- NoSQL Database 

SQL :- Structured Query Language
    Table 
        Row Column 
        Relational Database
NOSQL:-Not Only SQL 
    Collection
        Documents
    

SQL :- 

Form1:- 
    Name
    Email
    Phone
    Address
No. Col:- 4


Form2:-
    Name
    Email
    Phone
    Adress
    Father Name
No. Col :- 5



Full Stack Development :- 

Frontend :- 
    HTML
    CSS
    JavaScript
    React Js
Backend
Database
Hosting :-



http://localhost:5173

http://localhost:3000


https://ervedprakash.in

https://api.ervedpraksh.in


Local:- mongoDb Compas 
Server :-  MongoDB Atlas

MERN :-   MongoDB :- BSON 


MONGOSH SHELL :-  TERMINAL HAI MONGODB 


<!-- Mongo Db Command for mongosh -->


create database or select database

use databasa_name

ex:- use MERNB2


Insert one Data in Collection 

db.students.insertOne({
    name:"Er Ved Prakash",
    email:"ved@gmail.com"
})

Insert many Data in Collection 

db.students.insertMany([
    {
    name:"Er Adash",
    email:"adarsh@gmail.com"
    },
    {
    name:"Satya Prakash",
    age:17
    },
    {
        name:"ShyamJee,
        age:37
    },
    {
        name:"ramJee",
        age:20
    },
    {
        name:"Er Chandan",
        age:27
    }
])



<!-- update data  -->


db.students.updateOne(
    {name:"Er Chandan"},
    {
     $set:{
        name:"Er Chandan Kumar"
     }   
    }
    )


<!-- create new document -->
db.students.updateOne(
    {name:"Er Chandan Kumar"},
    {
        name:"Chandu"
    }
)



<!-- delete one -->


db.students.deleteOne({
    name:"Er Adash"
})

<!-- condition based delete -->

db.students.updateOne(
  {name:"Rahul"},
  {
    $unset:{
      city:""
    }
  }
)

<!-- find all document -->
    db.students.find()

<!-- findOne:-  retrun first match -->

db.students.findOne({
    name:"Er Chandan"
})


<!-- find(condition) retrun all true match -->


db.students.find({
    name:"Er Chandan"
})



<!-- filter -->


db.students.find(
    {age:21}
)

<!-- operators -->

$gt:-   greater than


db.students.find({
    age:{$gt:21}
})
$gte:-   greater than equal


db.students.find({
    age:{$gte:21}
})




$lt:-   leass than


db.students.find({
    age:{$lt:21}
})

$lte:-   leass than equal


db.students.find({
    age:{$lte:21}
})


<!-- sorting -->

Ascending order
 db.students.find().sort({age:1})

descending order
 db.students.find().sort({age:-1})


 <!-- limit -->

 db.students.find().limit(2)
 <!-- skip -->
 db.students.find().skip(2)

<!-- pagination -->
db.students.find().skip(0).limit(10)




<!-- insert multiple data -->

db.students.inerstMany([
    {
        name:"Rahul",
        age:21,
        city:"Lucknow",
        courseId:101,
        marks:85,
    },
    {
        name:"Rohit",
        age:22,
        city:"Kanpur",
        courseId:102,
        marks:90,
    },
    {
        name:"Satyam",
        age:20,
        city:"Allahabad",
        courseId:101,
        marks:80,
    },
    {
        name:"Shivam",
        age:23,
        city:"Varanasi",
        courseId:103,
        marks:88,
    },
    {
        name:"Ankit",
        age:21,
        city:"Lucknow",
        courseId:102,
        marks:92,
    }
])


<!-- create new collection -->

db.course.insertMany([
    {
        courseId:101,
        courseName:"MERN Stack Development"
    },
    {
        courseId:102,
        courseName:"Data Science"
    },
    {
        courseId:103,
        courseName:"Cyber Security"
    }
])

<!-- Array Search  -->

db.students.insertOne({
  name:"Vikash",
  skill:["HTML","CSS","JS"]
})

<!-- Single value search  -->

db.students.find({
    skill:"HTML"
})

<!-- multiple value search  -->


db.students.fin({
    skill:{
        $in:["CSS","JS"]
    }
})


<!-- Projection -->

 db.students.find(
    {},
    {name:1}
 )


 1 means show 
 0 means hide

  db.students.find(
    {},
    {
        name:1,
        city:1,
        _id:0
    }
 )


 <!-- Indexing -->

 db.students.getIndexes()
 db.students.createIndex()