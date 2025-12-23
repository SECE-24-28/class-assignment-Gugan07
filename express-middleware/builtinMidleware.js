const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.json());

const items = [
    {
        id:1,
        itemName:'pen',
        price:10
    },
    {
        id:2,
        itemName:'pencil',
        price:5
    }
]
app.get("/items", (req, res) => {
    res.send(200).send(items);
});
 app.post("/add-item", (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    id:items.length + 1;
    itemName: req.body.itemName;
    price: req.body.price;
    res.status(201).send("Item added successfully");
 });

 app.put("/edit-items/:id",(req, res) => {
    const { id, itemName, price } = req.body;
    const item = items.find((item) => item.id === parseInt(id));


let idFound = false;
items.forEach((item) => {
    if (id == item.id) {
        idFound = true;
        item.itemName = itemName;
        item.price = price;
    }
});
if(idFound){
    res.status(200).send(items);
    
}

 app.delete("/items/:id", (req, res) => {   
    const id = req.params.id;
    const index = items.findIndex((item) => item.id === parseInt(id));
    if (index !== -1) {
        items.splice(index, 1);
        res.status(200).send("Item deleted successfully");
    } else {
        res.status(404).send("Item not found");
    }
    });

app.update("")

 app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
 });