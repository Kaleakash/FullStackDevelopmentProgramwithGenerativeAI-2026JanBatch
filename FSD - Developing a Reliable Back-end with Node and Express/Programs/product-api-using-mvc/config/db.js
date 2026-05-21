// let mongodb = required("mongodb");   // load all function or classes part of that module 
const { MongoClient } = require("mongodb"); // load only particular object or function 

//const client = new MongoClient(process.env.MONGO_URL);

let URL = "mongodb://localhost:27017"
const client = new MongoClient(URL);

let database;

const connectDB = async () => {

    try {

        await client.connect();

        console.log("MongoDB Connected Successfully");

        //database = client.db(process.env.DB_NAME);
        database = client.db("test_db");
    } catch (error) {

        console.log("Database Connection Error", error);
    }
};

const getDB = () => {

    return database;
};

module.exports = {connectDB,getDB};