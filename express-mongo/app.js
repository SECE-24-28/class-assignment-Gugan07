const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { connectDB } = require("./db");
const router = require("./route");
const app = express();
const port = process.env.PORT;

connectDB().then(() => {
    app.use("/api/v1", router);

    app.listen(port, () => {
        console.log("Server is listening on", port);
    });
}).catch((error) => {
    console.error("Failed to connect to DB", error);
});
