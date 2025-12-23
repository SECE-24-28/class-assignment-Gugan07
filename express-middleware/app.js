const express = require("express");

const app = express();
const router = express();
const PORT = 4000;
app.use((req,res,next) => {
    console.log('this is a middleware');
    req.currentTime = new Date();
    next();
});

app.use("/api/v1", router);

router.use((req, res, next) => {
    console.log("this is a router-level middleware");
    req.currentTime = new Date();
    next();
});

app.get("/data",(req, res) => {
    res.send("welcome to router level middleware");
    });

    router.get("/items", (req, res) => {
        res.send({id:1, itemname:'pen', price:10})
    });
    router.get("/items/:id", (req, res) => {
        res.send([
            { id:1, itemname:'pen', price:10 },
            { id:2, itemname:'pencil', price:5 }
        ])});


    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });