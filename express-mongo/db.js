const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGOURI);

let db;

const connectDB = async () => {
    try {
        await client.connect();
        db = client.db(process.env.DBNAME);
        console.log("DB Connected Successfully");
    } catch (error) {
        console.log("DB Connection Failed", error);
    }
};

module.exports = { connectDB, get db() { return db; } };
