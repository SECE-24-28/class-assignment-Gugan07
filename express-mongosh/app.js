const express = require("express")
const dotenv = require("dotenv")
dotenv.config()

const app = express()
const PORT = process.env.PORT;

//application.use("/api/user");

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("server is listening on", PORT);
    });
});