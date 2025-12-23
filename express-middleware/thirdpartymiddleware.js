const express = require("express")

const app = express();
const PORT = 4000;

app.get("/data",(req, res)=> {
    res.send("welcome to express middleware");
});

app.listen(PORT, () => {
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
        sum += 1;

    }
    res.send(num)
});