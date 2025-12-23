const express = require('express');

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    //res.send('Welcome to the Error Handling Middleware Example!');
    
throw Error("This is an Error");
});
app.use ((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke! ' + err.message);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});