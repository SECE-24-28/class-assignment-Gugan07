const express = require("express");
const { db } = require("./db");

const router = express.Router();

router.get("/data", async (req, res) => {
    try {
        const data = await db.collection("test").find({}).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

router.post("/add-employee",async (req, res) => {
    try {
        const result = await empCollection().insertOne(req.body);
        res.status(201).send({
            

        })