---
Layout:
Title: "ExpressJS Database"
Date: 2020-01-28
---

### MongoDB
We keep receiving requests, but end up not storing them anywhere. We need a Database to store the data. For this, we will make use of the NoSQL database called MongoDB.
In order to use Mongo with Express, we need a client API for node. There are multiple options for us, but for this tutorial, we will stick to mongoose. Mongoose is used for document Modeling in Node for MongoDB. For document modeling, we create a Model (much like a class in document oriented programming), and then we produce documents using this Model (like we create documents of a class in OOP). All our processing will be done on these "documents", then finally, we will write these documents in our database.

A new database will be created for you. Whenever you open up the mongo shell, it will default to "test" db and you will have to change to your database using the same command as above.

To use Mongoose, we will require it in our index.js file and then connect to the mongodb service running