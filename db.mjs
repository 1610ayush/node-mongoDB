import { MongoClient } from "mongodb";

let dbConnection

//connect to database
export const connectToDb = (cb) => {
    MongoClient.connect("mongodb://localhost:27017/bookstore")
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        .catch (err => {
            console.log(err)
            return cb(err)
        })
}

//return our database connection 
export const getDb = () => dbConnection