const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGOURI;

connectDB = async () => {
    try{
        await mongoose.connect(MONGO_URI)
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed", error);
    }
}