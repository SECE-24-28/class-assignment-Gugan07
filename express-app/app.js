const express = require('express');

const app = express();
const PORT = 4000;

const items = [
    { id:1, 
      itemname:'pen',
       price:10 },

    { id:2,
      itemname:'pencil',
      price:5 
    }
]
app.get("/", (req, res) => {
    res.send("Welcome to the Express.js server!");
});
app.get("api/items", (req, res) => {
    const id = req.params.id;
    const item = items.find((item) => item.id === parseInt(id));
    res.send(item);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});